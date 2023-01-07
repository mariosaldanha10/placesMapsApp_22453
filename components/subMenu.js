import React, { useState } from "react";
import { ListItem } from "@react-native-material/core";
import { ScrollView, View } from 'react-native';

function ListMapsPlaces({ changeState, changeVisibilityState }) {
    const [MapsPlaceTypes, setMapsPlaceTypes] = useState([]);

    loadLocationTypes()

	//fetching data from API locations types.
    function loadLocationTypes() {
        fetch('https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/place_types.json')
            .then(response => response.json())
            .then(data => setMapsPlaceTypes(data))
    }

    return (
        <View style={{ height: 250, width: 200 }}>
            <ScrollView>
                <ListItem title="ALL LOCATION TYPES" onPress={() => { changeVisibilityState(false), changeState(0) }} />
                {MapsPlaceTypes.map((locationType, index) => (
                    <ListItem
                        key={index}
                        title={locationType.name}
                        onPress={() => { changeVisibilityState(false), changeState(locationType.id) }} >
                    </ListItem>
                ))}
            </ScrollView>
        </View>
    );
}

export default ListMapsPlaces;