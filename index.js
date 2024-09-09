function add(number) {
  if (number === '') {
    console.log(0);
  }

  let negativeNumbers = [];
  if (number) {
    let num = number.split(/[,\n]/);
    let sum = 0;
    for (let value of num) {
      console.log(value);
      let val = Number(value);
      if (val < 0) {
        negativeNumbers.push(val);
      } else {
        sum = sum + val;
        console.log('sum', sum);
        // console.log('negative numbers not allowed', val);
      }
    }
  }
  if (negativeNumbers.length > 0) {
    console.log('negative numbers not allowed', negativeNumbers.join(','));
    throw ('66negative numbers not allowed', negativeNumbers.join(','));
  }

  if (number.startsWith('//')) {
    console.log("kk")
    const delimiterEndIndex = number.indexOf('\n');
    console.log(delimiterEndIndex)
    let delimiter = number.substring(2, delimiterEndIndex);
    console.log("delimiter", delimiter)
    if (delimiter.startsWith('[') && delimiter.endsWith(']')) {
      delimiter = delimiter.slice(1, -1);
    }
    const numbersPart = number.substring(delimiterEndIndex + 1);
    console.log("numbersPart", numbersPart)
    const modifiedNumbers = numbersPart.split(delimiter).join(',');
    console.log(modifiedNumbers)
    let num = modifiedNumbers.split(/[,\n]/);
    let sum = 0;
    for (let value of num) {
      console.log(value);
      let val = Number(value);
      if (val < 0) {
        negativeNumbers.push(val);
      } else {
        sum = sum + val;
        console.log('sum', sum);
        // console.log('negative numbers not allowed', val);
      }
    }
  }
}


// add('1,5');
// add('1\n2,3');
// add('//[]\n1;[]2')
add('//[***]\n1***3***3');
