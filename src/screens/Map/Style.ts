import styled from "@emotion/native";
import MapView from "react-native-maps";
import { Dimensions } from "react-native";
import colors from "../../../theme/colors";
import { InterText } from "../../../theme/globalStyle";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");
export const CARD_HEIGHT = 80;
export const CARD_WIDTH = width * 0.85;
export const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  /* position: abs */
  flex: 1;
  /* z-index: 1; */
  align-items: center;
  justify-content: space-between;
`;

export const StyledMap = styled(MapView)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

// From BottomScroller.tsx
export const BottomCard = styled.TouchableOpacity<{ loop: boolean }>`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #fffbda;
  border-radius: 10px;
  /* border-top-right-radius: 50px; */
  margin: 0 10px;
  box-shadow: 2px -2px 5px rgba(0, 0, 0, 0.3); /* Standard CSS box-shadow */
  border: 2px ${(p) => (p.loop ? "solid" : "dashed")} ${colors.activeIndicatorBackground};
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  padding: 10px 20px;
  margin-left: ${SPACING_FOR_CARD_INSET}px;
  overflow: hidden;
`;

export const FlexColumn = styled.View`
  width: 60%;
  height: 90%;
  flex-direction: column;
  position: relative;
  /* background-color: pink; */
`;

export const StoreName = styled(InterText)`
  height: 50%;
  font-family: "Inter_700Bold";
  /* font-weight: 700; */
  font-size: 26px;
  text-align: center;
`;

export const StoreDesc = styled(InterText)`
  height: 50%;
  text-align: center;
  font-size: 12px;
`;

export const PriceContainer = styled.View`
  /* padding: 0 10px; */
  width: 40%;
  height: 90%;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const Price = styled(InterText)`
  /* width: 100%; */
  height: 40%;
  text-align: center;
  font-size: 26px;
  font-family: "Inter_700Bold";
  color: ${colors.text};
`;

export const PriceType = styled(InterText)`
  font-size: 12px;
  /* width: 100%; */
  /* text-align: right; */
  font-family: "Inter_700Bold";
  color: ${colors.text};
`;

// From CityInput.tsx
export const SearchContainer = styled.View`
  position: relative;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  margin-top: 48px;
  padding: 0 20px;
`;

export const StyledInput = styled.TextInput`
  background-color: #fffbda;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  position: relative;
  padding-left: 50px;
  border: 2px solid #eaeaea;
`;

export const InputIcon = styled(Icon)`
  position: absolute;
  left: 32px;
`;

// From LoadingView.tsx
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
