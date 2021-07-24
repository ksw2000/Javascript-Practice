var message: string = "hello world";
console.log(message);

var alphas: number[];
alphas = [1, 2, 3, 4];
console.log(alphas);

var val: string | number;
val = 12;
console.log(`numberic value of val ${val}`);
val = 'this is a string';
console.log(`string value of val ${val}`);

interface person {
    firstName: string,
    lastName: string,
    sayHi: () => string
}

var customer: person = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: (): string => {
        return "Hi there!"
    }
}

console.log(customer)

// duck-type
interface Point{
    x: number,
    y: number
}

function addPoints(p1: Point, p2: Point): Point{
    let x = p1.x + p2.x;
    let y = p1.y + p2.y;
    return {x:x, y:y}
}

var newPoint:Point = addPoints({x: 3, y:4}, {x:5, y:1});

console.log(newPoint)