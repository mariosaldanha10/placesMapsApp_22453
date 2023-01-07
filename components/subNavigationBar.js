import React,{ useState } from "react";
import { AppBar, IconButton } from "@react-native-material/core";
import { styles as s } from 'tachyons-react-native';
import { AntDesign } from '@expo/vector-icons';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ExitApp from "./exitApp";

function SubNavigationBar(props) {
    const { navigation } = props
    const [exitAppVisible, setExitAppVisibility] = useState(false);

    function ExitAppVisibility(value) {
        setExitAppVisibility(value)
      }

    return (
        <>
            <AppBar style={[s.pt4]} title="Place details" color="#320d6d"

                leading={props => (
                    <IconButton
                        icon={props => <AntDesign name="back" size={36} color="white" />}
                        color="primary"
                        onPress={() => navigation.navigate('main')}
                    />
                )}

                trailing={props => (
                    <IconButton
                        icon={props => <Icon name="dots-vertical" {...props} />} {...props}
                        onPress={() => setExitAppVisibility(!exitAppVisible)}
                    />
                )}
            />
            {exitAppVisible ? <ExitApp changeState={ExitAppVisibility} /> : <></>}
        </>
    )
}

export default SubNavigationBar;