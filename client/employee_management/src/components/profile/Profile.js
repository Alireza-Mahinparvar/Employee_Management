import React, { useState, useEffect } from "react";
import axios from "axios";
import "../profile/profile.css";

const Pricing = () => {
  const [profileName, setProfileName] = useState("");
  const [profileCell, setProfileCell] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileEmail, setProfileEmail] = useState("");

  const profileData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/");
      setProfileCell(res.data.results[0].cell);
      setProfileEmail(res.data.results[0].email);
      setProfileImage(res.data.results[0].picture.large);
      setProfileName(
        `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileData();
  }, []);

  return (
    <div class="card-container" >
    <span class="pro">PRO</span>
    <img
        class="round"
        src=" "
        alt="user"
    />
    <h3>Name</h3>
    <h6>city</h6>
    <p>
        description for example <br />
        front-end developer
    </p>
    <div class="buttons">
        <button class="primary">
            Message
        </button>
    </div>
    <div class="skills">
        <h6>Skills</h6>
        <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
        </ul>
    </div>
</div>
  );
};

export default Pricing;