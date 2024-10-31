const returnValue = <T>(value: T): T => value

const message = returnValue<string>('Hello World');

const count = returnValue<number>(5);

function getFirstValueFromArray<T>(array: T[]) {
    return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

//Promises
const returnPromise = async () => {
    return 5;
}

//Classes
class GerericNumber<T> {
    zeroValue: T
    sum: (x: T, y: T) => T;

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

const myGenericNumber = new GerericNumber<number>(0, (x: number, y: number) => {
    return x + y;
});