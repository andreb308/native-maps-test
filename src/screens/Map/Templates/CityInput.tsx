import { useRef, useState } from "react";
import { useAppContext } from "../../AppContext";
import { GeocodeInfo } from "../Types";
import { Keyboard, TextInput } from "react-native";

const ANIMATION_DURATION = 1000;

function CitySearch() {
  const [locationSearch, setLocationSearch] = useState("");
  const { cityList, setCityList, setLoading, mapRef } = useAppContext();
  const inputRef = useRef<TextInput>(null);

  const closeKeyboard = () => {
    inputRef.current?.blur();
  };

  const handleLocationSearch = async () => {
    try {
      const response = await fetch(
        `https://geocode.maps.co/search?q=${locationSearch}&api_key=658a0272502b7149047897ubc10ad65`
      );
      var data: GeocodeInfo | undefined = await response?.json();
    } catch (error) {
      console.log("Error occurred while fetching geocoding data:", error);
      return;
    }

    if (!data || data.length === 0) {
      console.log("No geocoding data found.");
      return;
    }

    const cityName = data[0]!.display_name;
    const latitude = parseFloat(data[0]!.lat);
    const longitude = parseFloat(data[0]!.lon);

    setCityList(
      [
        ...cityList,
        {
          id: cityList[2]!.id + 1,
          name: cityName.split(",")[0]?.trim() || "Cidade",
          coordinates: {
            latitude,
            longitude,
          },
        },
      ].slice(-3)
    );

    const region = {
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

    setLoading(true);
    mapRef.current?.animateToRegion(region, ANIMATION_DURATION);
    setTimeout(() => setLoading(false), ANIMATION_DURATION);
  };

  return (
    <SearchContainer>
      <StyledInput
        value={locationSearch}
        onChangeText={(e) => setLocationSearch(e)}
        onSubmitEditing={() => handleLocationSearch()}
      />
      <InputIcon />
    </SearchContainer>
  );
}

export default CitySearch;

/***************************************************/

import styled from "styled-components/native";
import { pointerEventsAttrs } from "../Style";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../../../theme/colors";

export const SearchContainer = styled.View.attrs(pointerEventsAttrs)`
  position: relative;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  margin-top: 48px;
  padding: 0 20px;
`;

export const StyledInput = styled.TextInput.attrs({
  placeholder: "Digite um local",
  cursorColor: "grey",
  returnKeyType: "search",
})`
  background-color: #fffbda;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  position: relative;
  padding-left: 50px;
  border: 2px solid #eaeaea;
`;

export const InputIcon = styled(Icon).attrs({
  name: "location-on",
  size: 30,
  color: colors.text,
})`
  position: absolute;
  left: 32px;
`;
