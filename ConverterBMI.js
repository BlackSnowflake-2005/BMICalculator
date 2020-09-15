//bmiConverter() calculates the BMI from the given data
function bmiConverter()
{
  var weight_type = document.getElementById("weightType").selectedOptions[0].value;
  var height_type = document.getElementById("heightType").selectedOptions[0].value;
  var weight = document.getElementById("weightValue").value;
  var height = document.getElementById("heightValue").value;
  var bmi = 0;
  if (weight_type == "Kilograms"){
    if (height_type == "meters"){
      bmi = weight / (height * height);
    }else if (height_type == "centimeters"){
      height = height * 0.01;
      bmi = weight / (height * height);
    }else if (height_type == "inches"){
      weight = weight * 2.205;
      bmi = (weight / (height * height)) * 703;
    }
  }else{
    if(height_type == "inches"){
      bmi = (weight/(height * height)) * 703;
    }else if(height_type == "meters"){
      weight = weight * (1/2.205);
      bmi = weight / (height * height);
    }else if(height_type == "centimeters"){
      weight = weight * (1/2.205);
      height = height * 0.01;
      bmi = weight / (height * height);
    }
  }
  if (bmi < 18.50){
    document.getElementById('status').innerHTML = 'Status : Underweight';
  }else if(bmi > 18.50 & bmi < 24.90){
    document.getElementById('status').innerHTML = 'Status : Healthy weight';
  }else if(bmi > 24.90){
    document.getElementById('status').innerHTML = 'Status : Overweight';
  }
  document.getElementById('result').innerHTML = (bmi).toFixed(2);
}
