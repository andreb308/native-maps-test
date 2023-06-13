import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { hardcodedCities } from '../../../hardcodedCities';
import { useRef } from 'react';

export default function Map() {
  
  const mapRef = useRef(null)

  const moveToCity = (city) => {
    const { latitude, longitude } = city.coordinates;
    const region = {
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    // setInitialRegion(region);
    mapRef.current.animateToRegion(region, 3000);
  }

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <MapView initialRegion={{latitude: 35.6895, longitude: 139.6917, latitudeDelta: 2, longitudeDelta: 2}}
          style={styles.map}
          ref={mapRef}
          mapType={'hybrid'}
          provider={'google'}
          showsUserLocation
          showsMyLocationButton
          mapPadding={{
            top: 40,
            right: 10,
            bottom: 10,
            left: 10,
          }}
          >
            {hardcodedCities.map((city) => (
                <Marker key={city.id} coordinate={city.coordinates}></Marker>
            ))}

          </MapView>

      <View // ButtonContainer
        style={styles.buttonContainer}>
        {hardcodedCities.map((city) => (
          <TouchableOpacity
            key={city.id}
            onPress={() => moveToCity(city)}
            style={styles.button}>
            <Text selectable selectionColor={'#FF0000'} style={{ color: 'white' }}>{city.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  map: { ...StyleSheet.absoluteFillObject,
    zIndex: -1
  },
  buttonContainer: {
    display: 'flex',
    position: 'absolute',
    bottom: '10%',
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    zIndex: 1,
  },
  button: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 80,
    overflow: 'hidden',
    backgroundColor: 'darkgreen',
    alignItems: 'center',
    color: 'white',
  },
});


