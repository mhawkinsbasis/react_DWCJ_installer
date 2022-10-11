/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useRef } from 'react';
import { NavLink } from "react-router-dom";


import CreationBar from '../../components/CreationBar'
import Button from '../../components/Button';


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


export default function AddPageLocation() {

    const inputFile = useRef(null) 


    return (
    <div css={mainStyles}>
        <div css={headingStyles}>
                <h1 css={titleStyles}>The Dynamic Web Client for Java</h1>
                <p css={actionTextStyles}>Create a New DWCJ Application</p>
        </div>
            <CreationBar active={2}/>
        <p css={creationTextStyles}>Please select a file location for your new DWCJ Application</p>
        <input css={inputStyles} placeholder='Select File Location'></input>
        <div css={buttonStyles}>
        <NavLink to='../add/templates' css={css`text-decoration: none;`}>
            <Button text='Continue' textColor='black' type='regular' weight='bold' />
        </NavLink>
        <NavLink to='/add' css={css`text-decoration: none;`}>
            <Button text='Go Back' textColor='#297BD2' type='cancel' weight='bold'/>
        </NavLink>
        <NavLink to='/add' css={css`text-decoration: none;`}>
            <Button text='Cancel' textColor='#297BD2' type='cancel' weight='bold'/>
        </NavLink>
        </div>
    </div>
    )
}
