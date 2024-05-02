import React from 'react';

class BMICalculator extends React.Component {
  componentDidMount() {
    this.openBMIHtml();
  }

  openBMIHtml = () => {
    const bmiHtml = `<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Disease Prediction</title>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
      <link rel="stylesheet" type="text/css" href="{% static 'css/report.css' %}">
    </head>
    <style>
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        height: 10%;
        overflow: hidden;
        background-color: #13335a;
        position: fixed;
        top: 0;
        width: 100%;
    
      }
    
      li {
        float: right;
        padding-top: 25px;
        padding-right: 20px;
      }
    
      li:first-child {
        border-left: none;
      }
    
      #fc {
        float: left;
        color: whitesmoke;
        font-size: 40px;
        font-weight: 600;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        padding-top: 15px;
        padding-left: 8px;
    
      }
    
      li a {
        display: block;
        color: white;
        text-align: center;
        text-decoration: none;
        font-size: 17px;
        font-weight: 200;
        margin: 5px;
      }
    
    
      body {
        background-color: beige;
        text-align: center;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 30px;
        margin: 0;
      }
    
      .main-heading {
        text-decoration: underline;
        margin-top: 125px;
        text-align: center;
        font-size: 60px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: rgb(101, 30, 84);
      }
    
      .division {
        padding: 5%;
        margin-top: 50px;
        background-color: bisque;
        text-align: center;
        margin-left: 20%;
        margin-right: 20%;
        height: 3%;
      }
    
      .holder {
        padding: 1%;
        border-radius: 5px;
      }
    
      .click {
        border-radius: 7%;
        border-width: 3px;
        width: 25%;
        padding: 13px;
        margin-bottom: 10px;
        color: whitesmoke;
        background-color: rgba(15, 10, 106, 0.949);
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;
      }
    
      .click:hover {
        background-color: rgb(12, 15, 15);
        color: white;
        padding: 1.5%;
    
      }
    
      .result {
        background-color: bisque;
        width: 80%;
        margin-left: 10%;
        font-size: 30px;
        font-weight: 250;
        color:orangered;
      }
    </style>
    <script>
      function calculateBMI() {
    
        var height = parseFloat(document.getElementById("height").value);
        var weight = parseFloat(document.getElementById("weight").value);
    
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
          document.getElementById("result").innerHTML = "Please enter valid values.";
          return;
        }
    
        var bmi = weight / (height * height);
    
        var res;
        if (bmi < 18.5) {
          res = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          res = "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
          res = "Overweight";
        } else {
          res = "Obesity";
        }
    
        document.getElementById("result").innerHTML = "Your BMI is : " + bmi.toFixed(2);
        document.getElementById("result").innerHTML += "<br/>The resulting BMI value falls into the category of : " + res;
      }
    </script>
    
    <body>
    <ul>
    <li><a href="/home" class="classes.btn">Home</a></li>
    <li><a href="/druginfo" class="classes.btn">DrugInfo</a></li>
    <li><a href="/bmi" class="classes.btn">BMI</a></li>
    <li><a href="/feedback" class="classes.btn">Feedback</a></li>
  </ul>
      <h1 class="main-heading">BMI Calculator</h1>
      <div class="division">
        <label for="height">Height (in meters):</label>
        <input class="holder" type="number" id="height" placeholder="Enter height" required>
        <br><br>
        <label for="weight">Weight (in kilograms):</label>
        <input class="holder" type="number" id="weight" placeholder="Enter weight" required>
        <br><br>
        <button class="click" onclick="calculateBMI()">Calculate BMI</button>
        <br><br>
        <div id="result" class="result"></div>
      </div>
    
    
    </body>
    
    </html>`;

    // Open the HTML content in a new window
    const newWindow = window.open("");
    newWindow.document.write(bmiHtml);
  }

  render() {
    return null; // Render nothing in the actual DOM
  }
}

export default BMICalculator;
