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
                    <h1>job <span>tracking</span> app</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores dolore neque inventore iste veniam, mollitia, qui doloremque provident impedit nisi nemo nulla quod! At natus in laudantium recusandae, fugiat ipsum?</p>
                    <button className="btn btn-hero">login/register</button>
                </div>
            </div>
            <img src={main} alt="job hunt" className="img main-img" />
        </Wrapper>
    )
};

const Wrapper = styled.main`
    nav {
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }

    .page {
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
        margin-top: -3rem;
    }

    h1 {
        font-weight: 700;

        span {
            color: var(--primary-500);
        }
    }

    p {
        color: var(--grey-600);
    }

    .main-img {
        display: none;
    }

    @media (min-width: 992px) {
        .page {
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }

        .main-img {
            display: block;
        }
    }
`

export default LandingPage;