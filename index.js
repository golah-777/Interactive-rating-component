let nextPageEl = document.getElementById("next-page");

let mainPageEl = document.getElementById("main-page");

let selectedStarsEl = document.getElementById("numberOfStars-el");

let rateoneEl = document.getElementById("rate-one-el");

let ratetwoEl = document.getElementById("rate-two-el");

let ratethreeEl = document.getElementById("rate-three-el");

let ratefourEl = document.getElementById("rate-four-el");

let ratefiveEl = document.getElementById("rate-five-el");

let isItClicked = false

function ratingOne(){
  isItClicked = true

  rateoneEl.style.backgroundColor = 'hsl(25, 97%, 53%)';
  rateoneEl.style.color = 'white';

  selectedStarsEl.textContent = 'You selected 1 out of 5';
  ratetwoEl.style.backgroundColor = 'hsl(213, 19%, 18%)';
  ratetwoEl.style.color = 'hsl(217, 12%, 63%)';
  ratethreeEl.style.backgroundColor = 'hsl(213, 19%, 18%)';
  ratethreeEl.style.color = 'hsl(217, 12%, 63%)';
  ratefourEl.style.backgroundColor = 'hsl(213, 19%, 18%)';
  ratefourEl.style.color = 'hsl(217, 12%, 63%)';
  ratefiveEl.style.backgroundColor = 'hsl(213, 19%, 18%)';
  ratefiveEl.style.color = 'hsl(217, 12%, 63%)';
};

function ratingTwo(){
  isItClicked = true

  ratingOne();

  ratetwoEl.style.backgroundColor = 'hsl(25, 97%, 53%)';
  ratetwoEl.style.color = 'white';

  selectedStarsEl.textContent = 'You selected 2 out of 5';
  ratethreeEl.style.backgroundColor = 'hsl(213, 19%, 18%)';
  ratethreeEl.style.color = 'hsl(217, 12%, 63%)';
  ratefourEl.style.backgroundColor = 'hsl(213, 19%, 18%)';
  ratefourEl.style.color = 'hsl(217, 12%, 63%)';
  ratefiveEl.style.backgroundColor = 'hsl(213, 19%, 18%)';
  ratefiveEl.style.color = 'hsl(217, 12%, 63%)';
};

function ratingThree(){
  isItClicked = true

  ratingOne();
  ratingTwo();

  ratethreeEl.style.backgroundColor = 'hsl(25, 97%, 53%)';
  ratethreeEl.style.color = 'white';

  selectedStarsEl.textContent = 'You selected 3 out of 5';
  ratefourEl.style.backgroundColor = 'hsl(213, 19%, 18%)';
  ratefourEl.style.color = 'hsl(217, 12%, 63%)';
  ratefiveEl.style.backgroundColor = 'hsl(213, 19%, 18%)';
  ratefiveEl.style.color = 'hsl(217, 12%, 63%)';
};

function ratingFour(){
  isItClicked = true

  ratingOne();
  ratingTwo();
  ratingThree();

  ratefourEl.style.backgroundColor = 'hsl(25, 97%, 53%)';
  ratefourEl.style.color = 'white';

  selectedStarsEl.textContent = 'You selected 4 out of 5';
  ratefiveEl.style.backgroundColor = 'hsl(213, 19%, 18%)';
  ratefiveEl.style.color = 'hsl(217, 12%, 63%)';
};

function ratingFive(){
  isItClicked = true

  ratingOne();
  ratingTwo();
  ratingThree();
  ratingFour();

  ratefiveEl.style.backgroundColor = 'hsl(25, 97%, 53%)';
  ratefiveEl.style.color = 'white';

  selectedStarsEl.textContent = 'You selected 5 out of 5';
  backgroundColor();
};

function submitedInfo(){
  if (isItClicked){
    let submitEl = document.getElementById("submit-el");

    mainPageEl.style.display = 'none';
    nextPageEl.style.display = 'inline';

  } else{
    let submitEl = document.getElementById("submit-el");
    let errorEl = document.getElementById("error-el")

    mainPageEl.style.display = 'inline';
    nextPageEl.style.display = 'none';

    errorEl.style.display = 'inline '
    errorEl.textContent = 'Please select a rating';
  }
 
};
