import React, { useState } from 'react';
import "./SingIn.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SingIn = () => {

    const [fromdata,setFormdata] = useState({email:"",password:""})
     const naviget = useNavigate()
    const forominput = (e) =>{
      setFormdata({
        ...fromdata,
        [e.target.name]:e.target.value 
      })
    }
   
    const handalsum = (e) =>{
      e.preventDefault()
      const { password, email } = fromdata;
      axios
        .post("http://localhost:4000/login", { password, email })
        .then((result) => {console.log(result)
          if(result.data === "success"){   
            naviget("/home")
          }
        })
        .catch((error) => console.log(error));
    }



  return (
       <>
      <div className="container-fluid bg">
        <div className="row vh-100">
          <div className="col-12 col-lg-12 col-md-6 d-flex justify-content-center align-items-center">
            <form className=" fmIn rounded-5 border-2 shadow w-50" onSubmit={handalsum}>
              <div className="mb-3">
                <input type="email" className="inpusinIn" placeholder="Email" name='email' value={fromdata.email} onChange={(e)=>forominput(e)}/>
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="inpusinIn"
                  placeholder="Password"
                  name='password'
                  value={fromdata.password}
                  onChange={(e)=>forominput(e)}
                />
                  </div>
              <button
                type="submit"
                className="btn btnn btn-primary border-0 w-100 fw-bold p-2"
              >
                Submit
              </button>
              <p className="para1">Forgot password?</p>
              <p className="para2">
                Don't have an account? <Link to="/">SingUp here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingIn;
