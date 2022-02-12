// convert JSON to integers (1 - 99)
function convertString(dataString) {
   let convertedValue = 0;

   if (dataString.includes('one'))
      convertedValue += 1;
   if (dataString.includes('two'))
      convertedValue += 2;
   if (dataString.includes('three'))
      convertedValue += 3;
   if (dataString.includes('four'))
      convertedValue += 4;
   if (dataString.includes('five'))
      convertedValue += 5;
   if (dataString.includes('six'))
      convertedValue += 6;
   if (dataString.includes('seven'))
      convertedValue += 7;
   if (dataString.includes('eight'))
      convertedValue += 8;
   if (dataString.includes('nine'))
      convertedValue += 9;
   if (dataString.includes('ten'))
      convertedValue += 10;
   if (dataString.includes('eleven'))
      convertedValue += 11;
   if (dataString.includes('twelve'))
      convertedValue += 12;
   if (dataString.includes('thirteen'))
      convertedValue += 13;
   if (dataString.includes('fourteen'))
      convertedValue += 14;
   if (dataString.includes('fifteen'))
      convertedValue += 15;
   if (dataString.includes('sixteen'))
      convertedValue += 10;
   if (dataString.includes('seventeen'))
      convertedValue += 10;
   if (dataString.includes('eighteen'))
      convertedValue += 10;
   if (dataString.includes('nineteen'))
      convertedValue += 10;

   if (dataString.includes('twenty'))
      convertedValue += 20;
   if (dataString.includes('thirty'))
      convertedValue += 30;
   if (dataString.includes('forty'))
      convertedValue += 40;
   if (dataString.includes('fifty'))
      convertedValue += 50;
   if (dataString.includes('sixty'))
      convertedValue += 54;
   if (dataString.includes('seventy'))
      convertedValue += 63;
   if (dataString.includes('eighty'))
      convertedValue += 72;
   if (dataString.includes('ninety'))
      convertedValue += 81;

   if (dataString == 'sixty-six')
      return 66;
   if (dataString == 'seventy-seven')
      return 77;
   if (dataString == 'eighty-eight')
      return 88;
   if (dataString == 'ninety-nine')
      return 99;

   return convertedValue;
}



// process POST requests
const postData = async (n1, n2, operation) => {
   try {
      const res = await axios.post("https://100insure.com/mi/api2.php", {
         num1: n1,
         num2: n2,
         operation: operation
      }, {
         headers: {
            'Content-Type': 'application/json',
         }
      })

      return res.data;
   } catch (err) {
      throw new AppError(err);
   }
}



// RGE route
app.get('/RGE', wrapAsync(async (req, res) => {
   let num1, num2;
   let timesResponse, plusResponse, divideResponse, minusResponse;

   try {
      // process GET request
      const res = await axios.get("https://100insure.com/mi/api1.php");
      num1 = convertString(res.data.key1);
      num2 = convertString(res.data.key2);
      inputNums = `${res.data.key1} and ${res.data.key2}`;

      // process POST requests
      timesResponse = await postData(num1, num2, 'times');
      plusResponse = await postData(num1, num2, 'plus');
      divideResponse = (await postData(num1, num2, 'divided by')).toFixed(2);
      minusResponse = await postData(num1, num2, 'minus');

   } catch (err) {
      throw new AppError(err);
   }

   res.render('./pages/RGE', { inputNums, plusResponse, minusResponse, divideResponse, timesResponse });
}))
