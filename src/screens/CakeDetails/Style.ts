import styled from "@emotion/native";
import colors from "../../../theme/colors";
import Constants from "expo-constants";
import {
    moderateScale,
    moderateVerticalScale,
    verticalScale,
} from "react-native-size-matters";
import { InterText } from "../../../theme/globalStyle";
import MapView from "react-native-maps";

// From Index.tsx
export const Container = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: center;
  gap: ${verticalScale(16)}px;
  padding-top: 20px;
  gap: 12px;
  flex: 1;
  background-color: #fffbda;
`;

export const StoreName = styled(InterText)`
  color: ${colors.text};
  font-size: 34px;
  font-family: "Inter_700Bold";
  text-align: center;
  margin-top: ${Constants.statusBarHeight}px;
  /* font-weight: bold; */
`;

export const CityName = styled(InterText)`
  color: ${colors.text};
  font-size: 24px;
  text-align: center;
`;

export const ModalDesc = styled(InterText)`
  color: ${colors.text};
  text-align: center;
  font-size: ${moderateVerticalScale(22, 0.3)}px;
  width: 90%;
  margin: 0 20px 0;
  font-family: "Inter_600SemiBold";
  max-width: 750px;
  background-color: ${colors.activeIndicatorBackground};
  padding: 15px;
  margin-top: 20px;
  border-radius: 25px;
`;

export const ModalTitle = styled(StoreName)`
  font-size: ${moderateVerticalScale(40, 0.3)}px;
  margin-top: ${moderateVerticalScale(20, 0.3)}px;
  /* position: absolute;
  top: 0px; */
  max-width: 650px;
`;

// From CakeDescription.tsx
export const DescriptionContainer = styled.TouchableOpacity`
  width: 100%;
  max-width: 650px;
  background-color: ${colors.background};
  border-radius: 10px;
  justify-content: flex-start;
  flex-direction: column;
  gap: 5px;
  padding: 10px 20px;
  border: 2px solid ${colors.activeIndicatorBackground};
`;

// From PriceConverter.tsx
export const PriceConverterContainer = styled.View`
  width: 100%;
  max-width: 650px;
  height: 12.5%;
  max-height: 120px;
  background-color: #ffec9e;
  border-radius: 10px;
  border: 2px solid ${colors.activeIndicatorBackground};
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  flex-direction: row;
  gap: 15px;
`;

export const Price = styled(InterText)`
  text-align: center;
  font-size: ${moderateVerticalScale(24, 0.3)}px;
  /* Suggested code may be subject to a license. Learn more: ~LicenseLog:2955892092. */
  font-family: "Inter_700Bold";
  color: ${colors.text};
`;

export const PriceDesc = styled(Price)`
  font-family: "Inter_600SemiBold";
  font-size: ${moderateVerticalScale(16, 0.3)}px;
`;

export const PriceDivider = styled.View`
  height: 70%;
  width: 2.5px;
  border-radius: 50px;
  background-color: #909090;
`;

// From Ratings.tsx
export const RatingsContainer = styled.View`
  width: 100%;
  max-width: 650px;
  height: 15%;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 20px; */
  flex-direction: row;
  gap: 15px;
`;

export const Rating = styled(InterText)`
  text-align: center;
  font-size: ${moderateVerticalScale(36, 0.3)}px;
  font-family: "Inter_700Bold";
  color: ${colors.text};
  margin-top: 0;
  width: 100%;
`;

export const Category = styled(Rating)`
  font-size: ${moderateVerticalScale(18, 0.3)}px;
`;

export const RatingDesc = styled(Rating)`
  font-family: "Inter_600SemiBold";
  font-size: ${moderateVerticalScale(14, 0.3)}px;
`;

export const RatingsDivider = styled.View`
  height: 70%;
  width: 2.5px;
  border-radius: 50px;
  background-color: #909090;
`;

export const Column = styled.View`
  height: 100%;
  width: 30%;
  max-width: 150px;
  max-height: 150px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
  background-color: #ffec9e;
  border-radius: 10px;
  border: 2px solid ${colors.activeIndicatorBackground};
`;

// From StaticMap.tsx
export const MapContainer = styled.View`
  width: 100%;
  max-width: 650px;
  height: 30%;
  /* margin-top: 20px; */
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid ${colors.background};
`;

export const StyledMapView = styled(MapView)`
  width: 100%;
  height: 100%;
`;
