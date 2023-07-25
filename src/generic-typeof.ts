type personType = {
    name: string,
    age: number
}

const typeOfObj: personType = {
    name: "A",
    age: 22
}

type personTypeKeyof = keyof personType;
// const a: personTypeKeyof = 'age'
function propertyKeyOf<X, Y extends keyof X>(obj: X, key: Y) {
    const a = obj[key]
    return a
}
const property = propertyKeyOf(typeOfObj, 'name');
