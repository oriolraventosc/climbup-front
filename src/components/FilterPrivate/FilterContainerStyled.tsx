import styled from "styled-components";
import StyledTheme from "../../styles/colors";

const FilterContainerStyled = styled.section`
  animation: fadeIn 1.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 60px;
  .search {
    width: 100%;
    margin-top: 2rem;
  }
  .filter {
    width: 100%;
  }
  .button {
    background-color: ${StyledTheme.main};
    color: ${StyledTheme.dark};
    height: auto;
    width: 100%;
    min-height: 4em;
  }
  .button:hover {
    background-color: ${StyledTheme.dark};
    color: ${StyledTheme.light};
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    gap: 1rem;
    flex-direction: row;
    padding-top: 110px;
    .search {
      width: 40%;
    }
    .filter {
      width: 20%;
      margin-top: 2rem;
    }
    .button {
      margin-top: 2rem;
      width: 20%;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default FilterContainerStyled;
