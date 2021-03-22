import React, {useState, useContext} from 'react';
import styled from 'styled-components'
import {FavoritesContext} from '../../providers/Favorites'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Popper from '@material-ui/core/Popper';

export function TopBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const {favorites} = useContext(FavoritesContext);

  const StyledPopper = styled(Popper)`
  background-color: white;
  color: black;
  padding: 20px
  `
  
  const onClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <div>
      <AppBar position="static">
        <Toolbar color="primary">
            <Box display="flex" width="100%" alignItems="center" justifyContent="center">
               <Typography variant="h6" color="textPrimary"> Itunes Browser</Typography>
            </Box>
              <Box display="flex" width="60%" alignItems="center" justifyContent="center">
                <IconButton onClick={onClick} color="secondary">
                  <Icon>grade</Icon>
                </IconButton>
              </Box>
              <StyledPopper id={id} open={open} anchorEl={anchorEl}>
                 <Box>
                   {favorites.map(i => { return (
                     <p> {i}</p>
                   )})}
                 </Box>
             </StyledPopper>
        </Toolbar>
      </AppBar>
    </div>
  );
}