/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react';
import { NavLink } from "react-router-dom";

import CreationBar from '../../components/CreationBar'
import Button from '../../components/Button';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';



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


const contentWrapperStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px 0 30px;
`

const checklistStyles = css`
    background-color: #EAEAEA;
    width: 25%;
    padding: 10px 30px 10px 30px;
`

const buttonContainerStyles = css`
    width: 25%;
`

const listItemsStyles = css`
    background-color: #EAEAEA;
    width: 25%;
    
`

function ChecklistItem(props){

    const itemStyles = css`
        margin: 5px 0 5px 0;
        font-family: 'Lato', sans-serif;    
        font-style: normal;
        font-weight: 300;
        input{
            margin-right: 10px;
        }
    `

    return(
        <div css={itemStyles}>
        <input type='checkbox'/>
        <label>{props.text}</label>
        </div>
    )
}

export default function AddPageTemplates() {
    const [selectedIndex, setSelectedIndex] = useState(1);

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

        <CreationBar active={3}/>
        <p css={creationTextStyles}>Select starting templates and/or configure JAR files and class folders</p>
        <div css={contentWrapperStyles}>
            <div css={checklistStyles}>
                <h2>Templates</h2>
                <form>
                    <ChecklistItem text='DWCJ Application Template'/>
                    <ChecklistItem text='Hello World DWCJ'/>
                    <ChecklistItem text='DWCJ Extended Demos'/>
                    <ChecklistItem text='GridExWidget Demo'/>
                    <ChecklistItem text='Tree Demo'/>
                    <ChecklistItem text='Control Template'/>
                </form>
            </div>
            <div css={buttonContainerStyles}>
                <Button text='Add JAR File'/>
                <Button text='Add Class Folder'/>
                <Button text='Remove Selected Configuration'/>
            </div>
            <div css={listItemsStyles}>
                <List >
                    <ListItem disablePadding>
                        <ListItemButton selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
                            <ListItemText>
                            C:/bbx/plugins/DWCJ/lib/*
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
                            <ListItemText>
                            C:/example/target/classes
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}>
                            <ListItemText>
                            C:/example2/target/classes
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </div>

        </div>


        <div css={buttonStyles}>
        <NavLink to='../add/default' css={css`text-decoration: none;`}>
            <Button text='Continue' textColor='black' type='regular' weight='bold' />
        </NavLink>
        <NavLink to='../add/location' css={css`text-decoration: none;`}>
            <Button text='Go Back' textColor='#297BD2' type='cancel' weight='bold'/>
        </NavLink>
        <NavLink to='/add' css={css`text-decoration: none;`}>
            <Button text='Cancel' textColor='#297BD2' type='cancel' weight='bold'/>
        </NavLink>
        </div>
    </div>
  )
}
