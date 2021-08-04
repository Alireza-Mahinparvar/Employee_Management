import React, { Component, useState } from "react";

// import Navigation from "./navigation";
import Footer from "./footer.js";
import "./pageLayout.css";
import RecordList from "./recordList.js";

function Emails() {
  const [mailerState, setMailerState] = useState({
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
          alert("Message Sent :)");
        } else if (resData.status === "fail") {
          alert("Message failed to send :(");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          subject: "",
          message: "",
        });
      });
  };

  return (
    <div>
      {/* <Navigation /> */}
      <form
        style={{
          display: "flex",
          //   height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={submitEmail}
        className="container-email"
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
          <button className="btn btn-outline-info">Send Message</button>
        </fieldset>
      </form>

      <legend className="container-userList">{<RecordList />}</legend>

      {/* <Footer /> */}
    </div>
  );
}
export default Emails;
