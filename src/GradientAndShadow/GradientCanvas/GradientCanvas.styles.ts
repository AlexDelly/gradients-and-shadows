import styled from "styled-components";

export const Canvas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(272deg, #ffab72, #976ffb, #677cf2);
  background-size: 400% 400%;
  overflow: auto;

  -webkit-animation: GradientCanvasBackground 30s ease infinite;
  -moz-animation: GradientCanvasBackground 30s ease infinite;
  animation: GradientCanvasBackground 30s ease infinite;

  @-webkit-keyframes GradientCanvasBackground {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes GradientCanvasBackground {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes GradientCanvasBackground {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
