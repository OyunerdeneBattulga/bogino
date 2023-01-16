import React from 'react'
import axios from 'axios';

export const History = () => {
    const url = "http://localhost:8000/";
    axios
    .get(url)
    .then((response) => {
        window.location.replace(response.data.data)
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div>History</div>
  )
}


export default History;