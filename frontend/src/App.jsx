import React from 'react'
import { useState } from 'react'
import { Logo } from './img/logoBogino'


export const App = () => {
  const [Llink, setLlink] = useState(' ');
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
            height:"50vh",
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
    }
  return (
    <div>
      <div style={styles.logo}><Logo/></div>
    <div style={styles.al}>
        <input  style={styles.input} type="text" placeholder='https://www.web-huudas.mn' />
        <button style={styles.button} >Богиносгох</button>
        <p>Өгөгдсөн холбоос:</p>
        <p>{Llink}</p>
    </div>
    </div>
  )
}

export default App ;