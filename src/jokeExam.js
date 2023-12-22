import React, { useEffect, useState } from "react";
import axios from "axios";

const Joke = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    axios.get("http://v2.jokeapi.dev/joke/Any").then((response) => {
      setJoke(
        response.data.joke || `${response.data.setup} ${response.data.delivery}`
      ).catch((err) => console.log("err", err));
    }, []);
    return (
      <div>
        <p>{joke}</p>
      </div>
    );
  });
};
