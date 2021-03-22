import React from 'react';
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const StyledDiv = styled.div`
    background-color: ${props => props.backgroundColor}
  `
  return (
    <StyledDiv
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography color="textPrimary">{children}</Typography>
        </Box>
      )}
    </StyledDiv>
  );
}


export function CenteredTabs(props) {
  const theme = useTheme()
  const [value, setValue] = React.useState(0);
  console.log("theme", theme.palette.primary.main)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledTab = styled(Tabs)`
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.text.primary}
  `
  return (
    <Box backgroundColor={theme.palette.primary.main}>
      <StyledTab
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        centered
      >
        <Tab label="Top Albums" />
        <Tab label="Top Songs" />
      </StyledTab>
      <TabPanel value={value} index={0} backgroundColor={theme.palette.primary.main}>
        {props.firstTab}
      </TabPanel>
      <TabPanel value={value} index={1} backgroundColor={theme.palette.primary.main}>
        {props.secondTab}
      </TabPanel>
    </Box>
  );
}

