let x: any = 'Jac Ma'
x = 121;

const myFriends = ['a', 'b', 'c'];
const newFriends = ['x', 'y', 'z'];
myFriends.push(...newFriends)

const [first] = myFriends;

const tuple: [number, string] = [11, 'Minar'] //tuple, special type of array


const greetFreinds = (...friends: string[]): void => {
    friends.forEach(friend => console.log(friend));
}

const [bestie, secondBestie] = newFriends;
console.log(bestie, secondBestie)
greetFreinds('abul', 'babul')

console.log(myFriends)

const user: {
    name: string,
    id: number,
    country?: 'Bangladesh' //literal type; assigns specific value of type
    readonly phone: number,
    address?: string // optional chaining, address can or can't be declared
} = {
    name: 'Alam',
    id: 123,
    phone: 1234
}
const { name: userObject } = user; //userobject is type alias
// name of user ob can accessed with userObject type alias
// clg(userObject) will print Alam

type NumberType = number;
type OperationTypes = (x: number, y: number) => number;

const calculate = (
    num1: NumberType,
    num2: NumberType,
    operation: OperationTypes
) => operation(num1, num2);


const result = calculate(10, 20, (x, y) => x + y)
console.log(result)

function generateAdder(a: number): (b: number) => number {
    return function (b: number) {
        return a + b;
    };
}
const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));