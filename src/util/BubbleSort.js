/*
 * @Descripttion: 
 * @version: 
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2020-03-13 10:01:37
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2020-03-13 10:44:10
 */
/**
 * 
 * @param {*} arr1 
 * @param {*} orderBy 'ASC' 'DESC'
 */
function BubbleSort(arr1, orderBy = 'ASC') {
  // 传入值判断
  if (!arr1) {
    throw new Error('必须传入一个数组');
  }
  if (!Array.isArray(arr1)) {
    throw new Error('格式错误，必须传入一个数组');
  }
  // 解除共同引用
  let arr = JSON.parse(JSON.stringify(arr1));
  // 排序操作
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length; i++) {
      let temp;
      if (orderBy === 'ASC' && arr[i] > arr[i+1]) {        
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp
      } else if (orderBy === 'DESC' && arr[i] < arr[i+1]) {        
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp
      } else {
        continue;
      }
    }
  }
  return [...arr];
}

export default BubbleSort;