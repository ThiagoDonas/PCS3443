from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

import crud, models, schemas
from database import SessionLocal, engine


models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["*",]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/vendas", response_model=schemas.Venda)
def adiciona_venda(Venda: schemas.VendaCreate, db: Session = Depends(get_db)):
    db_venda = crud.create_venda(db=db, Venda=Venda)
    return db_venda


@app.get("/vendas/lista", response_model=list[schemas.Venda])
def mostra_vendas(db: Session = Depends(get_db)):
    db_produtos = crud.get_vendas(db=db)
    return db_produtos


@app.get("/vendas/cliente", response_model=list[schemas.Venda])
def mostra_vendas(nome: str, db: Session = Depends(get_db)):
    db_vendas = crud.get_vendas_cli(nome=nome, db=db)
    return db_vendas


@app.post("/produtos", response_model=schemas.Produto)
def adiciona_produto(Produto: schemas.ProdutoCreate, db: Session = Depends(get_db)):
    db_produto = crud.create_produto(db=db, Produto=Produto)
    return db_produto


@app.get("/produtos/lista", response_model=list[schemas.Produto])
def mostra_produtos(db: Session = Depends(get_db)):
    db_produtos = crud.get_produtos(db=db)
    return db_produtos


@app.post("/produtos/atualiza", response_model=schemas.Produto)
def atualiza_produtos(valor: float, quantiade: int, codigo_produto: int, db: Session = Depends(get_db)):
    db_produtos = crud.update_produto(db=db, valor=valor, quantidade=quantiade, codigo_produto=codigo_produto)
    return db_produtos


@app.delete("/produtos/deleta")
def remove_produto(codigo_produto: int, db: Session = Depends(get_db)):
    db_produto = crud.get_produto(db=db, codigo_produto=codigo_produto)
    crud.delete_produto(db=db, codigo_produto=codigo_produto)
    return db_produto.nome + " deleted!"


@app.post("/clientes/", response_model=schemas.Cliente)
def adiciona_cliente(Cliente: schemas.ClienteCreate, db: Session = Depends(get_db)):
    return crud.create_cliente(db=db, Cliente=Cliente)


@app.get("/clientes/lista", response_model=list[schemas.Cliente])
def mostra_clientes(db: Session = Depends(get_db)):
    db_clientes = crud.get_clientes(db=db)
    return db_clientes


@app.get("/clientes/busca", response_model=schemas.Cliente)
def mostra_cliente(nome: str, db: Session = Depends(get_db)):
    db_cliente = crud.get_cliente(db=db, nome=nome)
    return db_cliente


@app.delete("/clientes/remove")
def remove_cliente(nome: str, db: Session = Depends(get_db)):
    db_cliente = crud.get_cliente(db, nome=nome)
    crud.delete_cliente(db, nome=nome)
    return db_cliente.nome + " deleted!"


@app.post("/funcionarios", response_model=schemas.Funcionario)
def adiciona_funcionario(Funcionario: schemas.FuncionarioCreate, db: Session = Depends(get_db)):
    return crud.create_funcionario(db=db, Funcionario=Funcionario, cargo=Funcionario.cargo)


@app.post("/funcionarios/atualiza_status", response_model=schemas.Funcionario)
def atualiza_status_funcionario(cadastro: int, novo_status: bool, db: Session = Depends(get_db)):
    return crud.status_funcionario(db=db, cadastro=cadastro, novo_status=novo_status)


@app.get("/funcionarios/lista", response_model=list[schemas.Funcionario])
def mostra_funcionarios( db: Session = Depends(get_db)):
    db_funcionarios = crud.get_funcionarios(db=db)
    return db_funcionarios


@app.get("/funcionarios/vendedores/lista", response_model=list[schemas.Vendedor])
def mostra_vendedores( db: Session = Depends(get_db)):
    db_vendedores = crud.get_vendedores(db=db)
    return db_vendedores


@app.get("/funcionarios/gerentes/lista", response_model=list[schemas.Gerente])
def mostra_vendedores( db: Session = Depends(get_db)):
    db_gerentes = crud.get_gerentes(db=db)
    return db_gerentes


@app.get("/funcionarios/busca", response_model=schemas.Funcionario)
def mostra_funcionario(cadastro: int, db: Session = Depends(get_db)):
    db_funcionario = crud.get_funcionario(db=db, cadastro=cadastro)
    return db_funcionario


@app.delete("/funcionarios/remove")
def apaga_funcionario(cadastro: int, cargo:str, db: Session = Depends(get_db)):
    db_funcionario = crud.get_funcionario(db=db, cadastro=cadastro)
    crud.delete_funcionario(db=db, cadastro=cadastro, cargo=cargo)
    return db_funcionario.nome + " deleted!"
