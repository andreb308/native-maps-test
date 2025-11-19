import Constants from "expo-constants";
import styled from "@emotion/native";
import { Text } from "react-native-paper";
import colors from "../../../theme/colors";
import { moderateVerticalScale } from "react-native-size-matters";

export const Container = styled.View`
  /* gap: 20px; */
  flex: 1;
  background-color: #fffbda;
  align-items: center;
  /* justify-content: (p) => (p.center ? "center" : "flex-start"); */
  justify-content: center;
  padding-top: ${Constants.statusBarHeight * 1.1}px;
  position: relative;
`;

export const LyricContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.TouchableOpacity`
  font-family: "Inter_700Bold";
  font-size: 16px;
  color: black;
  /* background: linear-gradient(90deg, #0066cc 0%, #c500cc 100%); */
  padding: 10px 30px;
  border: 2px solid #aaaaaa;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-top: 10px; */
`;

export const Input = styled.TextInput`
  background-color: #fff;
  /* top: 0%; */
  width: 80%;
  height: 60px;
  border-radius: 100px;
  position: relative;
  margin-top: 20px;
  padding-left: 50px;
  border: 2px solid #eaeaea;
`;

// From Index.tsx
export const ModalDesc = styled(Text)`
  color: ${colors.text};
  text-align: justify;
  font-size: ${moderateVerticalScale(18, 0.3)}px;
  width: 90%;
  margin: 0 20px 0;
  font-family: "Inter_600SemiBold";
  max-width: 750px;
  background-color: ${colors.activeIndicatorBackground};
  padding: 15px;
  margin-top: 20px;
  border-radius: 25px;
`;

export const ModalTitle = styled(Text)`
  color: ${colors.text};
  font-family: "Inter_700Bold";
  text-align: center;
  /* font-weight: bold; */
  font-size: ${moderateVerticalScale(26, 0.3)}px;
  /* margin-top: ${moderateVerticalScale(20, 0.3)}px; */
  margin-left: 8px;
  margin-right: 8px;
  /* position: absolute;
  top: 0px; */
  max-width: 650px;
`;
