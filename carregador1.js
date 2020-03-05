const Carregador = (output) => {
    console.log('Carregador '+output)

    const enviaEnergia = () => {
        return output
    }

    return {
        enviaEnergia
    }
}

module.exports = Carregador
