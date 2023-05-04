export function revertString(str) {
  // проверяем, что аргументом передана строка, если нет, то выдаём ошибку
  if (typeof str !== 'string') {
    throw new Error('Input is not a string');
  }

  let revertedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revertedStr += str[i];
  }
  return revertedStr;
}