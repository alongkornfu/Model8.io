/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
correct = 0;

// 2. Store the rank of a player
rank = 'Not Known'

// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
answer1 = prompt('Name a programming language that you learn')
if(answer1.toUpperCase() == 'JAVASCRIPT') {
  correct += 1;
  // console.log(answer1.toUpperCase)
  // console.log(answer1.toLowerCase)
}
answer2 = prompt('what is the programing language for web content')
if(answer2.toUpperCase() == 'HTML') {
  correct += 1;
  // console.log(correct)
}
answer3 = prompt('what language we use for styling web')
if(answer3.toUpperCase() == 'CSS') {
  correct += 1;
  // console.log(correct)
}
answer4 = prompt('what is the name of the college you studying')
if(answer4.toUpperCase() == 'DOUGLAS') {
  correct += 1;
  // console.log(correct)
}
answer5 = prompt('what is the name of the city where your college')
if(answer5.toUpperCase() == 'NEW WESTMINSTER') {
  correct += 1;
  // console.log(correct)
}

// document.getElementById('main') .innerHTML = `your score is: ${correct}`

if (correct>4) {
  rank = 'Gold'
} else if (correct>=3) {
  rank = 'Silver'
} else if (correct>=1) {
  rank = 'Bronze'
} else {
  rank = 'No crown'
}
document.querySelector('main') .innerHTML = `your rank is ${correct} out of 5 <br> Your Crow is ${rank}`

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/


// 6. Output results to the <main> element

