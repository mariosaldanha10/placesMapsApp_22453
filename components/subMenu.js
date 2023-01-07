import React, { useState } from "react";
import { ListItem } from "@react-native-material/core";
import { ScrollView, View } from 'react-native';

function ListMapsPlaces({ changeState, changeVisibilityState }) {
    const [pTypes, setTypesOfPlaces] = useState([]);

    PlaceTypes()

    // fetching data from API Place types.
    function PlaceTypes() {
        fetch('https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/place_types.json')
            .then(response => response.json())
            .then(data => setTypesOfPlaces(data))
    }

    return (
        <View style={{ height: 250, width: 200 }}>
            <ScrollView>
                <ListItem title="all types of places" onPress={() => { changeVisibilityState(false), changeState(0) }} />
                {pTypes((pType, index) => (
                    <ListItem
                        key={index}
                        title={pType.name}
                        onPress={() => { changeVisibilityState(false), changeState(pType.id) }} >
                    </ListItem>
                ))}
            </ScrollView>
        </View>
    );
}

export default ListMapsPlaces;