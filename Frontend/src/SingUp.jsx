import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SingUp = () => {
  const [formdata, Setformdata] = useState({
    name: "",
    email: "",
    password: "",
  });

   const naviget = useNavigate()

  const handalinput = (e) => {
    Setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  // const handalsumit = (e) =>{
  //  e.preventDefault()
  //  axios.post("http://localhost:4000/register",{name,email,password}).then(rerult => console.log(rerult)
  //  .catch(error =>console.log(error)
  //  )
  //  )
  // }

  const handalsumit = (e) => {
    e.preventDefault();
    const { name, email, password } = formdata; // Destructure formdata
    axios
      .post("http://localhost:4000/register", { name, email, password })
      .then((result) => {console.log(result)
        naviget("/home")
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container-fluid maincon">
        <div className="row vh-100">
          <div className="col-lg-12  d-flex justify-content-center align-items-center">
            <form
              className="m-auto formcontai border-0 rounded-4 shadow-lg bg-body-tertiary py-lg-5 py-3 px-4"
              onSubmit={(e) => handalsumit(e)}
            >
              <div className="mb-lg-4 mb-2">
                <input
                  type="text"
                  className="inpu"
                  placeholder="Name"
                  name="name"
                  value={formdata.name}
                  onChange={(e) => handalinput(e)}
                />
              </div>
              <div className="mb-lg-4 mb-2">
                <input
                  type="email"
                  className="inpu"
                  placeholder="Email"
                  name="email"
                  value={formdata.email}
                  onChange={(e) => handalinput(e)}
                />
              </div>
              <div className="mb-lg-4 mb-2">
                <input
                  type="password"
                  className="inpu"
                  placeholder="Password"
                  name="password"
                  value={formdata.password}
                  onChange={(e) => handalinput(e)}
                />
              </div>
              <button
                type="submit"
                className="btnn btn btn-primary w-100 pt-lg-2 pb-lg-2 border"
              >
                Sign up
              </button>
              <p className="mt-3 sinuppara  text-center">
                Already have an account?<Link to="/singin"> singin here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
