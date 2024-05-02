import React from "react";

class DrugInfo extends React.Component {
  componentDidMount() {
    this.openHtmlFile();
  }

  openHtmlFile = () => {
    const htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drug Information Lookup</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
      }
      h1 {
        text-align: center;
        text-decoration: underline;
        margin-top: 125px;
        text-align: center;
        font-size: 60px;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        color: rgb(101, 30, 84);
      }
      form {
        margin: 20px auto;
        text-align: center;
      }
      input[type="text"] {
        padding: 10px;
        font-size: 16px;
        width: 40%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 10px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5%;
        width: 10%;
        padding: 13px;
        color: whitesmoke;
        background-color: rgba(15, 10, 106, 0.949);
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
        margin-top: 10px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      button:hover {
        background-color: white;
        color: rgb(42, 65, 50);
      }
      #drug-info {
        margin-top: 20px;
      }
      li a {
        display: block;
        color: rgb(236, 229, 229);
        text-align: center;
        text-decoration: none;
        font-size: 17px;
        font-weight: 200;
        margin: 5px;
      }
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        height: 10%;
        overflow: hidden;
        background-color: #102847;
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
    </style>
    </head>
    <body style="margin: 0; background-color: beige">
    <ul>
      <li><a href="/home" class="classes.btn">Home</a></li>
      <li><a href="/druginfo" class="classes.btn">DrugInfo</a></li>
      <li><a href="/bmi" class="classes.btn">BMI</a></li>
      <li><a href="/feedback" class="classes.btn">Feedback</a></li>
    </ul>
      <h1>Drug Information Lookup</h1>
      <form id="drug-form">
        <input type="text" id="drug-name" placeholder="Enter drug name">
        <button type="submit">Search</button>
      </form>
      <div id="drug-info"></div>
    
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <script>
        document.getElementById('drug-form').addEventListener('submit', async function(event) {
          event.preventDefault();
          
          const drugName = document.getElementById('drug-name').value.trim();
          if (!drugName) {
            alert('Please enter a drug name.');
            return;
          }
          
          const options = {
            method: 'GET',
            url: 'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo',
            params: {drug: drugName},
            headers: {
              'X-RapidAPI-Key': '40e9eddfe6msh3ed7b844cf66b2ap1a9232jsn3fe009c84a69',
              'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
            }
          };
    
          try {
            const response = await axios.request(options);
            displayDrugInfo(response.data);
          } catch (error) {
            console.error(error);
            alert('Failed to fetch drug information. Please try again.');
          }
        });
    
        function displayDrugInfo(drugInfo) {
          const infoContainer = document.getElementById('drug-info');
          infoContainer.innerHTML = ''; // Clear previous content
          
          const drugData = drugInfo[0]; // Assuming only one result is returned
          const drugName = drugData.brand_name;
          const genericName = drugData.generic_name;
          const activeIngredients = drugData.active_ingredients.map(ingredient => \`\${ingredient.name} (\${ingredient.strength})\`).join(', ');
          const dosageForm = drugData.dosage_form;
          const marketingCategory = drugData.marketing_category;
    
          const infoHTML = 
            \`<h2>\${drugName}</h2>
            <p><strong>Generic Name:</strong> \${genericName}</p>
            <p><strong>Active Ingredients:</strong> \${activeIngredients}</p>
            <p><strong>Dosage Form:</strong> \${dosageForm}</p>
            <p><strong>Marketing Category:</strong> \${marketingCategory}</p>\`;
          
          infoContainer.innerHTML = infoHTML;
        }
      </script>
    </body>
    </html>`;

    const newWindow = window.open("");
    newWindow.document.write(htmlContent);
  };

  render() {
    return null; // Render nothing in the actual DOM
  }
}

export default DrugInfo;
