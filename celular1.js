const Carregador = require('./carregador1')

const carregador = Carregador(5)

const Celular = () => {
    
    const carregar = () => {
        return carregador.enviaEnergia();
    }
    
    return {
        carregar
    }
}

module.exports = Celular;