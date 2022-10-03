const saludar = () => {
    console.log("hello world!")
}
saludar()

const getSalute = (name) => {
    return "hola" + name
}


//console.log(getSalute('gloria'))
//console.log(getSalute('ale'))
//console.log("hola")

const getFulName = (name, name2, apellido1, apellido2) => {
    return name + " " + name2 + " " + apellido1 + " " + apellido2
}
const FulName = getFulName('gloria', 'escarlet', 'bello', 'calderon')
console.log(FulName, "tu nombre tiene", FulName.length, "caracteres")

const espar = (number) => {
    if (number % 2 == 0) {

        return true
    } else {
        return false
    }

}
console.log(espar(3))


