import React, { useState } from "react";
import { Marker, Callout } from 'react-native-maps';
import MarkerColors from "../layout/MarkerColors";
import { useNavigation } from '@react-navigation/native';

function DisplayMarkers(props) {
    const navigation = useNavigation(); 
    const { filter } = props
    const [markers, setMarkers] = useState([])

    loadPlaces()

    // fetching data from API Places.
    function loadPlaces() {
        fetch('https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json')
        .then(response => response.json())
            .then(markersPlace => setMarkers(markersPlace));
    }

    return (
        <>
            {markers.map((marker, index) => {
                return marker.place_type_id == filter || filter == 0
                    ?
                    <Marker
                        key={index}
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        title={marker.name}
                        pinColor={MarkerColors(marker.place_type_id)}>
                        <Callout onPress={() => navigation.navigate('details', { marker: marker })} />
                    </Marker>
                    :
                    <React.Fragment key={index}></React.Fragment>
            })}
        </>
    )
}

export default DisplayMarkers;