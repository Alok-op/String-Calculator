function add(number) {
  if (number === '') {
    console.log(0);
  }

  let negativeNumbers = [];
  if (number) {
    let num = number.split(',');
    let sum = 0;
    for (let value of num) {
      console.log(value);
      let val = Number(value);
      if (val > 0) {
        sum = sum + val;
        console.log('sum', sum);
      } else {
        negativeNumbers.push(val);
        // console.log('negative numbers not allowed', val);
      }
    }
  }
  if (negativeNumbers.length > 0) {
    console.log("negative numbers not allowed", negativeNumbers.join(","))
    throw("66negative numbers not allowed", negativeNumbers.join(","));
  }
}

add('-5, -5, -2');

