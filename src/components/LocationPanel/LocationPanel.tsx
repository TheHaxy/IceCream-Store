import React from 'react';

import LocationPanelClasses from "./LocationPanel.module.scss"
import {useHistory} from "react-router-dom";

const LocationPanel = ({location}: {location: string}) => {
    const history = useHistory();
    return (
        <div className={LocationPanelClasses.location_panel}>
            <p onClick={() => history.goBack()} className={LocationPanelClasses.location_panel__last_location}>Main page</p>
            <p style={{opacity: 0.5}}>/</p>
            <p>{location}</p>
        </div>
    );
};

export default LocationPanel;