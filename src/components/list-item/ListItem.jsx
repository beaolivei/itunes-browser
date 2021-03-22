import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import {FavoritesContext} from "../../providers/Favorites"
import { ListItem } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox';

const StyledImage = styled.img`
    border-radius: 10px;
    width: 60px;
    margin-right: 10px;
`

const StyledTypography = styled(Typography)`
@media(max-width: 700px){
  font-size: 18px;
  max-width: 200px;
}
`
export function Item(props){
  const [checked, setChecked] = React.useState([1])

  const {favorites, setFavorites} = useContext(FavoritesContext);

  const handleToggle = (value, index) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    const newFavs = [...favorites]; 
    newFavs[index] = value;
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked)
    setFavorites(newFavs);
    
  };
    return(
        <ListItem key={props.key} value ={props.value} id={props.id}>
        <ListItemAvatar>
          <StyledImage
            alt={`This is the cover for the Song ${props.name}`}
            src={props.src}
          />
        </ListItemAvatar>
        <Box display="block" maxWidth="400px">
            <StyledTypography variant="h5"> {props.song}</StyledTypography>
            <StyledTypography variant="body1"> {props.artist}</StyledTypography>
        </Box>
        <ListItemSecondaryAction>
          <Box display="flex">
            <a href={props.href}>
              <Typography color="textSecondary" variant="body1">
                {`Buy for ${props.price}`}
              </Typography>
            </a>
            <Checkbox
                edge="end"
                onChange={handleToggle(props.name, props.index)}
                checked={checked.indexOf(props.name) !== -1}
                inputProps={{ 'aria-labelledby': props.id }}
              />
          </Box>
        </ListItemSecondaryAction>
      </ListItem>
    )

}