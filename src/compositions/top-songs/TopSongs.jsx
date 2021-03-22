import React, {useState, useEffect} from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import {Item} from '../../components/list-item/ListItem'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {GroupedSearchInput} from '../../components/grouped-search/GroupedSearchInput'

export function TopSongs(){
    const [searchItem, setSearchItem] = useState('')
    const[mySongs, setMySongs]= useState([])

    useEffect(() => {
        fetch('https://itunes.apple.com/us/rss/topsongs/limit=100/json')
      .then(results => results.json())
      .then(data => {
        const {entry} = data.feed;
        setMySongs(entry)
      });
  }, []);

    const onChange = (event, value) => {
        setSearchItem(value)
    }
    const onClearSearch = () => {
        setSearchItem('')
    }
    console.log({mySongs})
    return(
        <Box minHeight="500px">
          <Container>
              <Box display="flex" justifyContent="left">
              <GroupedSearchInput inputLabel="Search on Song List" data={mySongs} onChange={onChange} />
              {searchItem !== "" && 
              <Box marginLeft={2}>
               <Button onClick={onClearSearch} variant="contained"> Clear Search</Button>
              </Box>
              }
              </Box>
            {searchItem === '' ?
                <List>
                    {!mySongs ? 'Loading...' : mySongs.map((i, index)=> {
                    const artist = i["im:artist"].label;
                    const song = i["im:name"].label;
                    const src = i["im:image"][2].label;
                    const price = i["im:price"].label;
                    const href = i["link"][0].attributes.href;
                    return(
                        <Item 
                        name={i.title.label} 
                        song={song} 
                        artist={artist} 
                        key={index} 
                        src={src} 
                        price={price}
                        href={href}
                        />
                        )
                        })}
                </List> : 
                <List>
                <Item 
                name={searchItem.title.label} 
                artist={searchItem["im:artist"].label} 
                song={searchItem["im:name"].label}
                src={searchItem["im:image"][2].label} 
                price={searchItem["im:price"].label}
                href={searchItem["link"][0].attributes.href}
                />
                </List>}

        </Container>
        </Box>
    )
}