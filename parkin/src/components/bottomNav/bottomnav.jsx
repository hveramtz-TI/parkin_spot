import React from 'react';
import './bottomnav.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Bottomnav({ valorButtom, setValorButtom }) {
  return (
    <div className='bottomnav'>
        <BottomNavigation
          showLabels
          value={valorButtom}
          onChange={(event, newValue) => {
            setValorButtom(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
    </div>
  );
}

export default Bottomnav;