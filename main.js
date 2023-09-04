const calories = document.querySelector(".calories-calculator .result-message .calories");

const calculateBtn = document.querySelector(".calories-calculator .result .calculate-btn");
const age = document.querySelector(".calories-calculator form #age");
const height = document.querySelector(".calories-calculator form #height");
const weight = document.querySelector(".calories-calculator form #weight");


// For Male 10 * weight  + 6.25 * height - 5 * age + 5;

// For Female  10 * weight + 6.25 * height - 5 * age - 161;



const calculateBMR = (weight, height, age, gender) => {
   if (gender == "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }
  return 10 * weight + 6.25 * height - 5 * age - 161;
}




calculateBtn.addEventListener("click", () => {
  let genderValue = document.querySelector(".calories-calculator form input[name='gender']:checked").value;
  let BMR = calculateBMR(weight.value, height.value, age.value, genderValue);


  calories.innerHTML = BMR;

});






// I need to work on the output where it shows the results and changing the class for it coz i dont like it
// work on clcualtions as it shows below
// work on choosing gender



// for men total weight * 1500 calories
// breaking it down to
// weight input *20 for carbs "gr"
// weight input *20 for Protein "gr"
// weight input * 10 or fat in "gr"




// for women total weight * 1200 calories
// breaking it down to
// weight input *20 for carbs "gr"
// weight input *20 for Protein "gr"
// weight input * 10 or fat in "gr"



// further woth what is the goal if to lose weight or to gain wieght or bulking 


