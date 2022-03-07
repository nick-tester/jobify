import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Logo, FormField, Alert } from "../components";
import { useGlobalContext } from "../assets/context/appContext";

const Registerpage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    const { isLoading, alert } = useGlobalContext();

    function submitHandler(e) {
        e.preventDefault();
        if (!isRegistered) {
            console.log({ name, email, password, password2 });
        } else {
            console.log({ email, password });
        }
    }

    return (
        <Wrapper className="full-name">
            <form className="form" onSubmit={submitHandler}>
                <Logo />
                {alert.show && <Alert type={alert.type} message={alert.msg} />}
                <h3>{isRegistered ? "Login" : "Register"}</h3>
                {!isRegistered && (
                    <FormField
                        TYPE="text"
                        VALUE={name}
                        NAME="name"
                        ONCHANGEHANDLER={e => setName(e.target.value)}
                    />
                )}
                <FormField
                    TYPE="text"
                    VALUE={email}
                    NAME="email"
                    ONCHANGEHANDLER={e => setEmail(e.target.value)}
                />
                <FormField
                    TYPE="password"
                    VALUE={password}
                    NAME="password"
                    ONCHANGEHANDLER={e => setPassword(e.target.value)}
                />
                {!isRegistered && (
                    <FormField
                        TYPE="password"
                        VALUE={password2}
                        NAME="password2"
                        TEXT="Confirm Password"
                        ONCHANGEHANDLER={e => setPassword2(e.target.value)}
                    />
                )}

                <button type="submit" className="btn btn-block">
                    submit
                </button>

                {isRegistered ? (
                    <p>Not registered ? <Link to="" onClick={() => setIsRegistered(!isRegistered)}> register</Link></p>
                ) : (
                    <p>Already registered ? <Link to="" onClick={() => setIsRegistered(!isRegistered)}> login</Link></p>
                )}

            </form>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
  a:link,
  a:visited {
      color: var(--primary-500);
  } 
`

export default Registerpage;
