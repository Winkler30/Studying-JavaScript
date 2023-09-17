class Produto {
  nome;
  preco;
  descricao;
  codigo;
  quantidade_em_estoque;

  alterarPreco(novoPreco) {
    if (novoPreco >= 0) {
      this.preco = novoPreco;
    }
  }
  adicionarEstoque(quantidade) {
    this.quantidade_em_estoque += quantidade;
  }
  removerEstoque(quantidade) {
    const novoEstoque = this.quantidade_em_estoque - quantidade;
    if (novoEstoque >= 0) {
      this.quantidade_em_estoque = novoEstoque;
    } else {
      throw new Error("Quantidade em estoque não pode ser negativa");
    }
  }
  constructor(nome, descricao, codigo) {
    this.nome = nome;
    this.descricao = descricao;
    this.codigo = codigo;
    this.quantidade_em_estoque = 0;
    this.preco = 0;
  }
}

class Smartphone extends Produto {
  marca;
  modelo;
  sistema_operacional;

  descricao() {
    return `
        nome: ${this.nome} \n
        preco: ${this.preco} \n
        descricao: ${this.descricao} \n
        codigo: ${this.codigo} \n
        quantidade_em_estoque: ${this.quantidade_em_estoque} \n
        marca: ${this.marca} \n
        modelo: ${this.modelo} \n
        sistema_operacional: ${this.sistema_operacional} \n
    `;
  }
  constructor(nome, descricao, codigo, marca, modelo, sistema_operacional) {
    super(nome, descricao, codigo);
    this.marca = marca;
    this.modelo = modelo;
    this.sistema_operacional = sistema_operacional;
  }
}
const smartphone1 = new Smartphone(
  "Galaxy S10",
  "Smartphone da Samsung",
  "0001",
  "Samsung",
  "S10",
  "Android"
);

try {
  smartphone1.alterarPreco(1750);
  smartphone1.adicionarEstoque(5);
  smartphone1.removerEstoque(9);
  console.log(smartphone1);
} catch (error) {
  console.log(error.message);
}

console.log("Fim do programa");
