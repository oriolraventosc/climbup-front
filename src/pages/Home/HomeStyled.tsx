import styled from "styled-components";

const HomeStyled = styled.section`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 426px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(343px, 1fr));
  }
  @media (min-width: 1024px) {
    padding-top: 110px;
  }
`;

export default HomeStyled;
