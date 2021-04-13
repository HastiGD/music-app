import React, { useState } from "react";
import AddMusicFormComponent from "../components/AddMusicFormComponent.js";
import "../AddMusicPage.css";

export default function AddMusicPage() {
  const Countries = require("../Continents.json").Countries;
  let [url, setUrl] = useState(undefined);
  let [country, setCountry] = useState(undefined);
  let [desc, setDesc] = useState(undefined);
  let [genre, setGenre] = useState(undefined);
  let [showAlert, setShowAlert] = useState([false, "", ""]);

  const countriesArr = (countriesObj) => {
    let i;
    let names = [];
    for (i = 0; i < countriesObj.length; i++) {
      names.push(countriesObj[i].name);
    }
    return names;
  };

  // RegExp copied from https://stackoverflow.com/a/28735569/13894374
  function validateUrl(value) {
    if (value !== undefined) {
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
      var match = value.match(regExp);
      if (match && match[2].length === 11) {
        setUrl(value);
      } else {
        setShowAlert([true, "danger", "Invalid url"]);
      }
    }
  }

  function validateForm() {
    if (country !== undefined) {
      if (desc !== undefined && desc !== "") {
        if (url !== undefined && url !== "") {
          if (showAlert[0]) {
            setShowAlert([false, "", ""]);
          }
          postInputs();
        } else {
          setShowAlert([true, "danger", "Missing URL"]);
        }
      } else {
        setShowAlert([true, "danger", "Missing Description"]);
      }
    } else {
      setShowAlert([true, "danger", "Missing Country"]);
    }
  }

  function onChangeHandler() {
    if (showAlert[0]) {
      setShowAlert([false, "", ""]);
    }
  }

  function onBlurHandler(evt, caller) {
    switch (caller) {
      case "url":
        validateUrl(evt);
        break;
      case "country":
        setCountry(evt.toLowerCase());
        break;
      case "desc":
        setDesc(evt);
        break;
      case "genre":
        setGenre(evt.toLowerCase());
        break;
      default:
        break;
    }
  }

  async function postInputs() {
    try {
      const reqOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url: url,
          country: country,
          desc: desc,
          genre: genre,
          user: null,
          date: Date.now().toString(),
        }),
      };
      const resRaw = await fetch("/newSong", reqOptions);
      const res = await resRaw.json();
      console.log("Added newSong", res);
      setShowAlert([true, "success", "Song added!"]);
    } catch (e) {
      console.log("Error", e);
    }
  }

  function onErrorCloseHandler() {
    window.location.reload(false);
  }

  return (
    <div>
      <div className="formInfo">
        <h1 className="display-6">Add a new video for your country</h1>
        <p className="lead">
          To upload your song, simply find it on YouTube, and copy and paste the
          url below. Don't forget to tell us more about the song such as it's
          origins, why you chose to share it, whether or not it has any cultural
          significance, or anything else you'd like to tell viewers about it!
        </p>
      </div>
      <AddMusicFormComponent
        countriesArray={countriesArr(Countries)}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onSubmit={validateForm}
        error={showAlert[0]}
        errorType={showAlert[1]}
        errorMessage={showAlert[2]}
        onErrorClose={onErrorCloseHandler}
      />
    </div>
  );
}
