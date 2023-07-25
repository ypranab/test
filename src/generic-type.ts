const persons: Array<string> = ['A']

const heros: Array<{ name: string, age: number }> = [{
    name: 'X',
    age: 40
}]

type GenericTypeArray<T> = Array<T>
const just: GenericTypeArray<string> = ['XX'];
const just2: GenericTypeArray<number> = [2];

type GenericTuple<X, Y> = [X, Y]
const tuples: GenericTuple<string, string> = ['A', 'B']

type Tuple2Type = { name: string, age: number };
const tuple2: GenericTuple<Tuple2Type, string> = [{
    name: 'A',
    age: 34
}, "B"]

interface ITuple { name: string, age: number }
const tuple3: GenericTuple<ITuple, string> = [{
    name: 'A',
    age: 22
}, 'X']

type ArrayType = { name: string, age: number }
const objects: GenericTypeArray<ArrayType> = [{
    name: 'A',
    age: 34
}]

interface InterfaceType<T, U = null | undefined> {
    type: T,
    age: number,
    alive?: U
}
interface OtherType {
    id: number,
    catagory: string
}
const other: InterfaceType<OtherType> = {
    type: {
        id: 22,
        catagory: "humans"
    },
    age: 23
}
const human: InterfaceType<string> = {
    type: 'AAA',
    age: 122
}
const animal: InterfaceType<boolean> = {
    type: true,
    age: 22
}


