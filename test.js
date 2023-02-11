const checkNumber = require('./checkNumber')
const palindromeCheck = require('./palindromeCheck')
const sortNumbers = require('./sortNumber')

describe('checkNumber', () => {
  it('should print the correct output', () => {
    let output = "";
    console.log = jest.fn(input => output += input + "\n");

    checkNumber(20);

    expect(output).toBe(
      "1\n2\nfish\n4\nbash\nfish\n7\n8\nfish\nbash\n11\nfish\n13\n14\nfish bash\n16\n17\nfish\n19\nbash\n"
    );
  });
});

test("sortNumbers function test", () => {
    expect(sortNumbers([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
    expect(sortNumbers([31, 41, 59, 26, 41, 58])).toEqual([26, 31, 41, 41, 58, 59]);
});
  
test("palindromeCheck function test", () => {
    expect(palindromeCheck("racecar")).toBe(true);
    expect(palindromeCheck("hello")).toBe(false);
    expect(palindromeCheck("level")).toBe(true);
});
