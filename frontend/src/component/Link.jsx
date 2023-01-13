import React from 'react'
import CopyToClipboard from "react-copy-to-clipboard";

export const Link = ({link , short}) => {
  const styles = {
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
    <div style={styles.el}>
        <p style={styles.holboos}>Өгөгдсөн холбоос</p>
        <p>{link}</p>
        <p style={styles.holboos}>Богино холбоос</p>
        <a href={short}>{short}</a>
    </div>
      <CopyToClipboard onClick={() => {navigator.clipboard.writeText({link})}} > 
      <button>Хуулж авах</button>
      </CopyToClipboard>
    </div>
  )
}


export default Link;
