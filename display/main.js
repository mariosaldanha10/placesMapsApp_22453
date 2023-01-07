import React, {useState} from "react";
import MapSettings from "../components/MapSettings";
import NavigationBar from "../components/navigationBar";

function MainDisplay(props){
    
    
    const{navigation} = props
    const [FilteringMakers, setFilteringMarkers] = useState(0) 
    

function ChangeState(id){ 
        setFilteringMarkers(id)
}

return(
    <>
    <NavigationBar ChangeState={ChangeState}/>
    <MapSettings navigation={navigation} filter={FilteringMakers}/>
    </>
);
}

export default MainDisplay;