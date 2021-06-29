import React, { Component, useState } from "react";

import Navigation from "./navigation";
import Footer from "./footer.js";
import "./pageLayout.css";

function Emails() {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          subject: "",
          message: "",
        });
      });
  };

  return (
    <div>
      <Navigation />
      <form
        style={{
          display: "flex",
          //   height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={submitEmail}
        class="container-email"
      >
        <fieldset
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            width: "100%",
          }}
        >
          <legend>E-mail Station</legend>
          <input
            placeholder="Name"
            onChange={handleStateChange}
            name="name"
            value={mailerState.name}
          />
          <input
            placeholder="Email"
            onChange={handleStateChange}
            name="email"
            value={mailerState.email}
          />
          <input
            placeholder="Subject"
            onChange={handleStateChange}
            name="subject"
            value={mailerState.subject}
          />
          <br />
          <textarea
            placeholder="Message"
            onChange={handleStateChange}
            name="message"
            value={mailerState.message}
          />
          <br />
          <button class="btn  button2">Send Message</button>
        </fieldset>
        {/* <button class="btn  button2">Send Message</button> */}
      </form>

      <legend class="container-userList"> Users list to send email to? </legend>

      <Footer />
    </div>
  );
}
export default Emails;
