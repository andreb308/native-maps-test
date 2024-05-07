import { View, Text } from "react-native";
import React from "react";

const UnorderedList = ({
  texts,
  color,
}: {
  texts: string[];
  color: string;
}) => {
  return (
    <Column>
      {texts.map((t, index) => (
        <Row key={index}>
          <Column
            style={{
              alignSelf: "flex-start",
              justifyContent: "flex-start",
              marginRight: 12,
              transform: [{ scale: 2.5 }],
            }}
          >
            <Text
              style={{
                color: color,
                alignSelf: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              {"\u2022"}
            </Text>
          </Column>
          <Column>
            <Text style={{ color: color }}>{t}</Text>
          </Column>
        </Row>
      ))}
    </Column>
  );
};

const Column = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: object;
}) => {
  return (
    <View style={[{ display: "flex", flexDirection: "column" }, style]}>
      {children}
    </View>
  );
};

const Row = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: object;
}) => {
  return (
    <View style={[{ display: "flex", flexDirection: "row" }, style]}>
      {children}
    </View>
  );
};

export default UnorderedList;
