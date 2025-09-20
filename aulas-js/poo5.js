class ContaBancaria {
    #saldo = 0


    depositar(valor) {
        this.#saldo += valor
    }

    sacar(valor) {
        if(this.#saldo < valor) {
            return `Ops, saldo insuficiente. Seu saldo é ${this.#saldo}`
        }else {
            this.#saldo -= valor
            return `saque feito com sucesso!`
        }
    }

    get infoSaldo() {
        return `Saldo: ${this.#saldo}`
    }
}

const conta = new ContaBancaria()

conta.depositar(100)
console.log(conta.sacar(30))
console.log(conta.infoSaldo)
