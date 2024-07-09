import React, {
  useState,
  createContext,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import { CakesInfo } from "./Map/Types";
import MapView from "react-native-maps";
import { hardcodedCities } from "../../hardcodedCities";

type Cities = {
  id: number;
  name: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}[];

interface AppContextInterface {
  data: CakesInfo;
  setData: Dispatch<SetStateAction<CakesInfo>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  cityList: Cities;
  setCityList: (cities: Cities) => void;
  texto: string;
  setTexto: (text: string) => void;
  mapRef: React.RefObject<MapView>;
  handleFetch: () => Promise<void>;
}
const AppContext = createContext<AppContextInterface | null>(null);

export const AppContextProvider: React.FC<any> = ({ children }) => {
  const [data, setData] = useState<CakesInfo>([
    {
      storeID: -1,
      storeName: "Carregando...",
      latitude: -22.2827158,
      longitude: -42.5314,
      city: "Nova Friburgo",
      description:
        "Buscando informações sobre a loja. Por favor, aguarde um momento.",
      price: 13.13,
      flavorName: "Múltiplos",
      rating: 4.9,
      priceType: "/un",
      avgWeight: 0.35,
    },
  ]);
  const [cityList, setCityList] = useState<Cities>(hardcodedCities);
  const [texto, setTexto] = useState("");
  const mapRef = useRef<MapView>(new MapView({}));
  const [loading, setLoading] = useState(false);

  // The handleFetch function
  const handleFetch = async () => {
    const textResponse: CakesInfo = await fetch(
      "https://lace-fifth-dragonfly.glitch.me/"
    ).then((res) => res.json());
    setData(textResponse);
  };

  const contextValue: AppContextInterface = {
    data,
    setData,
    loading,
    setLoading,
    cityList,
    setCityList,
    texto,
    setTexto,
    mapRef,
    handleFetch,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};
