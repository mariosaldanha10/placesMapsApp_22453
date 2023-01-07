import React from "react";
import Markers from "./Markers";
import { mapStyle } from '../layout/MapStyle'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'
import { PROVIDER_GOOGLE } from 'react-native-maps'


function MapSettings(props) {
    const { handle, filter } = props

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
                latitude: 53.3292,
                longitude: -6.2814,
                latitudeDelta: 0.422,
                longitudeDelta: 0.221,
            }}
            customMapStyle={mapStyle}
        ><Markers handle={handle} filter={filter} />
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
    },
});

export default MapSettings;