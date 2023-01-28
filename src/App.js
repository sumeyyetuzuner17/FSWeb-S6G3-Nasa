import React, { useEffect, useState } from "react";
import "./App.css";
import { dummyData } from "./dummyData";
import axios from "axios";
import Nasa from "./nasa/Nasa";


function App() {
  const [data, setData] = useState(dummyData);
  const [date, setDate] = useState("2022-01-01");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=tfeNPa9DDD8KQEwfVPO8SPcnccbPk0Tb8xf50x3p&date=" +
          date
      )
      .then((response) => {
        setData(response.data);
      });
    setData(date);
  }, [date]);

  function changeDate(days) {
    let newdate = new Date(date);
    newdate.setDate(newdate.getDate() + days);

    let gercekTarih = `${newdate.getFullYear()}-${newdate.getMonth()+1}-${
      newdate.getDate()
    }`;
    setDate(gercekTarih);
  }

  return (
    <div className="App">
      <Nasa data={data} changeDate={changeDate}/>
    </div>
  );
}

export default App;
