import styled from "styled-components";

export default function Footer() {
  return (
    <Body>
      <div>
        <h1>About Us</h1>
        <p>FAG</p>
        <p>Delivery</p>
      </div>
      <div>
        <h1>Contact</h1>
        <div></div>
      </div>
      <div>
        <h1>Payment Method</h1>
        <div></div>
      </div>
    </Body>
  );
}

const Body = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 200px;
  background: #e6e6e6;
  box-shadow: 0px -10px 5px #dddddd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
