import styled from "styled-components";

const FilterContainerStyled = styled.section`
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
  @media (min-width: 1024px) {
    gap: 1rem;
    flex-direction: row;
    padding-top: 110px;
    .search {
      width: 50%;
    }
    .filter {
      width: 25%;
      margin-top: 2rem;
    }
  }
`;

export default FilterContainerStyled;
