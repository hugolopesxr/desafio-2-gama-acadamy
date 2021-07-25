import styled from "styled-components";

export const WrapContent = styled.div`
  width: 100%;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
      position: absolute;
      left: 0;
      padding: 0.5rem;
      margin-left: 1rem;
      border-radius: 0.5rem;
      border: none;
      outline: none;
      background: gold;
      font-weight: 600;
      cursor: pointer;
    }

    h1 {
      text-align: center;
      padding: 1rem;
    }
  }
`;
