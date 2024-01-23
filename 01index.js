const countvalue = document.querySelector("#counter");

const decrement = () => {
  let value = parseInt(countvalue.innerText); //we get value instring to conver into number
  value = value - 1; //update the value
  countvalue.innerText = value; //value wapas daldi
};

const increment = () => {
  let value = parseInt(countvalue.innerText); //we get value instring to conver into number
  value = value + 1; //update the value
  countvalue.innerText = value; //value wapas daldi
};
