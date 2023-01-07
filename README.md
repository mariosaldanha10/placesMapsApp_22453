# placesMapsApp_22453

The objective of this project is to develop a mobile app to showcase in map places of literary importance in Ireland and surrounding areas, related to poets, patrons, publishers in Ireland who lived in the 16th and 17th century. The requirements are as follows and all requirements carry equal weightage:

- [x] Display markers on the map 
- [x] Load places and place types JSON data1   
- [x] Display marker for all places using GPS coordinates   
- [x] Use different colours, one for each place type  
- [x] When marker is tapped, place name should be displayed on a pop-up info window 
- [x] Show extended information 
- [x] When the pop up info window is tapped, show in full screen all details of the place (id, name, Gaelic name, type, GPS coordinates)
- Show the image of the place loaded from the internet2
- [Bonus] Show relevant image using any free web service, or search engine []
- [x] Show a back button, when pressed, go back to map view
- Allow filtering by Place Type
- Show dropdown for selecting Place Type, default value should be all
- When a specific Place Type is selected, show only the places with this Place Type on the map
- Allow custom marker
- Long Press anywhere on map to show a draggable marker 
- Show distances to the nearest place (from the downloaded data), and on drag marker, update this info
- Draw a semi-transparent blue circle around this marker with a radius of 10 km and show number of places within this radius
- [Bonus] Create a slider to control the above radius in km (1-1000, default 10) and on change, update the circle on the map and update number of places within the radius info shown accordingly
URLs:

- Make GET request on the following URLs (do NOT download and include in source):

- Places: https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json
- Place Types: https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/place_types.json
Note:

- Bonus requirements do not carry any marks, but will be used to compensate any marks you have lost, if any

- 1. Places data was taken from MACMORRIS

- 2. You can hardcode an array of image URLs and randomly load one of them

- 3. Use Haversine formula to obtain the great-circle distance between two points on a sphere given their longitudes and latitudes. You shall use an inbuilt function if available, given it uses the Haversine formula directly or gives the distance on Earth treating it as a WGS-84 ellipsoid.


- References used for this project:
- https://www.npmjs.com/package/react-native-maps
- https://reactnavigation.org/docs/hello-react-navigation
- https://reactnavigation.org/docs/native-stack-navigator/
- https://www.npmjs.com/package/react-native-dynamic-search-bar
- https://www.npmjs.com/package/react-native-element-dropdown
- https://github.com/react-native-maps/react-native-maps
- https://www.npmjs.com/package/react-native-material-design-searchbar
- https://www.npmjs.com/package/react-native-platform-searchbar
- https://www.npmjs.com/package/react-native-safe-area-context
- https://www.npmjs.com/package/react-native-screens
- https://www.npmjs.com/package/react-native-vector-icons
- https://mapstyle.withgoogle.com/
- https://github.com/react-navigation/react-navigation/issues/7961
- https://stackoverflow.com/questions/74544273/the-action-navigate-with-payload-was-not-handled-by-any-navigator
