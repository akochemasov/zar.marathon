//Объединение 2х строк
const concat = (str1:string, str2:string):string => `${str1} ${str2}`;

//Интерфейс
interface FieldsInteface {
    howIDoIt: string,
    simeArray: any[]
}

interface HomeTaskInterface extends FieldsInteface {
    withData: FieldsInteface[]
}

const MyHometask: HomeTaskInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}
