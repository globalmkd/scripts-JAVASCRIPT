

const expect = require('chai').expect;
const platzom = require('..').default;

describe('#traductor', function () {

    it('Si la palabra termina con "ar", se le quitan esas dos letras', function () {
        const translation = platzom("programar")
        expect(translation).to.equal("program")

    })

    it('Si la palabra inicia con Z, se le añade "pe" al final.', function () {

        const translation = platzom("Zorro")
        const translation2 = platzom("Zarpar")

        expect(translation).to.equal("Zorrope")
        expect(translation2).to.equal("Zarppe")
        
    })

    it('Si la palabra traducida tiene 10 o más letras', function () {

        const translation = platzom("abecedario")
        expect(translation).to.equal("abece-dario")

        
    })

    it('Por último, si la palabra original es un palíndromo', function () {

        const translation = platzom("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
        
    })

}) 


