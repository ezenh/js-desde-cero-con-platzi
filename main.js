// 1. Tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

// 2. Notación científica
const cientifico = 5e3

// 3. Infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

// OPERACIONES ARITMÉTICAS
// 1. Suma, Resta, Mutiplicación y División
const suma = 3 + 4
const resta = 3 - 4
const mutiplicacion = 3 * 4
const division = 4 / 2

// 2. Módulo y Exponenciación
const modulo = 15 % 8
const exponenciación = 15 ** 8

// PRECISIÓN -- No es preciso, en las cuentas con decimales suele tenes algún chafle en un céntimo perdido por ahí lejos
const resultado = 0.1 + 0.2
console.log (resultado)
console.log (resultado.toFixed(1) )
console.log(resultado === 0.3) //Te va a dar FALSE porque casualmente tiene esa falta de precisión

// OPERACIONES AVANZADAS
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7) // te da el valor absoluto  (positivo)
const aleatorio = Math.random()
console.log (raizCuadrada)
console.log (valorAbsoluto)
console.log (aleatorio)

// BOOLEANOS
const isActive = true
const hasPermission = false

// 1. Conversion implicita
const result = 5 > 3
console.log(result)

const name = 'Platzi'
console.log(!!name)

// 2. Conversión explícita
const value = 0
const otherValue = -24
const explicitBoolean = Boolean(value)
console.log(explicitBoolean)

// DATOS PRIMITIVOS Null, undefined, symbol y bigint
// Null
const snoopy = null
console.log(snoopy)
console.log(typeof snoopy)

// Undefined
let name2
console.log(name)

// Symbol
const uniqueId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2)

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)

// BigInt
const bigNumber = 1982349862049724085734058n
console.log(bigNumber)

const numberOfParticlesInTheUniverse = 100000000000000000000000n
console.log(numberOfParticlesInTheUniverse)


// CONVERSION DE TIPOS EXPLICITA E IMPLICITA
// 1. Explicita
const string = '42'
const integer = parseInt(string) // --ParseInt() extrae los numeros del string y Number() convierte a numero pero si hay texto, te larga error
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseInt(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal2 = parseInt(binary, 2)
console.log(decimal2)
console.log(typeof decimal)

// 2. Implicita
const sum = '5' + 3
console.log(sum)

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNumber = 2 + true
console.group(sumWithNumber)

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log(stringValue + numberValue + booleanValue)
console.log(numberValue + booleanValue + stringValue)
console.log(booleanValue + stringValue + numberValue)
console.log(numberValue + booleanValue + stringValue)
console.log(booleanValue + numberValue + stringValue)



