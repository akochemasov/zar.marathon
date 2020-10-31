//Объединение 2х строк
const concat = (str1:string, str2:string):string => `${str1} ${str2}`;

//Интерфейс
type OrderedArray<T> = Array<T> & {
    0: string;
    1: string | number;
    2?: number
}

interface FieldsInteface {
    howIDoIt: string,
    simeArray: OrderedArray<any>
}

interface HomeTaskInterface extends FieldsInteface {
    withData: FieldsInteface[]
}

const MyHometask: HomeTaskInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}
