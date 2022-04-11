import styled from "styled-components";
import hilary from "./images/hilary(1).png";

export default function NavBar() {
  return (
    <Body>
      <div>
        <img src={hilary} />
      </div>

      <p>Welcome to Hilary's cafe</p>
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  height: 170px;
  background-color: #609aa6;
  box-shadow: 0px 10px 5px #c8c6c6;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: absolute;
    left: 0;
  }

  img {
    width: 150px;
    margin-left: 30px;

    :hover {
      animation: swing 2s infinite ease-in-out;
    }

    @keyframes swing {
      0% {
        transform: rotateZ(-20deg);
      }
      50% {
        transform: rotateZ(20deg);
      }
      100% {
        transform: rotateZ(-20deg);
      }
    }
  }

  p {
    font-family: "Lora", serif;
    font-size: 50px;
    font-weight: bold;
    color: #9a6e43;
  }
`;
