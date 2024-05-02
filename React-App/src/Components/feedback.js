import React from "react";
class FeedbackPage extends React.Component {
  componentDidMount() {
    this.openHtmlFile();
  }
  openHtmlFile = () => {
    const htmlContent = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Disease Prediction</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="{% static 'css/report.css' %}"
        />
        <style>
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
          #fc {
            float: left;
            color: rgb(252, 252, 252);
            font-size: 40px;
            font-weight: 600;
            font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
            padding-top: 15px;
            padding-left: 8px;
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
          .heading {
            text-decoration: underline;
            margin-top: 125px;
            text-align: center;
            font-size: 60px;
            font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
            color: rgb(101, 30, 84);
          }
          .container {
            margin-top: 50px;
            text-align: center;
            margin-left: 20%;
            margin-right: 20%;
            height: 400px;
          }
          input,
          textarea {
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
          #submit {
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
          #submit:hover {
            background-color: white;
            color: rgb(42, 65, 50);
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
    
        <h1 class="heading">Feedback</h1>
        <div class="container">
          <form
            method="post"
            action="https://script.google.com/macros/s/AKfycbzH0U8OpHSRtB-Ra5x2gukSyaMDN9yoPCxORYkwkAKVVwLIOMcOVyK9ALQ1RM858uMnmw/exec"
            name="contact-form"
          >
            <input
              type="text"
              name="your-name"
              placeholder="Name"
              required
            />
            <input
              type="text"
              name="your-number"
              placeholder="Number"
              required
            />
            <input
              type="email"
              name="your-email"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <input type="submit" value="Submit" id="submit" />
          </form>
        </div>
        <script>
          const scriptURL =
            "https://script.google.com/macros/s/AKfycbzH0U8OpHSRtB-Ra5x2gukSyaMDN9yoPCxORYkwkAKVVwLIOMcOVyK9ALQ1RM858uMnmw/exec";
          const form = document.forms["contact-form"];
          form.addEventListener("submit", (e) => {
            e.preventDefault();
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
              .then((response) =>
                alert("Thank you! your form is submitted successfully.")
              )
              .then(() => {
                window.location.reload();
              })
              .catch((error) => console.error("Error!", error.message));
          });
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

export default FeedbackPage;
