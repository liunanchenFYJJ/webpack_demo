/*
 * @Descripttion: 
 * @version: 
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2020-03-13 11:05:39
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2020-03-13 15:16:46
 */
function SelectionSort(arr1, orderBy = 'ASC') {
  // 传入值判断
  if (!arr1) {
    throw new Error('必须传入一个数组');
  }
  if (!Array.isArray(arr1)) {
    throw new Error('格式错误，必须传入一个数组');
  }

  // 解除引用
  let arr = JSON.parse(JSON.stringify(arr1));

  // 排序
  for (let i = 0; i < arr.length -1 ; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return [...arr];
}

export default SelectionSort;