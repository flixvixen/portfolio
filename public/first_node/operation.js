export const generateRandom = () => {
    
    Math.floor(Math.random() * 100 + 1);
}

export const sum = (num, num2) => {
    let sum = num + num2;
    console.log("The sum is",sum);
    console.log(`The sum is ${sum}`);
}
 
export const difference = (num, num2) => {
    let diff = num - num2;
    console.log("The difference is", diff);
    console.log(`The difference is ${diff}`);
}

export const product = (num, num2) => {
    let pro = num * num2;
    console.log("The product is", pro);
    console.log(`The product is ${pro}`);
}

export const quotient = (num, num2) => {
    let quo = num / num2;
    console.log("The quotient is", quo);
    console.log(`The quotient is ${quo}`);
}