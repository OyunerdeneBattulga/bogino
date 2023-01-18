import React from 'react'

export const Link = ({link , short}) => {
  const styles = {
    el:{
      height:"30vh",
      marginLeft:"30vw",        
    },
    holboos:{
      color:"grey"
    },
    button:{
      color:"green",
      background:"none",
      border:"none",
      marginLeft:"20vw",
      marginTop:"-10vh",
    }
  }
  return (
    <div>
    <div style={styles.el}>
        <p style={styles.holboos}>Өгөгдсөн холбоос</p>
        <p>{link}</p>
        <p style={styles.holboos}>Богино холбоос</p>
        <p>{short}</p>
      <button onClick={() => {navigator.clipboard.writeText(short)}} style={styles.button}>Хуулж авах</button>
    </div>
    </div>
  )
}


export default Link;
