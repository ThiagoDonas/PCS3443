from sqlalchemy.orm import Session

import models, schemas


def create_venda(db: Session, Venda: schemas.VendaCreate):
    codigo_produto = Venda.codigo_produto
    quantidade_produto = Venda.quantidade
    db_produto = db.query(models.Produto).filter(models.Produto.codigo_produto == codigo_produto).first()
    db_vendedor = db.query(models.Vendedor).filter(models.Vendedor.cadastro_ven == Venda.cadastro_vendedor).first()

    if(quantidade_produto > db_produto.quantidade):
        return

    valor_total = Venda.quantidade * db_produto.valor
    db_produto.quantidade = db_produto.quantidade - quantidade_produto

    if (db_vendedor != None):
        db_vendedor.valor_vendas = db_vendedor.valor_vendas + valor_total
        db_vendedor.comissao = db_vendedor.comissao + valor_total * 0.05

    db_venda = models.Venda(cadastro_vendedor=Venda.cadastro_vendedor, cadastro_comprador=Venda.cadastro_comprador, codigo_produto=Venda.codigo_produto, quantidade=Venda.quantidade, valor_total=valor_total)
    db.add(db_venda)
    db.commit()
    db.refresh(db_venda)
    return db_venda


def get_vendas(db: Session):
    return db.query(models.Venda).offset(0).limit(100).all()


def get_vendas_cli(nome: str, db: Session):
    db_cliente = db.query(models.Cliente).filter(models.Cliente.nome == nome).first()
    cadastro_cliente = db_cliente.cadastro_cli

    return db.query(models.Venda).filter(models.Venda.cadastro_comprador == cadastro_cliente).all()


def create_produto(db: Session, Produto: schemas.ProdutoCreate):
    db_produto = models.Produto(nome=Produto.nome, valor=Produto.valor, quantidade=Produto.quantidade)
    db.add(db_produto)
    db.commit()
    db.refresh(db_produto)
    return db_produto


def get_produtos(db: Session):
    return db.query(models.Produto).offset(0).limit(1000).all()


def get_produto(db: Session, codigo_produto: int):
    return db.query(models.Produto).filter(models.Produto.codigo_produto == codigo_produto).first()


def delete_produto(db: Session, codigo_produto: int):
    db_produto = db.query(models.Produto).filter(models.Produto.codigo_produto == codigo_produto).first()
    db.delete(db_produto)
    db.commit()
    return


def update_produto(db: Session, valor: float, quantidade: int, codigo_produto: int):
    db_produto = db.query(models.Produto).filter(models.Produto.codigo_produto == codigo_produto).first()
    if(valor != 0):
        db_produto.valor = valor

    db_produto.quantidade = quantidade
    db.commit()
    db.refresh(db_produto)

    return db_produto


def get_funcionarios(db: Session):
    return db.query(models.Funcionario).offset(0).limit(100).all()


def get_funcionario(db: Session, cadastro: int):
    return db.query(models.Funcionario).filter(models.Funcionario.cadastro == cadastro).first()


def get_vendedores(db: Session):
    return db.query(models.Vendedor).offset(0).limit(100).all()


def get_gerentes(db: Session):
    return db.query(models.Gerente).offset(0).limit(100).all()


def create_cliente(db: Session, Cliente:schemas.ClienteCreate):
    db_cliente = models.Cliente(CPF=Cliente.CPF, nome=Cliente.nome)
    db.add(db_cliente)
    db.commit()
    db.refresh(db_cliente)
    return db_cliente


def get_clientes(db: Session):
    return db.query(models.Cliente).offset(0).limit(100).all()


def get_cliente(db: Session, nome: str):
    return db.query(models.Cliente).filter(models.Cliente.nome == nome).first()


def delete_cliente(db: Session, nome: str):
    db_cliente = db.query(models.Cliente).filter(models.Cliente.nome == nome).first()
    db.delete(db_cliente)
    db.commit()
    return


def create_funcionario(db: Session, Funcionario: schemas.FuncionarioCreate, cargo: str):
    db_func = models.Funcionario(CPF=Funcionario.CPF, nome=Funcionario.nome, salario=Funcionario.salario)
    db.add(db_func)
    db.commit()
    db.refresh(db_func)

    if(cargo == "vendedor" or cargo == "Vendedor" or cargo == "VENDEDOR"):
        db_vendedor = models.Vendedor(cadastro_ven=db_func.cadastro)
        db.add(db_vendedor)
        db.commit()
        db.refresh(db_vendedor)

    elif(cargo == "gerente" or cargo == "Gerente" or cargo == "GERENTE"):
        db_gerente = models.Gerente(cadastro_ger=db_func.cadastro, senha=Funcionario.senha)
        db.add(db_gerente)
        db.commit()
        db.refresh(db_gerente)

    else:
        return db_func

    return db_func


def status_funcionario(db: Session, cadastro: int, novo_status: bool):
    db_func = db.query(models.Funcionario).filter(models.Funcionario.cadastro == cadastro).first()
    db_func.ativo = novo_status
    db.commit()
    db.refresh(db_func)
    return db_func


def delete_funcionario(db: Session, cadastro: int, cargo: str):
    db_func = db.query(models.Funcionario).filter(models.Funcionario.cadastro == cadastro).first()
    db.delete(db_func)

    if (cargo == "vendedor" or cargo == "Vendedor" or cargo == "VENDEDOR"):
        db_vendedor = db.query(models.Vendedor).filter(models.Vendedor.cadastro_ven == cadastro).first()
        db.delete(db_vendedor)

    elif (cargo == "gerente" or cargo == "Gerente" or cargo == "GERENTE"):
        db_gerente = db.query(models.Gerente).filter(models.Gerente.cadastro_ger == cadastro).first()
        db.delete(db_gerente)

    db.commit()
    return db_func
