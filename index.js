// Import stylesheets
import './style.css';

// Write Javascript code!

const sum = (a) => {
  return (b) => {
    return a + b;
  }
}
console.log(sum);

const nSum = (a) => {
  return (b) => {
      if(b) {
        return nSum(a + b);
      }
      else {
        return a;
      }
      
  }
}
console.log(nSum(7)(7)(7)(9)())