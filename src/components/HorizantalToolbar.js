import React from 'react';
import IconButton from 'material-ui/IconButton';
import ViewModule from 'material-ui-icons/ViewModule';
import Sort from 'material-ui-icons/Sort';
import Settings from 'material-ui-icons/Settings';
import MoreVert from 'material-ui-icons/MoreVert';

const HorizantalToolbar = () =>
        <div style={{justifyContent: 'space-between'}}>
            <IconButton aria-label="View">
                <ViewModule />
            </IconButton>
            <IconButton aria-label="Sort">
                <Sort />
            </IconButton>
            <IconButton aria-label="Settings">
                <Settings />
            </IconButton>
            <IconButton aria-label="More">
                <MoreVert />
            </IconButton>
        </div>

export default HorizantalToolbar;
