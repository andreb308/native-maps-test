import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  margin: 0px;
  flex: 1;
  background-color: maroon;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  position: absolute;
  top: ${Constants.statusBarHeight}px;
  font-size: 30px;
  margin-top: 10px;
  background-color: pink;
  padding: 5px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 50px;
`;

export const Input = styled.TextInput`
  text-align: center;
  width: 200px;
  height: 50px;
  background-color: pink;
  /* // paddingLeft: 20px; */
  border-radius: 50px;
  margin: 20px;
`;