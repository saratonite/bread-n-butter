import styled, { css } from "styled-components";
const InputStyle = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  position: relative;
  label {
    display: block;
    font-size: 1.4rem;
  }
  input {
    padding: 1rem 1.5rem;
    width: 100%;
    font-size: 1.6rem;
    color: inherit;
    border: 1px solid #ccc;
    border-radius: 3px;
    &:focus {
      border: 1px solid orange;
      outline: none;
    }
  }

  //
  .input__error {
    font-size: 1.1rem;
    position: absolute;
    top: 0.5rem;
    right: 0rem;
    background-color: red;
    padding: 0 1rem;
    color: #fff;
  }
`;
export const InputField = ({ label = "Input", error, ...rest }) => (
  <InputStyle>
    <label htmlFor={`label_${label}`}>{label}</label>
    <input id={`label_${label}`} {...rest} />
    {error && <span className="input__error">{error}</span>}
  </InputStyle>
);

export const FeildGroup = styled.div``;

export const Button = styled.button`
  display: inline-block;
  padding: 1rem 1.5rem;
  border: 1px solid #ccc;
  font-size: 1.5rem;
  font-weight: 400;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    background-color: #bbb;
  }

  ${props =>
    props.primary &&
    css`
      background-color: orangered;
      color: #fff;
      &:hover {
        background-color: #ff5722;
      }
    `}

  ${props =>
    props.full &&
    css`
      width: 100%;
    `}
`;

// Style contaner of login / signup page

export const AuthPageStyle = styled.div`
  width: 30%;
  padding: 3rem 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0.5rem 1rem #ddd;
  min-width: 40rem;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
