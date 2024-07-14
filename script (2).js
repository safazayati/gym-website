function countBmi() {
  var age = document.getElementById("age").value;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var male = document.getElementById("male");
  var female = document.getElementById("female");

  if (!age || !height || !weight || (!male.checked && !female.checked)) {
    alert("All fields are required!");
    return false;
  }

  var bmi = parseFloat(weight) / ((parseFloat(height) / 100) ** 2);
  var result = '';

  if (bmi < 18.5) {
    result = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result = 'Healthy';
  } else if (bmi >= 25 && bmi <= 29.9) {
    result = 'Overweight';
  } else if (bmi >= 30 && bmi <= 34.9) {
    result = 'Obese';
  } else if (bmi >= 35) {
    result = 'Extremely obese';
  }

  alert(`BMI: ${bmi.toFixed(2)}\nResult: ${result}`);
  return false;
}
