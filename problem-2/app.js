fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  //.then(json => console.log(json))
  .then(json => Array.from(json))
 
  //log titles with more than 6 words to the console - think splitting by "" and counting splits? If more than 5 splits then there are 6 or more words.
