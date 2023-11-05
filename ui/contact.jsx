// I've made the mistake that I used React syntax here
// The goal is to use vanilla JS to create the Contact Form
/** https://www.greatfrontend.com/questions/user-interface/contact-form */

import "./styles.css";
import submitForm from "./submitForm";
import { useState } from "react";

export default function App() {
  const [values, setValues] = useState({
    name: null,
    email: null,
    message: null,
  });

  const submitForm = async function (event) {
    event.preventDefault();
    const url = "https://www.greatfrontend.com/api/questions/contact-form";

    try {
      console.log(values);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the headers correctly for JSON
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Success!");
      } else {
        alert("Submission failed!"); // Handle the case where response.ok is false
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleInput = function (event) {
    const val = event.target.value;
    const target = event.target.name;

    setValues({
      ...values,
      [target]: val,
    });
  };

  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}
    >
      <input type="text" name="name" onChange={handleInput} />
      <br />
      <input type="text" name="email" onChange={handleInput} />
      <br />
      <textarea type="text" name="message" onChange={handleInput} />
      <br />
      <button>Send</button>
    </form>
  );
}
