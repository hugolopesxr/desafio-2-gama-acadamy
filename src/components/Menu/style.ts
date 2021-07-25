import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 1rem;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    width: 3rem;
    border-radius: 50%;
  }

  a {
    padding: 0 1rem;
    font-weight: 600;
    color: white;

    &:hover {
      color: black;
    }

    &:focus {
      color: black;
    }
  }
`;
