import './login.scss'

function Login() {
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
            <input type="text" placeholder="Username" />

            <button >Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login