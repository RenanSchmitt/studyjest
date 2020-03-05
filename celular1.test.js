 const Celular = require('./celular1')

 jest.mock('./carregador1', () => {
    return jest.fn().mockImplementation(() => {
        return {
            enviaEnergia: jest.fn().mockReturnValue(5)
        }
    })
})

 describe('celular1', () => {
     it('should charge', () => {
         const celular = Celular()
         expect(celular.carregar()).toBe(5)
     })
 })