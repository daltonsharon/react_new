import React from 'react';

function Switcherfooter({listAddIteams}) {
    return (
        <div style={{position:"fixed",bottom:"0",height:"5%",backgroundColor:"#0975df",color:"white",textAlign:"center",width:"30%"}}>
            {listAddIteams}
        </div>
    );
}

export default Switcherfooter;