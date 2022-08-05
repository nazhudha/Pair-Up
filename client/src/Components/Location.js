import React, { Component } from 'react';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { Icon } from 'leaflet';

import { motion } from 'framer-motion';

// function GetIcon(_iconSize) {
//   return L.icon({
//     iconUrl: require('../Static/icons/marker.png'),
//     iconSize: [_iconSize],
//   });
// }

const users = [
  {
    name: 'Saif',
    position: [51.5, 0.12],
    profile: 'https://ca.slack-edge.com/T03ALA7H4-U03BHQMPR8B-ad702ae06c5b-512',
  },
  {
    name: 'Naz',
    position: [51.5074, 0.1272],
    profile: 'https://ca.slack-edge.com/T03ALA7H4-U03BHQNU09Z-4cbaab60cec2-512',
  },
  {
    name: 'Claire',
    position: [51.4926, 0.1188],
    profile: 'https://ca.slack-edge.com/T03ALA7H4-U03BWD2M7G9-dc8487d8ca75-512',
  },
  {
    name: 'Chris',
    position: [51.4874, 0.0865],
    profile: 'https://ca.slack-edge.com/T03ALA7H4-U03BL516ULC-a8eb365e0c4c-512',
  },
  {
    name: 'Paddy',
    position: [51.4975, 0.1357],
    profile: 'https://ca.slack-edge.com/T03ALA7H4-U03BHQMHC75-73ac8096e0bb-512',
  },
];

// function geoConvert() {
//   const provider = new OpenStreetMapProvider();
//   users.forEach(async (element, index) => {
//     console.log(element.position, '!!!');
//     users[index].position = await provider.search(element.position);
//     console.log(element.position, '!!');
//   });
// }

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
  const position = [51.5, 0.12];
  //console.log(users[0].name);
  return (
    <MapContainer
      className="location"
      center={position}
      zoom={14}
      style={{ height: 500, width: 1000 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=fsB39cCVxZgXS53pflUQ"
        //url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=fsB39cCVxZgXS53pflUQ"
        //url="https://api.maptiler.com/maps/voyager/256/{z}/{x}/{y}.png?key=fsB39cCVxZgXS53pflUQ"
        url="https://api.maptiler.com/maps/bright/256/{z}/{x}/{y}.png?key=fsB39cCVxZgXS53pflUQ"
      />

      {users.map((location, index) => (
        <div key={index}>
          <Marker
            position={location.position}
            // icon={
            //   new Icon({
            //     iconUrl: markerIconPng,
            //     iconSize: [25, 41],
            //     iconAnchor: [12, 41],
            //   })
            // }
            icon={
              new Icon({
                className: 'image-icon',
                iconUrl: location.profile,
                iconSize: [35, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>
              <b>{location.name}</b> <br />{' '}
              <a href="/profile">Software Engineer </a>
            </Popup>
          </Marker>
        </div>
      ))}
    </MapContainer>
  );
}

export default Location;
