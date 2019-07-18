import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function APODContainer() {
  const newDate = new Date(),
    today = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();

  console.log(`Today's Date: ${today}`);

  const [data, setData] = useState({});
  const [date] = useState(today);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then(res => {
        const data = res.data;
        setData(data);
      });
  }, [date]); // Using the {date} state as a dependency to syncronize my useEffect

  return (
    <div>
      <h2>{data.title}</h2>
      <img alt='NASA APOD' src={data.url} style={{ maxWidth: "370px" }} />
      <p>{data.explanation}</p>
    </div>
  );
}