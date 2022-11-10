import './login.scss'
import {useState} from "react";

function Login() {
  const [name, setName] = useState('');
  const handleChangeName = e => setName(e.target.value);
  const isAlphaNumeric = () => {
    
      let code, i, len;
      let isalp= true;
    
      for (i = 0, len = name.length; i < len; i++) {
        code = name.charCodeAt(i);
        if (!(code > 47 && code < 58) && //numeric (0-9)
            !(code > 64 && code < 91) && //upper alpha (A-Z)
            !(code > 96 && code < 123)) { //lower alpha (a-z)
          alert('is not alphanumeric')
          isalp=false
        }
      }
      if(isalp)
        alert('is alphanumeric')
    
    
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Membre groupe: 
            <i>Marlyse Saintich Majorie HANGAMALONGO MAPAGA,
          
          Kokou Kami Landry Ulrich MAMAN,
          Ben-Jamin MAMFOUMBI KOUELY et 
          Saleck EL JILI.</i>
          </p>
          
          
        </div>
        <div className="right">
          <h1>PROJET DEV SECOPS</h1>
          <form>
            <input type="text" placeholder="Username" onChange={handleChangeName}/>

            <button onClick={isAlphaNumeric}>Test</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login