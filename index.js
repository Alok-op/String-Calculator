function add(number) {
  // console.log(number.length)
  if (number === '') {
    console.log(0);
  }

  if (number) {
    // let num = number.replace(",", "");
    let num = number.split(',');
    let sum = 0;
    for (let value of num) {
      console.log(value);
      let val = Number(value);
      if (val > 0) {
        sum = sum + val;
        console.log('sum', sum);
      } else {
        console.log('negative numbers not allowed', val);
      }
    }
  }
  // let num = Number(number);
  // console.log(num);
}

add('-5');
