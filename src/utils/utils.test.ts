import { arrayToCommaSeparatedString } from './utils';  

describe('arrayToCommaSeparatedString', () => {  
  it('should return a comma-separated string when given an array of strings', () => {  
    const input = ['apple', 'banana', 'cherry'];  
    const output = arrayToCommaSeparatedString(input);  
    expect(output).toBe('apple,banana,cherry');  
  });  

  it('should return an empty string when given an empty array', () => {  
    const input: string[] = [];  
    const output = arrayToCommaSeparatedString(input);  
    expect(output).toBe('');  
  });  

  it('should handle arrays with only one item', () => {  
    const input = ['apple'];  
    const output = arrayToCommaSeparatedString(input);  
    expect(output).toBe('apple');  
  });  

  it('should handle arrays containing empty strings', () => {  
    const input = ['apple', '', 'cherry'];  
    const output = arrayToCommaSeparatedString(input);  
    expect(output).toBe('apple,,cherry');  
  });  
  
  it('should handle arrays with special characters', () => {  
    const input = ['name', 'age', 'location: somewhere'];  
    const output = arrayToCommaSeparatedString(input);  
    expect(output).toBe('name,age,location: somewhere');  
  });  
});