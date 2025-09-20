
// Heranças

class Personagem {
    constructor(nome = 'persoganem', superPoder = 'Poder') {
        this.nome = nome,
        this.superPoder = superPoder
    }

    infoPersonagem() {
        console.log(`Eu sou o ${this.nome} e meu super poder é ${this.superPoder}`)
        console.log('Eu combato os inimigos')
    }
    
}

class Batman extends Personagem {
   constructor(nome, superPoder) {
    super(nome, superPoder)
   }

   infoPersonagem() {
      console.log(`Eu sou o ${this.nome} e meu super poder é ${this.superPoder} eu escureço os olhos dos meus inimigos e os destruo nas sombras da noite - 🦇`)
      console.log('Eu combato os inimigos')
   }

}

class HomemAranha extends Personagem {
    constructor(nome, superPoder) {
    super(nome, superPoder)
   }

   infoPersonagem() {
      console.log(`Eu sou o ${this.nome} e meu super poder é ${this.superPoder} uso minhas teias para capturar os vilões e prende-los- 🕸️`)
      console.log('Eu combato os inimigos')
   }
    
}

class Rugal extends Personagem {
    constructor(nome, superPoder) {
    super(nome, superPoder)
   }

   infoPersonagem() {
      console.log(`Eu sou o ${this.nome} e meu super poder é ${this.superPoder} eu tento destruir a cidade com todas minhas forças- 🔪`)
      console.log('Eu faço o mal')
   }
    
}

const personagem = new Personagem()
const batman = new Batman('Batman', 'Escurecer vista dos inimigos')
const homemAranha = new HomemAranha('Homem aranha', 'Soltar tenhas')
const rugal = new Rugal('Rugal', 'Golpes maliciosos e fatais')
console.log('----------------------------------------')
batman.infoPersonagem()
console.log('----------------------------------------')
homemAranha.infoPersonagem()
console.log('----------------------------------------')
rugal.infoPersonagem()
console.log('----------------------------------------')
