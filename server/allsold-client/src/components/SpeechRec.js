import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

function SpeechRec(props) {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  useEffect(() => {
    const setForm = document.getElementById(props.id);

    setForm.value = note;
    props.handleChange(props.id, note);
    console.log(setForm);
  }, [note]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      setNote(transcript);

      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  return (
    <Button onClick={() => setIsListening((prevState) => !prevState)}>
      {isListening ? (
        <MicIcon style={{ fill: "red" }} />
      ) : (
        <MicOffIcon color="primary" />
      )}
    </Button>
  );
}

export default SpeechRec;
