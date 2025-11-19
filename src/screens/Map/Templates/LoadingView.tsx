import React from "react";
import { ActivityIndicator } from "react-native";
import { LoadingView as StyledLoadingView } from "../Style";

const Loading: React.FC = () => {
  return (
    <StyledLoadingView>
      <ActivityIndicator size={"large"} animating={true} color="red" />
    </StyledLoadingView>
  );
};

export default Loading;
