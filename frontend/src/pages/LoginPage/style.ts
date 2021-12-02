import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    107.64deg,
    #003fff 0%,
    rgba(84, 0, 154, 0.58) 99.64%
  );
  height: 100vh;
  width: 100vw;
`;

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 550px;
  background-color: var(--background);
  border-radius: 0.25rem;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.30);

  img {
    margin-top: 1rem;
    margin-bottom: 3rem;
    width: 150px;
    border-radius: 999rem;
    border: 0.30rem solid #475467;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 60%;
    padding: 0 1rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 0 none;
    outline: 0;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    transition: all 0.1s;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
    
    &:focus {
        border: 2px solid #003fff;
    }
  }

  button[type="submit"] {
    width: 60%;
    padding: 0 0.75rem;
    height: 3rem;
    background: #e4e7e6;
    color: #003fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1rem;

    transition: filter 0.2s;

    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .recuperar-password {
    margin-top: 1.5rem;

    a {
      color: #003fff;
    }
  }
`;
