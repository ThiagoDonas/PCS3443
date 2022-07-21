from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float, Date
# from sqlalchemy.orm import relationship

from database import Base


class Funcionario(Base):
    __tablename__ = "funcionarios"

    cadastro = Column(Integer, primary_key=True, index=True)
    CPF = Column(Integer, unique=True, index=True)
    salario = Column(Integer, default=0)
    nome = Column(String)
    ativo = Column(Boolean, default=True)


class Gerente(Base):
    __tablename__ = "gerentes"

    cadastro_ger = Column(Integer, ForeignKey("funcionarios.cadastro"), primary_key=True, index=True)
    senha = Column(String)


class Vendedor(Base):
    __tablename__ = "vendedores"

    cadastro_ven = Column(Integer, ForeignKey("funcionarios.cadastro"), primary_key=True, index=True)
    valor_vendas = Column(Float, default=0)
    comissao = Column(Float, default=0)


class Cliente(Base):
    __tablename__ = "clientes"

    cadastro_cli = Column(Integer, primary_key=True, index=True)
    CPF = Column(Integer, unique=True, index=True)
    nome = Column(String)
    compras = Column(Integer, default=0)


class Produto(Base):
    __tablename__ = "produtos"

    codigo_produto = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    valor = Column(Float, default=0)
    quantidade = Column(Integer, default=0)
    # owner_id = Column(Integer, ForeignKey("users.id"))

    # owner = relationship("User", back_populates="items")


class Venda(Base):
    __tablename__ = "vendas"

    codigo_venda = Column(Integer, primary_key=True, index=True)
    cadastro_comprador = Column(Integer, ForeignKey("clientes.cadastro_cli"), index=True)
    cadastro_vendedor = Column(Integer, ForeignKey("funcionarios.cadastro"), index=True)
    codigo_produto = Column(Integer, ForeignKey("produtos.codigo_produto"), index=True)
    quantidade = Column(Integer)
    # data_venda = Column(Date, index=True)
    valor_total = Column(Float)
