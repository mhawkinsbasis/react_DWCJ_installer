/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { NavLink } from "react-router-dom";


import logo from "../images/logo.png"

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';

const mainStyles = css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #15191C;
    width: 150px;
    align-items: center;
`

const logoStyles = css`
    height: 80px;
    width: 80px;
    margin-top: 40px;
    margin-bottom: 175px;
    box-shadow: 0px 4px 4px -1px rgba(255, 255, 255, 0.25);

`

const iconContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 35vh;
`

const iconStyles = css`
    color: white;
    width: 35px; 
    height: 35px;
    padding: 5px;
    
`

const linkStyles = css`
   transition: 0.3s;
   &.active{
       background-color: #2ABF9F;
   } 
    &:hover{
        background-color: #2ABF9F;
    }
`


export default function Sidebar() {
  return (
    <div css={mainStyles}>
        <img src={logo} css={logoStyles}/>
        <nav css={iconContainer}>
            <NavLink end to='/' css={linkStyles}>
                <RocketLaunchIcon css={iconStyles}/>
            </NavLink>
            <NavLink to='/add' css={linkStyles}>
                <AddIcon css={iconStyles}/>
            </NavLink>
            <NavLink to='/edit' css={linkStyles}>
                <CreateIcon css={iconStyles}/>
            </NavLink>
            <NavLink to='/documentation' css={linkStyles}>
                <ArticleIcon css={iconStyles}/>
            </NavLink>
            <NavLink to='github' css={linkStyles}>
                <GitHubIcon css={iconStyles}/>
            </NavLink>
        </nav>
    </div>
  )
}
