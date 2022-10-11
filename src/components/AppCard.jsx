/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import logo from "../images/logo.png"
import Button from './Button'

const mainStyles = css`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 325px;
    background: #424C55;
    border-radius: 5px;
    margin: 15px;
`

const headingStyles = css`
    display: flex;
`

const logoStyles = css`
    width: 70px;
    height: 70px;
    margin: 10px 0 0 10px;
`

const titleStyles = css`
    margin-left: 15px;
    color: white;
    font-family: 'Lato', sans-serif;    
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
`

const descriptionContainerStyles = css`
margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const descriptionTextStyles = css`
    color: white;
    font-family: 'Lato', sans-serif;    
    font-style: normal;
    font-weight: 100;
    font-size: 16px;
    margin: 10px;
`

const dividerStyles = css`
    height: 0px;
    border: 1px solid #FFFFFF;
    margin: 0 10px 0 10px;
    margin-top: auto;
`

const buttonStyles = css`
    width: 106px;
    height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    background: #2ABF9F;
    border-radius: 4px;
    align-self: center;
    margin: 20px 0 20px 0;
    color: white;
    font-family: 'Lato', sans-serif;    
    font-style: normal;
    font-weight: 300;
    transition: 0.3s;
&:hover{
        background-color: #22967d;
    }
`

export default function AppCard(props) {
  return (
    <div css={mainStyles}>
        <div css={headingStyles}>
            <img src={logo} css={logoStyles}/>
            <p css={titleStyles}>{props.title}</p>
        </div>
        <div css={descriptionContainerStyles}>
            <p css={descriptionTextStyles}>Date Created: <span>{props.date}</span></p>
            <p css={descriptionTextStyles}>File Location: <span>{props.location}</span></p>
        </div>
        <div css={dividerStyles}></div>
        <Button text={props.buttonText} type='regular' textColor='white' weight='300'/>
    </div>
  )
}
