import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.scss";

const Map = (props) => {
  return props.longitude && props.latitude ? (
    <MapContainer
      center={[props.longitude, props.latitude]}
      zoom={16}
      scrollWheelZoom={true}
      style={{ width: "50vw", height: "50vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.longitude, props.latitude]}>
        <Popup>
          <a href={props?.url?.en || props?.url?.fi || props?.url?.sv} target="_blank">
            <h3>{props?.name?.en || props?.name?.fi || props?.name?.sv}</h3>
          </a>
          <br />
          <small>
            Tel: {props?.telephone?.en || props?.telephone?.fi || props?.telephone?.sv}
          </small>
          <p>
            <br />
            {props.street_address.en ||
              props.street_address.fi ||
              props.street_address.sv}
            <br />
            {props.postal_code} {props.city.en || props.city.fi || props.city.sv}
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  ) : (
    <p>Loading map</p>
  );
};

export default Map;
