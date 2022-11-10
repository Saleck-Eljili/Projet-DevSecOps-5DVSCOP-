import './login.scss'

function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
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