import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import CardFile from './CardFile';
import { Button } from 'antd';
import { Spin, Alert } from 'antd';
import Switcherfooter from '../AllComponent/Switcherfooter';

function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const [categoriestabledata, setCategoriestabledata] = useState([]);
  const [removeDups, setRemoveDups] = useState([]);
  const [contentData,setContentData] =useState([])
  const [calculater,setCalculater]=useState([])
  useEffect(() => {

    let getData = async () => {
      let dataGot = await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/getGenieRecordsByAllCategories")
      let toRemoveDups = await dataGot.data.reduce((storageArray, e, index) => {
        if (!storageArray.includes(e.mainCategory)) {
          storageArray.push(e.mainCategory)
        }

        return storageArray
 
      }, [])
      let toFilter = decodeURI(window.location.href.split("/")[window.location.href.split("/").length - 1])
      setRemoveDups(toRemoveDups.filter(e => {
        return e == toFilter
      }))
      let contentToFilter = await dataGot.data.filter(e=>{

return e.mainCategory == toFilter  
      })
      setContentData(contentToFilter)
      setCategoriestabledata(await dataGot.data)

    }

    getData();

  }, [])

  const handleCh = (jobFromData,priceFromData,ratingFromData,detailsFromData)=>{

    let newObj = calculater
    if(newObj[jobFromData]){
      newObj[jobFromData] += parseInt(priceFromData)
    }else{
      newObj[jobFromData] = parseInt(priceFromData)
    }
    setCalculater(newObj)
    console.log(calculater)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className='loading' style={{display:"flex",marginLeft:"5%"}}>
    {contentData.length ?(
      <>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 450, width: 200 }}
    >

      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >

        {removeDups.length ? removeDups.map((e, index) => (

          <Tab label={e} {...a11yProps(index)} />

        )) : (<div></div>)}

        {/* <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      
      <TabPanel  value={value} index={0}>
       {contentData.map(e=>(
        <CardFile calSet={handleCh} jobFromData ={e.job} priceFromData ={e.price} ratingFromData ={e.rating} detailsFromData ={e.description}/>
        ))}
        <Button ghost>Default</Button>
    <Button type="dashed" ghost>
      Dashed
    </Button>
    <div className="site-button-ghost-wrapper">
    
    </div>
      </TabPanel>
    

     



    </Box>
    <div style={{display:"flex",justifyContent:"start"}}>
    <Switcherfooter listAddIteams={"Amount"}/>  
    </div>   

    </>
    ): (<Spin style={{display:"flex",marginTop:"15rem",marginLeft:"35rem",height:"15rem",width:"15rem"}} tip="Loading..."><Alert/></Spin>)}
    </div>  
    </>    
  );
}