import React from 'react';
import Map from 'react-map-gl';

const MapWrapper = () => {
  return (
    <div className='map_wrap'>
      <div className='map'>
        <Map
          initialViewState={{
            longitude: 21.04624,
            latitude: 52.23932,
            zoom: 13.5,
          }}
          style={{ width: '100vw', height: '100vh' }}
          mapStyle={'mapbox://style/mapbox/dark-v9'}
          mapboxAccessToken={
            'pk.eyJ1IjoicGlzZWttYW4iLCJhIjoiY2xmOXRra3hhMDlhdjQzbnVjZWM5eWNscCJ9.ddsjLv8ZEjMQM0wkZ0rAdg'
          }
        />
        ; ;
      </div>
    </div>
  );
};

export default MapWrapper;
