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
    [N: number]: T;

    map<U>(fn: (el: T) => U): U[];
}

const tsArr: MyArray<number> = [1, 2, 3, 4, 5];
tsArr.map((i) => i + 1);
tsArr.map((i) => `${i} + 1`);
