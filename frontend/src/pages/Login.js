import { useState } from "react";
import "../styles/login.css";
import { toast } from "react-toastify";
function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  
    const name = localStorage.getItem("username") || "User";
  
    localStorage.setItem("isLoggedIn", "true");
  
    toast.success(`${name} logged in successfully`);
  
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`login-container ${theme}`}>

      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
      </button>

      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Login to GoPool</h2>

        <input
          type="email"
          placeholder="Email Address"
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

<div className="password-field">

<input
  type={showPassword ? "text" : "password"}
  placeholder="Password"
  onChange={(e)=>setPassword(e.target.value)}
  required
/>

<button
  type="button"
  className="show-btn"
  onClick={()=>setShowPassword(!showPassword)}
>
  {showPassword ? "Hide" : "Show"}
</button>

</div>

        <button type="submit">Login</button>

        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>

      </form>

    </div>
  );
}

export default Login;