//Объединение 2х строк
const concat = (str1: string, str2: string):string => `${str1}${str2}`;

//Интерфейс
interface FieldsInteface {
    howIDoIt: string,
    simeArray: Array<string | number>
}

interface HomeTaskInterface extends FieldsInteface {
    withData: FieldsInteface[]
}

const MyHometask: HomeTaskInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

//Generic
interface MyArray<T> {
    [n: number]: T;

    map<U>(fn: (el: T) => U): U[];

    reduce<U>(fn: (acc: T, el: T) => U, acc: T): U[]
}

const tsArr: MyArray<number> = [1, 2, 3, 4, 5];
console.log(tsArr.map((i) => i + 1));
console.log(tsArr.map((i) => `${i} + 1`));
console.log(tsArr.reduce((acc, i) => acc + i, 0));
