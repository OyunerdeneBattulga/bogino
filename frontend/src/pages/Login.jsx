import {React , useState} from 'react'
import axios from 'axios'
import Header from "../component/Header"
import Footer from "../component/Footer"

export const Login = () => {
  const styles = {
    all:{
      marginLeft:"40vw",
      height:"53vh",
      marginTop:"7vh"
    },
    tit:{
      color: "#02B589",
      fontSize: "32px",
      marginLeft:"7vw",
      fontFamily:'Ubuntu',
    },
    textGr:{
      color: "#02B589",
      borderBottom:"1px solid #02B589",
      fontFamily:'Ubuntu',
    },
    text:{
      marginLeft:"2vw",
      fontFamily:'Ubuntu',
    },
    input:{
      boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.16)",
      border:"none",
      width: "18vw",
      height: "44px",
      borderRadius: "100px",
      fontSize:"20px",
      paddingLeft:"2vw",
      marginBottom:"2vh",
      fontFamily:'Ubuntu',
    },
    button:{
      height:"4vh",
      width:"20vw",
      border:"none",
      backgroundColor:"#02B589",
      color:"white",
      borderRadius:"2vw",
      fontSize:20,
      marginTop:"2vh",
      fontFamily:'Ubuntu',
  },
  checkbox:{
      display:"flex",
      alignItems:"center",
      width:"20vw"
  },
  mart:{
      color:"black" ,
      borderBottom:"1px solid black" ,
      width:"8vw" ,
      marginLeft:"7vw",
      fontFamily:'Ubuntu',
  },
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const Log = async () => {
    await axios
      .get("http://localhost:8000/", {email:email , password:password})
      .then((response) => {
        setUser(response.data.data.email , response.data.data.password);
      })
      .catch((error) => {
        console.log(error); 
      });
      setEmail("")
      setPassword("")
      if (email === emailInput) {
        console.log("nevterh")
      }else{
        console.log("butgelgui")
      }
    };

  return (
    <div>
    <Header/>
        <div style={styles.all}>
        <p style={styles.tit}>Нэвтрэх</p>

            <div>
            <p style={styles.text}>Цахим хаяг</p>
            <input type="text" placeholder='email' style={styles.input} value={emailInput} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>

            <div>
            <p style={styles.text}>Нууц үг</p>
            <input type="text" placeholder='password' style={styles.input} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>

        <div>
          <div style={styles.checkbox}>
        <input type="checkbox" style={{...{color:"green"}}}/>
        <p style={{...styles.textGr , ...{width:"6vw"}}}>Намайг сана</p>
        <p style={styles.mart}>Нууц үгээ мартсан</p>
          </div>

        </div>
        <button style={styles.button} onClick={Log}>Нэвтрэх</button>
        <p>{user}</p>
        <p style={{...styles.textGr , ...{width:"13vw" , marginLeft:"4vw" , marginTop:"5vh"}}}>Шинэ хэрэглэгч бол энд дарна уу?</p>
      </div>
    <Footer/>
    </div>
  )
}

export default Login;