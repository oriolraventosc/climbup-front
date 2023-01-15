import { styled } from "@mui/material";

const UserFormStyled = styled("div")`
  background-color: rgb(255, 255, 252, 0.9);
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  .link-area {
    text-align: center;
  }
  button {
    background-color: #001011;
    color: #fffffc;
    height: 55px;
    box-shadow: none;
  }
  button:hover {
    background-color: #6ccff6;
    color: #001011;
    box-shadow: none;
  }
  h2 {
    text-align: center;
  }
  @media (min-width: 426px) {
    margin-left: 20%;
    margin-right: 20%;
  }
  @media (min-width: 1024px) {
    h2 {
      text-align: left;
    }
    margin-right: 4rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-left: 55%;
    .link-area {
      text-align: left;
    }
  }
`;

export default UserFormStyled;
