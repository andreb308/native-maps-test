import React from "react";
import { ActivityIndicator } from "react-native";

const Loading: React.FC = () => {
  return (
    <LoadingView>
      <ActivityIndicator size={"large"} animating={true} color="red" />
    </LoadingView>
  );
};

export default Loading;

/*****************************************************************/
import styled from "@emotion/native";

export const LoadingView = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: #00000033;
`;
