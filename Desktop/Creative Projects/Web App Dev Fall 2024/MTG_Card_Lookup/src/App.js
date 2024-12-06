import { useState, useEffect } from "react";
import "./styles.css";
import Title from "./Title.js";
import Entry from "./Entry.js";
import Info from "./Info.js";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (name) {
      //we have to get all cards and filter client side because
      //the api does not let the user through it
      const url = "https://api.magicthegathering.io/v1/cards";
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          const returnable = result.cards.filter((card) =>
            card.name.toLowerCase().includes(name.toLowerCase())
          );
          setData(returnable);
        });
    }
  }, [name]);

  return (
    <div className="App">
      <Title title="Magic: The Gathering Card Lookup" />
      <Entry action={setName} />
      <p></p>
      <Info className="info" name={name} data={data} />
      <a className="logo" href="https://magic.wizards.com/en" target="_blank">
        <img className="logo" src="/pngegg.png"></img>
      </a>
    </div>
  );
}
