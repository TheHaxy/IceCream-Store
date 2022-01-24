import React from 'react';

import LocationPanelClasses from "./LocationPanel.module.scss"
import {Link} from "react-router-dom";

const LocationPanel = ({location}: {location: string}) => {
    return (
        <div className={LocationPanelClasses.location_panel}>
            <Link to="/main-page" className={LocationPanelClasses.location_panel__last_location}>Main page</Link>
            <p style={{opacity: 0.5}}>/</p>
            <p>{location}</p>
        </div>
    );
};

export default LocationPanel;