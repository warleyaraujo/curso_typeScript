interface MathFunc {
    (x: number, y: number): number;
}

const sum = (x: number, y: number): string | number => {
    return (x + y).toString();
};

const valueSum = sum(2, 3);

const log = (message: string): void => {
    console.log(message);
}

const sub: MathFunc = (x: number, y: number): number => {
    return (x - y);
};

const valueSub = sub(5, 3);