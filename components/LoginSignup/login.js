import { useEffect, useState } from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Redirect, Route } from "react-router-dom";
import { auth } from "../../src/Firebase";
function Content(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, Setlogged] = useState();
  const signup = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return <Redirect to="/" />;
      })
      .catch((error) => alert(error.message));
  };
  const signin = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        Setlogged(true);
        //  console.log(logged, email, password, authUser.user.uid);
      })
      .catch((error) => alert(error.message));
  };
  useEffect(() => {}, [logged]);
  useEffect(() => {
    // Update the document title using the browser API
    document.querySelector(".flex-2").style.display = "none";
  }, []);
  return (
    <Switch>
      {logged ? (
        <Redirect to="/" />
      ) : (
        <div className="flex justify align heigth_vh login_bkg">
          <ul class="background">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="card login_card no-hover">
            <div className="flex flex-col justify ">
              <div className="body-title login_title">Login</div>
              <div className="login_light">Log into your page account</div>
            </div>
            <div className="flex flex-col justify login_gap">
              <div id="float-label">
                {/*<label htmlFor="email">Email</label>*/}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div id="float-label">
                {/*<label htmlFor="email">Password</label>*/}
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <div className="flex_1 flex justify align">
                <a type="submit" class="login_btn" onClick={signin}>
                  Login
                </a>
              </div>
              <div className="flex_1 flex justify align">
                <a type="submit" class="login_btn" onClick={signup}>
                  Sign UP
                </a>
              </div>
              <div className="divider">
                <span>OR</span>
              </div>
              <div className="flex" style={{ gap: "20px" }}>
                <div className="else_login">Google</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Switch>
  );
}

export default Content;
