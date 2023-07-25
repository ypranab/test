type Sheikh = {
    wife1: string
    wife2: string
}
type A = keyof Sheikh;
type check<A, B> = B extends keyof Sheikh ? true : false;
type props = check<Sheikh, 'wife1'>

type literal = 'A' | 'B' | 'C'
type Remove<T, K> = T extends K ? never : K;
type CheckRemove = Remove<literal, 'A'>

//look up indexing
//mapped type
type Mapped = {
    height: number,
    width: number
}

type MappedConvert<T> = {
    // [key in keyof Mapped]: Mapped[key]
    [key in keyof T]: T[key]
}

const area: MappedConvert<{ height: string, width: number }> = {
    height: '200',
    width: 233
} 
