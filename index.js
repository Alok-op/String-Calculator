function add(number) {
  if (number === '') {
    console.log(0);
  }

  if (number.startsWith('//')) {
    handleOtherDelemeter(number);
  } else {
    commaAndNewLineDelemeter(number);
  }
}

function commaAndNewLineDelemeter(number) {
  let negativeNumbers = [];
  let sum = 0;
  if (number) {
    let num = number.split(/[,\n]/);
    for (let value of num) {
      let val = Number(value);
      if (val < 0) {
        negativeNumbers.push(val);
      } else {
        if (val< 1000) {
          sum = sum + val;
        }
      }
    }
    console.log('sum', sum);
  }

  if (negativeNumbers.length > 0) {
    console.log('negative numbers not allowed', negativeNumbers.join(','));
    throw ('negative numbers not allowed', negativeNumbers.join(','));
  }
}

function handleOtherDelemeter(number) {
  const delimiterEndIndex = number.indexOf('\n');
  let delimiter = number.substring(2, delimiterEndIndex);
  if (delimiter.startsWith('[') && delimiter.endsWith(']')) {
    delimiter = delimiter.slice(1, -1);
  }
  const numbersPart = number.substring(delimiterEndIndex + 1);
  const modifiedNumbers = numbersPart.split(delimiter).join(',');
  commaAndNewLineDelemeter(modifiedNumbers);
}

add('1,5');
add('1\n2,3');
add('//;\n1;2');
add("2, 1001")
