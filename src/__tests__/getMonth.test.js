// Импортируем функцию getMonth
import {getMonth} from "../getMonth.js"

describe('getMonth', () => {
  it('should return the correct month name', () => {
    expect(getMonth(1)).toBe('Январь');
    expect(getMonth(4)).toBe('Апрель');
  });

  it('should throw an error if month number is less than 1', () => {
    expect(() => {
      getMonth(0);
    }).toThrow('Данные неверны');
  });

  it('should throw an error if month number is greater than 12', () => {
    expect(() => {
      getMonth(13);
      getMonth(-1);
      getMonth("1");
      getMonth(NaN);
    }).toThrow('Данные неверны');
  });

  it('should throw an error if month number is not a number', () => {
    expect(() => {
      getMonth('Январь');
    }).toThrow('Данные неверны');
  });
});