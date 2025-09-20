// Encapsulamento

class Loja {
    #estoque;
    constructor() {
        this.#estoque = ['Blusa feminina jeans', 'Calça jorge', 'Sapato', 'Sandália'];
    }

    adicionarProduto(produto) {
        this.#estoque.push(produto);
        console.log('Produto adicionado com sucesso');
    }

    listarProduto() {
        for (let i = 0; i < this.#estoque.length; i++) {
            console.log(`Produto: ${this.#estoque[i]}`);
        }
    }
}

const loja = new Loja();

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const produto = document.getElementById('produto').value.trim();
    loja.adicionarProduto(produto);
    loja.listarProduto()
})



