import React, { useState } from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import { styles as s } from 'tachyons-react-native'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ExitApp from "./exitApp";
import ListMapsPlaces from "./subMenu";

function NavigationBar({ changeState }) {
  const [subMenuVisible, setAppVisibility] = useState(false);
  const [exitAppVisible, setExitAppVisibility] = useState(false);

  function subMenuVisibility(value) {
    setAppVisibility(value)
  }
  function ExitAppVisibility(value) {
    setExitAppVisibility(value)
  }

  return (
    <>
      <AppBar style={[s.pt4]} title="placesMapApp" color="#b6d7a8"

        leading={props => (
          <IconButton icon={props => <Icon name="menu" {...props} />} {...props}
            onPress={() => { setAppVisibility(!dropdownVisible), setExitAppVisibility(false) }} />
        )}

        trailing={props => (
          <HStack>
            <IconButton
              icon={props => <Icon name="dots-vertical" {...props} />} {...props}
              onPress={() => { setAppVisibility(!exitAppVisible), setAppVisibility(false) }} />
          </HStack>
        )}
      />
      {subMenuVisible ? <Dropdown changeState={changeState} changeVisibilityState={subMenuVisibility} /> : <></>}
      {exitAppVisible ? <ExitApp changeState={ExitAppVisibility} /> : <></>}
    </>
  )
}

export default NavigationBar;