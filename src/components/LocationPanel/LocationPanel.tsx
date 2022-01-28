import React from "react";

import { Link } from "react-router-dom";

import LocationPanelClasses from "./LocationPanel.module.scss";

const LocationPanel = ({ location }: { location: string }) => {
  return (
    <div className={LocationPanelClasses.location_panel}>
      <Link
        to="/main-page"
        className={LocationPanelClasses.location_panel__last_location}
      >
        Main page
      </Link>
      <p className={LocationPanelClasses.location_panel__slash}>/</p>
      <p>{location}</p>
    </div>
  );
};

export default LocationPanel;
