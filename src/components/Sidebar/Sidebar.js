import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Sidebar = (props) => {
    const {sidebar} = props;
    
    return (
        <div>
            <h3>sidebar</h3>
                <p>Selected Items: {sidebar.length}</p>
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
        </div>
    );
};

export default Sidebar;