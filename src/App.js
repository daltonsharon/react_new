import logo from './logo.svg';
import './App.css'
import{row,col} from 'reactstrap'
import { useEffect,useState } from 'react';
import Profile from './AllComponent/Profile';
import axios from "axios";

function App() {
  const[locationData, setLocationData] = useState([]);
  const getMapData = async() => {
    let getData = await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/mapData",{
  params:{
    latitude : locationData[0],
    longitude : locationData[1]
  }
  
  
    });
    console.log(await getData.data);
  }
  
  
  useEffect(()=>{
    if (locationData.length>0){ getMapData();}
   
    
  },[locationData])
      function getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            console.log("Geolocation is not supported by this browser.");
          }
        }
      function showPosition(position){
          setLocationData([ position.coords.latitude , position.coords.longitude]);
      }
      useEffect(()=>{
          getLocation();
          
      },[])

  return (

    <div >
      
  <Profile/>
  {locationData}
</div>
  );
}

export default App;


