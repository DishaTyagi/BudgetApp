const add = (a, b) => a + b  ;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('Generate Greeting', () => {
    expect(generateGreeting('Disha')).toBe('Hello Disha!');
});

test('Generate Anonymous greeting', () => {
    expect(generateGreeting()).toBe('Hello Anonymous!');    //takes name's default value
})

