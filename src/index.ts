//Tipos Basicos
let age: number = 5;
const firstName: string = 'Warley';
const isValid: boolean = true;
let idk: any = 5;

idk = '12';
idk = true;

const ids: number[] = [1, 2, 3, 4, 5]

//Tupla
const person: [number, string] = [1, 'a']

//Lista de tuplas
const people: [number, string][] = [
    [1, 'Warley'],
    [2, 'Maria']
]

//Intersections
const productId: string | number | boolean = false;

//Enum
enum Direction {
    Up = 1,
    Down = 2,
}
const direction = Direction.Up;

//Type Assertions
const productName: any = "Bone";

// let itemId = productName as string;
let itemId = <string>productName;
console.log(direction);