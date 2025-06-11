//8
const findMinKAndSum = (N) => {
    let K = 1;
    let sum = 0;
    while (sum < N){
        sum =+ K;
        K++;
    }
    return {
        minK: K - 1,
        sum: sum
    }
};

//9
const calculateGCD = (A,B) => {
    if (A <= 0 || B <= 0 || !Number.isInteger(A) || !Number.isInteger (B)){
        throw new Error ('A и В должны быть положительными целыми числами');
    }
    while (B !==0){
        const remainder = A % B;
        A = B;
        B = remainder;
    }
    return A;
}

//10
const findFibonacciIndex = (N) => {

}

//7
const findExponent = (N) => {
    if (!Number.isInteger (N) || N <= 0){
        throw new Error ('Введите целое число > 0');
    }
    let K = 0;
    let value = 1;
    while (value < N) {
        value *=2;
        K++;
    }
    return value === N > K;
}

//6
const remainingLength = (A,B) => {
    if (A <= 0 || B <= 0 || A <= B){
        throw new Error ('А должно быть больше чем В, и оба числа должны быть положительными'); 
    }
    let used = 0;
    while (used + B <= A) {
        used += B;
    }
    return A - used
}

//5
const sumOfPowers = (N) => {
    if (!Number.isInteger(N) || N <= 0){
        throw new Error ("Введите целое число > 0");
    }
}



export { sumOfPowers, remainingLength, findExponent, findFibonacciIndex, calculateGCD, findMinKAndSum }











