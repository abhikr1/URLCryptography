const readLineSynch = require('readline-sync');
const input = readLineSynch.question('Welcome to URL Encoder/Decoder. Which utility function would you like to use?\n1.UrlEncode\n2.UrlDecode\n');
console.log(`You selected ${input}`);
if(input == 1){
  const url = readLineSynch.question('Please enter the url to be encoded\n');
  const encUrl = encodeURIComponent(url);
    console.log(`${encUrl}`);
}
else if(input == 2){
  const url = readLineSynch.question('Please enter the url to be decoded\n');
  const decUrl = decodeURIComponent(url);
  console.log(`${decUrl}`);

  }
