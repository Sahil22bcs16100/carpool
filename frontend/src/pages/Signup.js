import { useState } from "react";
import "../styles/signup.css";
import { toast } from "react-toastify";
function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getPasswordStrength = () => {
    const password = formData.password;

    if(password.length < 6) return "Weak";
    if(password.match(/^(?=.*[A-Z])(?=.*[0-9])/)) return "Strong";
    return "Medium";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", formData.name);
  
    toast.success(`${formData.name} signed in successfully`);
  
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`signup-container ${theme}`}>

      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
      </button>

      <form className="signup-form" onSubmit={handleSubmit}>

        <h2>Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />

<div className="password-field">

<input
  type={showPassword ? "text" : "password"}
  name="password"
  placeholder="Password"
  onChange={handleChange}
  required
/>

<span
  className="toggle-password"
  onClick={() => setShowPassword(!showPassword)}
>
  {showPassword ? "Hide" : "Show"}
</span>

</div>

        <p className={`strength ${getPasswordStrength().toLowerCase()}`}>
          Password Strength: {getPasswordStrength()}
        </p>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>

      </form>

    </div>
  );
}

export default Signup;