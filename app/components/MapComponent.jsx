import React from 'react'; 
 
const MapComponent = () => { 
  return ( 
    <div style={{ width: '100%', height: '700px' }}> 
      <iframe 
        src="https://deepstatemap.live/en#6/47.9976757/34.8925781" 
        style={{ width: '100%', height: '100%' }} 
        title="DeepStateMap" 
        frameBorder="0" 
      /> 
    </div> 
  ); 
}; 
 
export default MapComponent;