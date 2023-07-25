const createFunction = <T>(param: T): T[] => {
    return [param]
}

const res = createFunction<string>('AA')

const createTuple = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2]
}

const result2 = createTuple<string, string>('X', 'Y')
const result3 = createTuple<string, [string]>('X', ['Y'])
const result4 = createTuple<string, Array<string>>('X', ['Y'])

const myObject = {
    name: "A",
    married: "A"
}

// const genericFunction = (myObject: object) => {
//     const crush = "Kate"
//     const spreadData = { ...myObject, crush }
//     return spreadData;
// }

// const genericFunctionResult = genericFunction(myObject)
// genericFunctionResult.crush

const genericFunction = <Z>(myObject: Z) => {
    const crush = "Kate"
    const spreadData = { ...myObject, crush }
    return spreadData;
}

const genericFunctionResult = genericFunction(myObject)
genericFunctionResult.married