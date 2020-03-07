/*
 * @Descripttion: 
 * @version: 
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2020-03-02 09:22:52
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2020-03-02 09:36:06
 */
const sum = require('../src/sum');

test('1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(2);
})