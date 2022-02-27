import { useState } from "react";
import styled from "styled-components";

import { Logo } from "../components";

const Registerpage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    function submitHandler(e) {
        e.preventDefault();
        console.log({ name, email, password, password2 });
    }

    return (
        <Wrapper className="full-name">
            <form className="form" onSubmit={submitHandler}>
                <Logo />
                <h3>Login</h3>

                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        name
                    </label>

                    <input
                        type="text"
                        value={name}
                        name="name"
                        onChange={e => setName(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="email" className="form-label">
                        email
                    </label>

                    <input
                        type="text"
                        value={email}
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="password" className="form-label">
                        password
                    </label>

                    <input
                        type="password"
                        value={password}
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="password2" className="form-label">
                        confirm password
                    </label>

                    <input
                        type="password"
                        value={password2}
                        name="password2"
                        onChange={e => setPassword2(e.target.value)}
                        className="form-input"
                    />
                </div>

                <button type="submit" className="btn btn-block">
                    submit
                </button>
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
`

export default Registerpage;
