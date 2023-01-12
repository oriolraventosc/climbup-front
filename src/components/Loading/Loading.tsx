import LoadingContainerStyled from "./LoadingContainerStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingContainerStyled>
      <span className="loader" aria-label="loading"></span>
    </LoadingContainerStyled>
  );
};

export default Loading;
