//Объединение 2х строк
const concat = (str1: string, str2: string):string => `${str1}${str2}`;
console.log('concat:', concat('Hello ', 'World'));

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
console.log('MyHometask:', MyHometask);

//Generic
interface MyArray<T> {
    [n: number]: T;

    map<U>(fn: (el: T) => U): U[];

    reduce<U>(fn: (acc: U, el: T) => U, acc: U): U[]
}

const tsArr: MyArray<number> = [1, 2, 3, 4, 5];
console.log('map:', tsArr.map((i) => i + 1));
console.log('map:', tsArr.map((i) => `${i} + 1`));
console.log('reduce:', tsArr.reduce((acc, i) => acc + i, 0));
