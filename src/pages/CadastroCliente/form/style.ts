import styled from "styled-components";

export const WrapForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: red;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    
    label {
        padding: 0.5rem 0;
        font-weight: 600;

    }

    input {
        padding: 0.5rem 0;
        border-radius: 0.5rem;
        outline: none;
        border: none;

        &:focus{
            border: 0.15rem solid blue;
        }
    }
    select {
        margin-bottom: 1rem;
    }
    button {
        padding: 0.5rem 0;
        border-radius: 0.5rem;
        outline: none;
        border: none;
        margin-bottom: 1rem;
        font-weight: 600;
        background: gold;
    }
  }
`;
