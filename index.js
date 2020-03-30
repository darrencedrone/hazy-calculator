const checkValidNum = (value) => {
  if (value === '') {
    return false
  } else {
    return !Number.isNaN(Number(value)) || value === null && value !== undefined
  }
}

const findNums = (arr) => {
  return (arr.filter(checkValidNum))
}

const findOperator = (arr) => {
  for (let i = 0; i < (arr.length); i++) {
    if (arr[i] === '+' || arr[i] === '-' || arr[i] === '*' || arr[i] === '/') {
      return arr[i]
    }
  }

  return [NaN]
}

const hazyCalculator = (arr) => {
  let newArr = findNums(arr)
  let operator = findOperator(arr)

  if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
    if (newArr[0] === null && newArr[1] === null) {
      return eval(0 + '' + operator + '' + 0)
    } if (newArr[0] === null && newArr[1] !== null) {
      return eval(0 + '' + operator + '' + newArr[1])
    } if (newArr[0] !== null && newArr[1] === null) {
      return eval(newArr[0] + '' + operator + '' + 0)
    } else {
      return eval(newArr[0] + '' + operator + '' + newArr[1])
    }
  } else {
    return NaN
  }
}

module.exports = hazyCalculator
