class Transporte {
	constructor(destino, valor) {
		this.destino = destino
		this.valor = valor
		this.status = 'Pendente'
		this.dataReserva = null
	}

	getValor() {
		return this.valor
	}

	setValor(valor) {
		if (typeof valor === 'number' && valor > 0) {
			this.valor = valor
		}
	}

	getDestino() {
		return this.destino
	}

	reservar() {
		this.status = 'Reservado'
		this.dataReserva = new Date()
	}

	getStatus() {
		return this.status
	}

	getData() {
		return this.dataReserva?.toLocaleString('pt-BR', {
			timeZone: 'America/Sao_Paulo',
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		}) ?? 'Não reservada'
	}

	valorTotal() {
		return this.getValor()
	}
}

class Voo extends Transporte {
	constructor(destino, valor, companhia, bagagem) {
		super(destino, valor)
		this.companhia = companhia
		this.bagagem = bagagem
	}

	confirmarVoo() {
		this.reservar()
		console.log(`Voo reservado com a ${this.companhia}, destino ${this.destino}. Bagagem: ${this.bagagem ? 'sim' : 'não'}`)
	}
}

class Trem extends Transporte {
	constructor(destino, valor, classe) {
		super(destino, valor)
		this.classe = classe
	}

	confirmarViagem() {
		this.reservar()
		console.log(`Viagem de trem classe ${this.classe} para ${this.destino} confirmada.`)
	}
}

class Ônibus extends Transporte {
	constructor(destino, valor, assento) {
		super(destino, valor)
		this.assento = assento
	}

	confirmarAssento() {
		this.reservar()
		console.log(`Assento ${this.assento} reservado no ônibus para ${this.destino}.`)
	}
}

const reserva1 = new Voo('Salvador', 850, 'LATAM', true)
reserva1.confirmarVoo()
console.log('Status:', reserva1.getStatus())
console.log('Data:', reserva1.getData())
console.log('Valor total: R$', reserva1.valorTotal())

const reserva2 = new Trem('São Paulo', 120, 'Executiva')
reserva2.confirmarViagem()
console.log('Status:', reserva2.getStatus())
console.log('Data:', reserva2.getData())
console.log('Valor total: R$', reserva2.valorTotal())

const reserva3 = new Ônibus('Rio de Janeiro', 89.9, '12B')
reserva3.confirmarAssento()
console.log('Status:', reserva3.getStatus())
console.log('Data:', reserva3.getData())
console.log('Valor total: R$', reserva3.valorTotal())
