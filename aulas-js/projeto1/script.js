class Pessoa {
  constructor() {
    this.nomePessoa = document.getElementById('nome')
    this.idadePessoa = document.getElementById('idade')
    this.container = document.getElementById('container-info')
    this.btn = document.getElementById('btn-enviar')

    this.mostrarInfo()
  }

  mostrarInfo() {
    this.btn.addEventListener('click', () => {
      const nome = this.nomePessoa.value.trim()
      const idade = this.idadePessoa.value.trim()

      if (nome === '' || idade === '' || idade <= 0 ) {
        alert('Ops, informações inválidas. Tente Novamente.')
      } else {
        const p = document.createElement('p')
        p.textContent = `Nome: ${nome} | Idade: ${idade} anos`
        this.container.appendChild(p)
      }
    })
  }
}

const pessoa = new Pessoa()
