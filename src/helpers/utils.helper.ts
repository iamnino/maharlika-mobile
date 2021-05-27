import uuid from 'react-native-uuid';

export const isEven = (n: any) => {
    return n % 2 == 0;
}
 
export const isOdd = (n: any) => {
    return Math.abs(n % 2) == 1;
}

export const generateID = () => {
    return uuid.v4();
}