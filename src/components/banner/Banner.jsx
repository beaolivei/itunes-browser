import React from 'react';
import styled from 'styled-components'
import Box from '@material-ui/core/Box';

const StyledBanner = styled(Box)`
  background-image: url(${props => props.image});
  height: 30vw;
  background-repeat: round;
  display: flex;
  align-items: center;
  justify-content: center;
`;



export function Banner(props) {
    return(
        <StyledBanner image={props.backgroundImage}/>

    )

}