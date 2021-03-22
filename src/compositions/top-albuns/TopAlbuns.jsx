import React, {useState, useEffect, useContext} from 'react';
import {FavoritesContext} from "../../providers/Favorites"
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import {Item} from '../../components/list-item/ListItem'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {GroupedSearchInput} from '../../components/grouped-search/GroupedSearchInput'

export function TopAlbuns(){
    const [searchItem, setSearchItem] = useState('')
    const[myAlbuns, setmyAlbuns]= useState([])
    const {favorites, setFavorites} = useContext(FavoritesContext);

    useEffect(() => {
        fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
      .then(results => results.json())
      .then(data => {
        const {entry} = data.feed;
        setmyAlbuns(entry)
      });
  }, []);
  console.log({myAlbuns})
    const onChange = (event, value) => {
        setSearchItem(value)
    }
    const onClearSearch = () => {
        setSearchItem('')
    }

    return(
        <Box minHeight="500px">
          <Container>
              <Box display="flex" justifyContent="left">
              <GroupedSearchInput inputLabel="Search on Albums List" data={myAlbuns} onChange={onChange} />
              {searchItem !== "" && 
              <Box marginLeft={2}>
               <Button onClick={onClearSearch} variant="contained"> Clear Search</Button>
              </Box>
              }
              </Box>
            {searchItem === '' ?
                <List>
                    {!myAlbuns ? 'Loading...' : myAlbuns.map((i, index)=> {
                    const artist = i["im:artist"].label;
                    const song = i["im:name"].label;
                    const src = i["im:image"][2].label;
                    const price = i["im:price"].label;
                    const href = i["link"].attributes.href
                    const id = i["id"]["attributes"]["im:id"]
                    return(
                        <Item 
                        name={i.title.label} 
                        song={song} 
                        artist={artist} 
                        key={index} 
                        src={src} 
                        price={price}
                        href={href}
                        id={id}
                        value={song}
                        index={index}
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
                />
                </List>}

        </Container>
        </Box>
    )
}