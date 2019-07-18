import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function APODContainer() {

  const [data, setData] = useState({});
  const [date, setDate] = useState('2019-01-01');



    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
        .then(res => {
          const data = res.data;
          setData(data);
        });
    }, [date]);

    return (
      <div>
        <h2>{data.title}</h2>
        {/* <p className='nasa-date'>{data.date}</p> */}
        <img alt='NASA APOD'src={data.url} style={{ maxWidth: "385px" }} />
        <p>{data.explanation}</p>
      </div>
    );
  }