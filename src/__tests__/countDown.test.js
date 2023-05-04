// Импортируем функцию countDown
import {countDown} from "../countDown.js"

describe('countDown', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    // используем jest.spyOn для перехвата вывода в консоль и предотвращения его отображения в тестах
  });

  afterEach(() => {
    console.log.mockRestore();
    // восстанавливаем оригинальную функцию console.log
  });

 it('should log numbers in descending order for positive arguments', () => {
    countDown(5);
    expect(console.log.mock.calls.length).toBe(5);
    expect(console.log.mock.calls[0][0]).toBe(5);
    expect(console.log.mock.calls[1][0]).toBe(4);
    expect(console.log.mock.calls[2][0]).toBe(3);
    expect(console.log.mock.calls[3][0]).toBe(2);
    expect(console.log.mock.calls[4][0]).toBe(1);
  });

  it('should not log anything if argument is zero', () => {
    countDown(0);
    expect(console.log.mock.calls.length).toBe(0);
  });

  it('should throw an error if argument is a string', () => {
    expect(() => countDown('abc')).toThrow('Invalid argument');
  });


  it('should log numbers in ascending order for negative arguments', () => {
    countDown(-5);
    expect(console.log.mock.calls.length).toBe(5);
    expect(console.log.mock.calls[0][0]).toBe(-5);
    expect(console.log.mock.calls[1][0]).toBe(-4);
    expect(console.log.mock.calls[2][0]).toBe(-3);
    expect(console.log.mock.calls[3][0]).toBe(-2);
    expect(console.log.mock.calls[4][0]).toBe(-1);
  });

    it('should throw an error if argument is NaN', () => {
    expect(() => countDown(NaN)).toThrow('Invalid argument');
  });
});