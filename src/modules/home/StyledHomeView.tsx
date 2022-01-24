import styled from "styled-components";

const StyledHomeView = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .github-logo {
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
      text-align: center;
    }
  }

  .HomeView__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 35px;

    font-weight: bold;

    .HomeView__header_title {
      margin-block: 8px;
    }
  }

  .HomeView__content {
    padding: 16px;

    &.HomeView__content > * {
      padding-block: 4px;
    }
  }
`;

export default StyledHomeView;
