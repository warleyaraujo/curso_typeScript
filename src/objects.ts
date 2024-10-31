//Type
type Order = {
    productId: string;
    price: number;
}

type User = {
    firstName: string;
    age: number;
    email?: string;
    password?: string;
    orders: Order[];
};

const user: User ={
    firstName: 'Warley',
    age: 28,
    email: "warley@email.com",
    password: "123asd",
    orders: [{productId: "1", price: 200}],
}
const printLog = (message: string) => {}

printLog(user.password!);


//Unions
type Author = {
    books: string[]
}

const author: Author & User = {
    age:2,
    books: ['1'],
    email: 'author@email.com',
    firstName: 'Warley',
    orders: [],
};

//Interfaces
interface UserInterface {
    readonly firstName: string;
    email: string;
}

const emailUser: UserInterface = {
    email: "Warley@email.com",
    firstName: "warley" 
}

interface AuthorInterface {
    books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
    email: 'author@email.com',
    firstName: 'Warley',
    books: [],
}
type Grade = number | string;
const grade: Grade = 1;