import {React , useState, useEffect} from 'react';
import axios from 'axios';
import Link from '../component/Link'

export const History = (response) => {
  
  const styles = {
    all:{
      width:"100vw",
      height:"30vh",
      border:"2px solid black",
    }
  }

  const [links, setLinks] = useState([]);


  useEffect(()=> {
   axios
     .get('http://localhost:8000/')
     .then((response)=> {
       setLinks(response.data.data.link , response.data.data.short);
     })
  },[])
  return (
    <div>
    <div style={styles.all}>
      {links && links.map((hist,index)=> {
        return(<Link link={hist.link} short={hist.short} key={index}/>)
      })}
    </div>
    </div>
  )
}


export default History;
