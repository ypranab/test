interface IUser {
    id: number,
    name: string,
    age: number
}

const userInterface: IUser = {
    id: 111,
    name: "Adam",
    age: 20
}
userInterface.age

interface IExtendeduser extends IUser {
    type: string
}

const extendedUser: IExtendeduser = {
    id: 1122,
    name: "John",
    age: 22,
    type: "Student"
}

// interface used only for object types like: array, function

type addNumbers = (num1: number, num2: number) => number

interface IAddNumbers {
    (num1: number, num2: number): number
}

const addNumber: IAddNumbers | addNumbers = (num1, num2) => num1 + num2;

type numbers = number[];
interface INumbers {
    [index: number]: number //indexing
}

const rollNumbers: numbers | INumbers = [1, 2, 3, 4]