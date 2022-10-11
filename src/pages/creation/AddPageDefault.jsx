/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { NavLink } from "react-router-dom";
import { useState } from 'react';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


import CreationBar from '../../components/CreationBar'
import Button from '../../components/Button'

const mainStyles = css`
    display: flex;
    max-height: 100vh;
    overflow: hidden;
    flex-direction: column;
`

const headingStyles = css`
    margin-left: 40px;
`

const titleStyles = css`
    font-family: 'Lato', sans-serif;    
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 125%;
    color: #FFFFFF;
`

const actionTextStyles = css`
    font-family: 'Lato', sans-serif;    
    font-style: normal;
    font-weight: 100;
    font-size: 30px;
    line-height: 125%;
    color: #FFFFFF;
`

const creationTextStyles = css`
    margin-top: 10vh;
    align-self: center;
    font-family: 'Lato', sans-serif;    
    font-style: normal;
    font-weight: 100;
    font-size: 30px;
    line-height: 125%;
    color: #FFFFFF;
`

const inputStyles = css`
    width: 50vw;
    height: 30px;
    align-self: center;
`

const buttonStyles = css`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    align-self: flex-end;
    margin: 0 50px 30px 0;
`


const listItemsStyles = css`
    background-color: #EAEAEA;
    width: 50%;
    align-self: center;
    
`



export default function AddPageDefault() {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        if(selectedIndex != index){
            setSelectedIndex(index);
        }
        else{
            setSelectedIndex(0);
        }
    };


  return (
    <div css={mainStyles}>
        <div css={headingStyles}>
            <h1 css={titleStyles}>The Dynamic Web Client for Java</h1>
            <p css={actionTextStyles}>Create a New DWCJ Application</p>
        </div>
        <CreationBar active={4}/>
        <p css={creationTextStyles}>(Optional) Select the startup file for your application</p>
        

        <div css={listItemsStyles}>
                <List >
                    <ListItem disablePadding>
                        <ListItemButton selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
                            <ListItemText>
                            Hello World DWCJ
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
                            <ListItemText>
                            Tree Demo
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}>
                            <ListItemText>
                            Fossy Bear
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}>
                            <ListItemText>
                            Extended Demo
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}>
                            <ListItemText>
                            Control Demo
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </div>



        <div css={buttonStyles}>
            <Button text='Launch App' textColor='black' type='regular' weight='bold' />
            <NavLink to='../add/templates' css={css`text-decoration: none;`}>
                <Button text='Go Back' textColor='#297BD2' type='cancel' weight='bold'/>
            </NavLink>
            <NavLink to='/add' css={css`text-decoration: none;`}>
                <Button text='Cancel' textColor='#297BD2' type='cancel' weight='bold'/>
            </NavLink>
        </div>
    </div>
  )
}
