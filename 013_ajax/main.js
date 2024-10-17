

fetch("https://flynn.boolean.careers/exercises/api/random/sentence")
  .then(respose => respose.json())
  .then(data => {
    console.log(data);

    document.querySelector('h1').innerHTML = data.response

  })




axios.get("https://flynn.boolean.careers/exercises/api/random/sentence")
  .then(response => {
    const data = response.data;

    console.log(data);
    document.querySelector('h2').innerHTML = data.response


  })



axios.get("http://localhost:11434/api/tags")
  .then(response => {
    console.log(response.data);
  })


let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:11434/api/tags',
  headers: {}
};

axios.request(config)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });