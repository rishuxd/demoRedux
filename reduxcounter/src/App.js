import styled from "styled-components";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNum);
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <h1>Increment/Decrement Counter</h1>
        <h2>using React Redux</h2>

        <Quantity>
          <button title="Decrement" onClick={() => dispatch(decrement())}>
            <span>-</span>
          </button>
          <input type="text" value={myState} />
          <button title="Increment" onClick={() => dispatch(increment())}>
            <span>+</span>
          </button>
        </Quantity>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 92vh;
  color: rgba(0, 0, 0, 0.6);

  h1 {
    font-size: 30px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 40px;
    font-weight: 100;
  }
`;

const Quantity = styled.div`
  background-color: gray;
  button {
    padding: 10px 15px;
  }

  input {
    padding: 10px;
    width: 20px;
    text-align: center;
  }
`;

export default App;
