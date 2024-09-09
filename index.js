function add(number) {
  // console.log(number.length)
  if (number === '') {
    console.log(0);
  }

  if (number) {
    // let num = number.replace(",", "");
    let num = number.split(",");
    let sum = 0;
    for(let value of num) {
      console.log(value)
      if (value > 0) {
        sum = sum + value;
      } else {
        console.log("negative numbers not allowed", value);
      }
    }
    console.log("sum", sum)
    // console.log(typeof(num))
    console.log("num:", num)
  }
  // let num = Number(number);
  // console.log(num);
}

add('5');
