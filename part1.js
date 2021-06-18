// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.
const BASE_URL = 'http://numbersapi.com/';
axios
    .get(`${BASE_URL}69?json`)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })


// Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
promisesDiv = document.getElementById('promises');

let fourNumberPromises = [];

for (let i = 1; i < 5; i++) {
    fourNumberPromises.push(
    axios.get(`${BASE_URL}${i}`)
  );
}

Promise.all(fourNumberPromises)
    .then(resArr => {
      console.log(resArr);
      resArr.forEach(e => {
          innerDiv = document.createElement('div')
          innerDiv.innerText = e.data
          promisesDiv.append(innerDiv)
      })
    })
    .catch(err => console.log(err));


// Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
factsDiv = document.getElementById('facts');

let fourFactPromises = [];

for (let i = 1; i < 5; i++) {
    fourFactPromises.push(
    axios.get(`${BASE_URL}69`)
  );
}

Promise.all(fourFactPromises)
    .then(resArr => {
      console.log(resArr);
      resArr.forEach(e => {
          innerDiv = document.createElement('div')
          innerDiv.innerText = e.data
          factsDiv.append(innerDiv)
      })
    })
    .catch(err => console.log(err));



// (Note: You’ll need to make multiple requests for this.)

