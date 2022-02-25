import styled from "styled-components";

import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const LandingPage = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt="logo-j" />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>job tracking app</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores dolore neque inventore iste veniam, mollitia, qui doloremque provident impedit nisi nemo nulla quod! At natus in laudantium recusandae, fugiat ipsum?</p>
                    <button className="btn btn-hero">login/register</button>
                </div>
            </div>
            <img src={main} alt="job hunt" className="img main-img" />
        </Wrapper>
    )
};

const Wrapper = styled.main`

`

export default LandingPage;