

const { expect } = require('@jest/globals');
const game = require(".");


test('number_should_tobe_divisible_forThree', () => { 

    let result = game.divisibleByThree(9);
    
    expect(result).toBe(true);
});

test('number_should_tobe_divisible_forFive', () => { 

    let result = game.divisibleByFive(5);

    expect(result).toBe(true);
});

test('if number is divisible by five return FIZZ', () => {
    let result = game.execution(3);
    expect(result).toBe('FIZZ');
});

test('if number is divisible by five return BUZZ', () => {
    let result = game.execution(5);
    expect(result).toBe('BUZZ');
});

test('if number is divisible by five return FIZZBUZZ', () => {
    let result = game.execution(15);
    expect(result).toBe('FIZZBUZZ');
});


