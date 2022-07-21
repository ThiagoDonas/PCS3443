from pydantic import BaseModel


class FuncionarioBase(BaseModel):
    CPF: int
    nome: str
    salario: int


class FuncionarioCreate(FuncionarioBase):
    cargo: str
    senha: int


class Funcionario(FuncionarioBase):
    cadastro: int
    ativo: bool

    class Config:
        orm_mode = True


class Vendedor(BaseModel):
    cadastro_ven: int
    valor_vendas: float
    comissao: float

    class Config:
        orm_mode = True


class Gerente(BaseModel):
    cadastro_ger: int
    senha: int

    class Config:
        orm_mode = True


class ClienteBase(BaseModel):
    CPF: int
    nome: str


class ClienteCreate(ClienteBase):
    pass


class Cliente(ClienteBase):
    cadastro_cli: int
    compras: int

    class Config:
        orm_mode = True


class ProdutoBase(BaseModel):
    nome: str
    valor: float
    quantidade: int


class ProdutoCreate(ProdutoBase):
    pass


class Produto(ProdutoBase):
    codigo_produto: int

    class Config:
        orm_mode = True


class VendaBase(BaseModel):
    cadastro_vendedor: int
    cadastro_comprador: int
    codigo_produto: int
    quantidade: int
    # data_venda: datetime



class VendaCreate(VendaBase):
    pass


class Venda(VendaBase):
    codigo_venda: int
    valor_total: int

    class Config:
        orm_mode = True
