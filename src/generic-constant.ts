const genericConst = <T extends MandatoryInterface>(infoGene: T) => {
    const ob = { name: 'Z' }
    return ob;
}
interface MandatoryInterface {
    name: string;
    age: number;
    salary: number;
}
type GeneType = {
    name: string
    type: number
}

const infoGene: GeneType = {
    name: 'A',
    type: 11
}
const infoGene2: MandatoryInterface = {
    name: 'A',
    age: 22,
    salary: 11
}
const genericConstRes = genericConst(infoGene2)