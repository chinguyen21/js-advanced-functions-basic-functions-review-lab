// Your code here

const saturdayFun = (para = "roller-skate") => `This Saturday, I want to ${para}!`

const mondayWork = (para = "go to the office") => `This Monday, I will ${para}.`

const wrapAdjective = (para='*') => {
  return (adj) => {
    return `You are ${para}${adj}${para}!`   
  }
}

const Calculator = {
  add: (a,b) => {
    return a + b
  },
  subtract: (a,b) => {
    return a - b
  },
  multiply: (a,b) => {
    return a * b
  },
  divide: (a,b) => {
    return a / b
  },
  
}


const actionApplyer = (int, arr) => {
  arr.forEach((func) => int = func(int) )
  return int
};
