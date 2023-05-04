// Импортируем функцию revertString
import {revertString} from "../task-17.6.1.js"

describe('revertString', () => {
	// проверяем, что при получении строки возвращается она же в перевёрнутом виде
  it('should revert a string', () => {
    expect(revertString('Привет')).toBe('тевирП');
    expect(revertString('world')).toBe('dlrow');
    expect(revertString('')).toBe('');
    expect(revertString('1')).toBe('1');
    expect(revertString('a')).toBe('a');
    expect(revertString('racecar')).toBe('racecar');
  });
// проверяем получение ошибки, при передачи не строки в качестве аргумента
  it('should throw an error when input is not a string', () => {
    expect(() => revertString(123)).toThrow('Input is not a string');
    expect(() => revertString(true)).toThrow('Input is not a string');
    expect(() => revertString(null)).toThrow('Input is not a string');
    expect(() => revertString(undefined)).toThrow('Input is not a string');
    expect(() => revertString({})).toThrow('Input is not a string');
  });
});