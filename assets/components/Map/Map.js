import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.scss";

const Map = (props) => {
  return props.longitude && props.latitude ? (
    <MapContainer
      center={[props.longitude, props.latitude]}
      zoom={16}
      scrollWheelZoom={false}
      style={{ width: "90%", height: "50vh", margin: "auto" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.longitude, props.latitude]}>
        <Popup closeButton={false}>
          <a href={props?.url?.en || props?.url?.fi || props?.url?.sv} target="_blank">
            <h3>{props?.name?.en || props?.name?.fi || props?.name?.sv}</h3>
          </a>
          <br />
          <small>
            Tel: {props?.telephone?.en || props?.telephone?.fi || props?.telephone?.sv}
          </small>
          <p>
            <br />
            {props?.street_address?.en ||
              props?.street_address?.fi ||
              props?.street_address?.sv}
            <br />
            {props?.postal_code} {props?.city?.en || props?.city?.fi || props?.city?.sv}
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  ) : (
    <div className="nomap">
      <p>No address provided.</p>
      <p>Either the event is remote or address is not provided by the event organizer.</p>
      <p>Please contact the event organizer for further information.</p>
    </div>
  );
};

export default Map;
