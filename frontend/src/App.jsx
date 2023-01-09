import { Logo } from './img/logoBogino'
import {React, useState} from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from 'axios'

export const App = () => {

  const [userInput, setUserInput] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput} `
      );
      setShortenedLink(response.data.result.full_short_link);
    } catch (error) {
      console.log(error);
    }
  };


  
    const styles = {
        input:{
            width:"35vw",
            height:"4vh",
            border: "1px solid #F0F0F0",
            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.16)",
            borderRadius:"100px",
            fontSize:20,
            paddingLeft:"2vw"
        },
        button:{
            height:"4vh",
            width:"8vw",
            border:"none",
            backgroundColor:"#02B589",
            color:"white",
            borderRadius:"2vw",
            marginLeft:"1vw",
            fontSize:20,
        },
        al:{
            height:"20vh",
            width:"100vw",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        },
        logo:{
            width:"100vw",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
          },
          el:{
            height:"30vh",
            marginLeft:"30vw",        
          },
          holboos:{
            color:"grey"
          },
    }


  return (
    <div>
      <div style={styles.logo}><Logo/></div>
    <div style={styles.al}>

        <input  style={styles.input} type="text" 
        placeholder='https://www.web-huudas.mn' 
        value={userInput}
        onChange={(e)=>{setUserInput(e.target.value)}}/>

        <button type="submit"
        style={styles.button} 
        onClick={() => {fetchData()}}>
          Богиносгох</button>

    </div>
    <div style={styles.el}>
        <p style={styles.holboos}>Өгөгдсөн холбоос</p>
        <p>{userInput}</p>
        <p style={styles.holboos}>Богино холбоос</p>
        <p>{shortenedLink}</p>
      <CopyToClipboard text={shortenedLink}>
     <button style={{color:"green" , background:"none" , border:"none"}}> Хуулж авах</button> 
     </CopyToClipboard>
    </div>
    </div>
  )
}

export default App ;