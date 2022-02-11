// intializations
const inputNums = document.getElementById('input_nums');
const addAnswer = document.getElementById('add_answer');
const subAnswer = document.getElementById('sub_answer');
const divAnswer = document.getElementById('div_answer');
const multAnswer = document.getElementById('mult_answer');




// GET data from url
const fetchData = async () => {
   // activate loading animation
   inputNums.classList.add("loading");

   try {
      // retrieve data
      const res = await axios.get("https://100insure.com/mi/api1.php");
      const num1 = convertString(res.data.key1);
      const num2 = convertString(res.data.key2);

      // display retrieved data
      inputNums.classList.remove("loading");
      inputNums.innerHTML = `${res.data.key1} and ${res.data.key2}`;

   } catch (e) {
      console.log("ERROR: ", e);
   }
}

const postData = async (n1, n2) => {
   // activate loading animation
   for (let answer of [addAnswer, subAnswer, multAnswer, divAnswer]) {
      answer.classList.add("loading");
   }

   try {
      const res = await axios.post("https://100insure.com/mi/api2.php", {
         num1: '44',
         num2: '2',
         operation: 'times'
      }, {
         headers: {
            'content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
         }
      })

      console.log(res);
      // display retrieved data
      /*       for (let answer of [addAnswer, subAnswer, multAnswer, divAnswer]) {
               answer.classList.remove("loading");
            }
            addAnswer.innerHTML = res.data.something1;
            subAnswer.innerHTML = res.data.something2;
            multAnswer.innerHTML = res.data.something3;
            divAnswer.innerHTML = res.data.something4; */

   } catch (e) {
      console.log("ERROR", e);
   }
}


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

   return convertedValue;
}



// on page load
const onPageLoad = async () => {
   await fetchData();
   postData();
}



onPageLoad();
