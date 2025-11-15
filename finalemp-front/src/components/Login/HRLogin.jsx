// "use client"

// import LoginForm from "./LoginForm"
// import DemoCredentials from "./DemoCredentials"
// import "./LoginDashboard.css"

// const HRLogin = ({ onLogin }) => {
//   const credentials = { email: "", password: "" }

//   const handleSubmit = (data) => {
//     onLogin("hr", data)
//   }

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h1 className="login-header-title">HR Admin Portal</h1>
//         <LoginForm type="hr" onSubmit={handleSubmit} />
//         <DemoCredentials type="hr" />
//       </div>
//     </div>
//   )
// }

// export default HRLogin
// "use client"

// import { useState } from "react"
// import { Shield, Mail, Lock } from "lucide-react"
// import "./LoginDashboard.css";



// const HRLogin = ({ onLogin }) => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     onLogin("hr", credentials)
//   }

//   const handleInputChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value })
//   }

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         {/* Header */}
//         <div className="login-header">
//           <div className="login-header-title">
//             <Shield className="icon" />
//             <h1>HR Admin Login</h1>
//           </div>
//           <p>Employee Management System</p>
//         </div>

//         {/* Form Section */}
//         <div className="form-section">
//           <form onSubmit={handleSubmit} className="login-form">
//             <div className="form-group">
//               <label>
//                 <Mail className="label-icon" /> Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={credentials.email}
//                 onChange={handleInputChange}
//                 placeholder="sarah@company.com"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>
//                 <Lock className="label-icon" /> Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={credentials.password}
//                 onChange={handleInputChange}
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>

//             <button type="submit" className="login-btn">
//               Sign In as HR Admin
//             </button>
//           </form>

//           <div className="demo-credentials">
//             <p>
//               <strong>Demo Credentials:</strong>
//               <br />
//               sarah@company.com / password123
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HRLogin

// "use client"

// import { useState } from "react"
// import { Shield, Mail, Lock } from "lucide-react"

// const HRLogin = ({ onLogin }) => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" })
//   const [message, setMessage] = useState(null)
//   const [messageType, setMessageType] = useState(null)

//   const handleInputChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setMessage(null)
//     setMessageType(null)
//     try {
//       const response = await fetch("http://localhost:8081/api/auth/hr/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(credentials),
//       })
//       const result = await response.json()

//       if (result === true) {
//         setMessage("Login successful!")
//         setMessageType("success")
//         onLogin("hr", credentials)
//       } else {
//         setMessage("Invalid email or password.")
//         setMessageType("error")
//       }
//     } catch (error) {
//       console.error("Login error:", error)
//       setMessage("Something went wrong. Please try again later.")
//       setMessageType("error")
//     }
//   }

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         {/* Header */}
//         <div className="login-header">
//           <div className="login-header-title">
//             <Shield className="icon" />
//             <h1>HR Admin Login</h1>
//           </div>
//           <p>Employee Management System</p>
//         </div>

//         {/* Form Section */}
//         <div className="form-section">
//           <form onSubmit={handleSubmit} className="login-form">
//             <div className="form-group">
//               <label><Mail className="label-icon" /> Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={credentials.email}
//                 onChange={handleInputChange}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label><Lock className="label-icon" /> Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={credentials.password}
//                 onChange={handleInputChange}
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//             <button type="submit" className="login-btn">
//               Sign In as HR Admin
//             </button>
//           </form>
//           {message && (
//             <div className={`message-box ${messageType}`}>
//               {message}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HRLogin
// "use client";

// import { useState } from "react";
// import { Shield, Mail, Lock } from "lucide-react";

// const HRLogin = ({ onLogin }) => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState(null);
//   const [messageType, setMessageType] = useState(null);

//   const handleInputChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(null);
//     setMessageType(null);
//     try {
//       const response = await fetch("http://localhost:8081/api/auth/hr/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(credentials),
//       });
//       const result = await response.json();

//       if (result === true) {
//         setMessage("Login successful!");
//         setMessageType("success");
//         onLogin("hr", credentials);
//       } else {
//         setMessage("Invalid email or password.");
//         setMessageType("error");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setMessage("Something went wrong. Please try again later.");
//       setMessageType("error");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <div className="login-header">
//           <div className="login-header-title">
//             <Shield className="icon" />
//             <h1>HR Admin Login</h1>
//           </div>
//           <p>Employee Management System</p>
//         </div>
//         <div className="form-section">
//           <form onSubmit={handleSubmit} className="login-form">
//             <div className="form-group">
//               <label>
//                 <Mail className="label-icon" /> Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={credentials.email}
//                 onChange={handleInputChange}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>
//                 <Lock className="label-icon" /> Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={credentials.password}
//                 onChange={handleInputChange}
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//             <button type="submit" className="login-btn">
//               Sign In as HR Admin
//             </button>
//           </form>
//           {message && <div className={`message-box ${messageType}`}>{message}</div>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HRLogin;
//"use client";

// import { useState } from "react";
// import { Shield, Mail, Lock } from "lucide-react";

// const HRLogin = ({ onLogin }) => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState(null);
//   const [messageType, setMessageType] = useState(null);

//   const handleInputChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(null);
//     setMessageType(null);
//     try {
//       const response = await fetch("http://localhost:8081/api/auth/hr/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(credentials),
//       });
//       const result = await response.json();

//       if (result === true) {
//         setMessage("Login successful!");
//         setMessageType("success");
//         onLogin("hr", credentials);
//       } else {
//         setMessage("Invalid email or password.");
//         setMessageType("error");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setMessage("Something went wrong. Please try again later.");
//       setMessageType("error");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         {/* Header */}
//         <div className="login-header">
//           <div className="login-header-title">
//             <Shield className="icon" />
//             <h1>HR Admin Login</h1>
//           </div>
//           <p>Employee Management System</p>
//         </div>

//         {/* Form Section */}
//         <div className="form-section">
//           <form onSubmit={handleSubmit} className="login-form">
//             <div className="form-group">
//               <label>
//                 <Mail className="label-icon" /> Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={credentials.email}
//                 onChange={handleInputChange}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>
//                 <Lock className="label-icon" /> Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={credentials.password}
//                 onChange={handleInputChange}
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//             <button type="submit" className="login-btn">
//               Sign In as HR Admin
//             </button>
//           </form>

//           {/* Message Box */}
//           {message && <div className={`message-box ${messageType}`}>{message}</div>}

//           {/* Signup Link */}
//           <p className="signup-text">
//             Don’t have an account?{" "}
//             <a href="/hrlogin" className="signup-link">
//               Sign up
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HRLogin;


"use client";

import { useState } from "react";
import { Shield, Mail, Lock } from "lucide-react";

const HRLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setMessageType(null);
    try {
      const response = await fetch("http://localhost:7070/api/auth/hr/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const result = await response.json();

      if (result === true) {
        setMessage("Login successful!");
        setMessageType("success");
        onLogin("hr", credentials);
      } else {
        setMessage("Invalid email or password.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Something went wrong. Please try again later.");
      setMessageType("error");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-header-title">
            <Shield className="icon" />
            <h1>HR Admin Login</h1>
          </div>
          <p>Employee Management System</p>
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>
                <Mail className="label-icon" /> Email Address
              </label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label>
                <Lock className="label-icon" /> Password
              </label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Sign In as HR Admin
            </button>
          </form>
          {message && <div className={`message-box ${messageType}`}>{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default HRLogin;