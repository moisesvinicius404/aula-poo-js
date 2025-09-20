
// prototype

class Humano {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

}

const pessoa = new Humano('Vinicius', 19)

console.log(pessoa)

Humano.prototype.andar = function() {
    return `${this.nome} andou`
}
console.log(pessoa.andar())