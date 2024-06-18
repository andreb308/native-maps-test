import Constants from "expo-constants";
import styled from "styled-components/native";

export const Container = styled.View`
  /* gap: 20px; */
  flex: 1;
  background-color: #fffbda;
  align-items: center;
  /* justify-content: (p) => (p.center ? "center" : "flex-start"); */
  justify-content: center;
  padding-top: ${Constants.statusBarHeight * 1.1}px;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const LyricContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.TouchableOpacity`
  font-weight: bold;
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

export const Input = styled.TextInput.attrs({
  placeholder: "Digite um artista (ex: Taylor Swift)",
  cursorColor: "grey",
  returnKeyType: "search",
})`
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
