var request = require('request');
const rp = require('request-promise');

/* console.log("Sunset in Hawaii is at ...")
request('http://www.google.com', function(error, response, body){
  /* if (error){
    console.log("Something went wrong!");
    console.log("error");
  } else {
    if (response.statusCode === 200) {
      //Things worked!
      console.log(body);
    }
  } */
/*  if (!error && response.statusCode == 200) {
    var parsedData = JSON.parse(body);
    console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]); //show the HTML for the Google homepage
  }
}); */

/* JSON placeholder API example */

request('https://jsonplaceholder.typicode.com/users/1', function(error, response, body){
  //eval(require('locus'));
  if (!error && response.statusCode == 200) {
    var parsedData = JSON.parse(body);
    console.log(`${parsedData.name} lives in ${parsedData.address.city}`); //show the HTML for the Google homepage
    // can also use parsedData['name']
  }
});

/* Arrow Function - ES6 version

request('https://jsonplaceholder.typicode.com/users/1', (error, response, body) => {
  //eval(require('locus'));
  if (!error && response.statusCode == 200) {
    const parsedData = JSON.parse(body);
    console.log(`${parsedData.name} lives in ${parsedData.address.city}`); //show the HTML for the Google homepage
    // can also use parsedData['name']
  }
}); */

/* Request Promises
rp('https://jsonplaceholder.typicode.com/users/1')
  .then((body) => {
  const parsedData = JSON.parse(body);
  console.log(`${parsedData.name} lives in ${parsedData.address.city}`); //show the HTML for the Google homepage
})
  .catch((err) => {
  console.log('Error', err);
});
*/
