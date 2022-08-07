import React, { Component, useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import { motion } from 'framer-motion';

const users = [
  {
    fname: 'Saif',
    lname: 'Hussain',
    geoLocation: {
      coordinates: [51.4743, 0.1124]
    },
    picture: 'https://ca.slack-edge.com/T03ALA7H4-U03BHQMPR8B-ad702ae06c5b-512',
    _id: "62ed7d3d4ac6471d1289c40f"
  },
  {
    fname: 'Naz',
    lname: 'H',
    geoLocation: {
      coordinates: [51.4905, 0.1535]
    },
    picture: 'https://ca.slack-edge.com/T03ALA7H4-U03BHQNU09Z-4cbaab60cec2-512',
  },
  {
    fname: 'Clare',
    lname: 'Budds',
    geoLocation: {
      coordinates: [51.4806, 0.1284]
    },
    picture: 'https://ca.slack-edge.com/T03ALA7H4-U03BWD2M7G9-dc8487d8ca75-512',
  },
  {
    fname: 'Chris',
    lname: 'Brown',
    geoLocation: {
      coordinates: [51.48925, 0.110117]
    },
    picture: 'https://ca.slack-edge.com/T03ALA7H4-U03BL516ULC-a8eb365e0c4c-512',
  },
  {
    fname: 'Paddy',
    lname: 'Reynolds',
    geoLocation: {
      coordinates: [51.4840, 0.1453]
    },
    picture: 'https://ca.slack-edge.com/T03ALA7H4-U03BHQMHC75-73ac8096e0bb-512',
  },
];

export const MyComponent = () => (
  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    }}
  />
);

function Location() {

  const [result,setResult ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/profile/all')
    .then((response) => response.json())
    .then((data) => {
      setResult(data)
      // console.log(result[6].geoLocation.coordinates[0])
      // console.log(result[6].geoLocation.coordinates[1])
      // console.log(users[0].geoLocation.coordinates)
    });
  }, []);

  const position = [51.4806, 0.1284];
  return (
  //   <div>
  //   <ul>
  //     {result.map(element => {
  //       if(typeof(element.geoLocation) !== 'undefined')
  //       return <li id={element._id} key={element._id} >{element.geoLocation.coordinates[0]}</li>
  //     })}
  //   </ul>
  // </div>
  
    <MapContainer
      className="location"
      center={position}
      zoom={14}
      style={{ height: 600, width: 1000 }}
    >
<style>{'body { background-color: white; }'}</style>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/bright/256/{z}/{x}/{y}.png?key=fsB39cCVxZgXS53pflUQ"
      />

      {users.map((location, index) => (
        <div key={index}>
          <Marker
          
            position={location.geoLocation.coordinates}
            icon={
              new Icon({
                
                className: 'image-icon',
                iconUrl: `${location.picture}`,              
                iconSize: [35, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>
              <b>{location.fname} {location.lname}</b> <br />{' '}
              <br />
              Software Engineering student<br /> at Makers Academy. <br />{' '}
              <br />
              <a href={"/profile/" + location._id}>View Profile </a>
            </Popup>
          </Marker>
        </div>
      ))}
    </MapContainer>
  );
}

export default Location;
