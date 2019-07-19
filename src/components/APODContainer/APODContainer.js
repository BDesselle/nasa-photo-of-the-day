import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Image, Card, Modal, Label } from 'semantic-ui-react';


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
    < div >
      <Modal size='fullscreen' dimmer='blurring' trigger={
        <Card centered>
          <Label style={{ maxWidth: "50%" }} as='a' size='tiny' color='red' ribbon>
            Click to read more!
          </Label>
          <Card.Content>
            <Card.Header>{data.title}</Card.Header>
            <Card.Description>
              {date}
            </Card.Description>
          </Card.Content>
          <Image alt='NASA APOD' src={data.url} />
          <Card.Content extra>
            <Card.Meta>
              <span className='date'>© 2019 NASA</span>
            </Card.Meta>
          </Card.Content>
        </Card>
      }>
        <Modal.Header>{data.title}</Modal.Header>
        <Image alt='NASA APOD' src={data.url} />
        <Modal.Content>
          <Modal.Description>
            <p>{data.explanation}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
      {/* <p>{data.explanation}</p> */}
    </div >
  )
}