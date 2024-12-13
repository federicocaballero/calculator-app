import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    subtract = '-',
    multiply = '*',
    divide = '/',
}

export const useCalculator = () => {
    const [formula, setFormula] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [prevNumber, setPrevNumber] = useState<string>('0');

    const lastOperation = useRef<Operator>();

    useEffect(() => {
     if (lastOperation.current) {
        const firstFormulaPart = formula.split(' ').at(0);
        setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
     } else {
         setFormula(number);
     }
    }, [number, prevNumber])

    useEffect(() => {
        const subResult = calculateSubResult();
        setPrevNumber( subResult.toString() );
    }, [formula])


    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('');
        lastOperation.current = undefined;
    }

    const toggleSign = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    }

    const calculateSubResult  = () => {
        const [firsValue, operation, secondValue] = formula.split(' ');
        const num1 = Number(firsValue);
        const num2 = Number(secondValue);
        if (isNaN(num2))  return num1 ; 

        switch (operation) {
            case Operator.add:
                return num1 + num2;
            case Operator.subtract:
                return num1 - num2;
            case Operator.multiply:
                return num1 * num2;
            case Operator.divide:
                return num1 / num2;
            default:
                throw new Error('Operation not found');
        }
    }

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(result.toString());
        lastOperation.current = undefined;
        setPrevNumber('0');
    }
    const buildNumber = (numberString: string) => {
        if (number.includes('.') && numberString === '.') return;
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                setNumber(number + numberString);
            }
            if (numberString === '0' && !number.includes('.')) return;
            if (numberString !== '0') {
                setNumber(numberString);
            }
            return;

        }

        setNumber(number + numberString);
    }

    const deleteLastNumber = () => {
        if (number.length > 1) {
            setNumber(number.slice(0, -1));
        } else {
            setNumber('0');
        }
    }

    const setLastNumber = () => {
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        }

        setPrevNumber(number);
        setNumber('0');
    }
    const divideOperation = () => {
        if (lastOperation.current !== Operator.divide) {
            setLastNumber();
        }
        lastOperation.current = Operator.divide;
    }

    const multiplyOperation = () => {
        if (lastOperation.current !== Operator.multiply) {
            setLastNumber();
        }
        lastOperation.current = Operator.multiply;
    }
    
    const subtractOperation = () => {
        if (lastOperation.current !== Operator.subtract) {
            setLastNumber();
        }
        lastOperation.current = Operator.subtract; 
    }

    const addOperation = () => {
        if (lastOperation.current !== Operator.add) {
            setLastNumber();
        }
        lastOperation.current = Operator.add;
    }
    return {
        // Properties
        formula,
        number,
        prevNumber,

        // Methods
        buildNumber,
        clean,
        toggleSign,
        deleteLastNumber,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateSubResult,
        calculateResult
    }
}