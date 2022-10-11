/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const mainBarStyles = css`
    width: 70vw;
    height: 90px;
    background-color: #EAEAEA;
    border-radius: 5px;
    justify-self: center;
    align-self: center;
    margin-top: 30px;

    display: flex;
    align-items: center;
    overflow: hidden;

`




function BarItem(props){


    let barItemStyles = css`
        display: flex;
        justify-content: space-between;
        width: 25%;
        margin: 0 25px 0 25px;
    `

    let circleStyles = css`
            display: flex;
            border-radius: 50px;
            width: 20%;
            aspect-ratio: 1/1;
            background-color: ${props.color};
            align-items: center;
            justify-content: center;
            
            color: ${props.textColor};
            font-size: 25px;
            
            `

    let textStyles = css`
            font-family: 'Lato', sans-serif;    
            font-style: normal;
            font-weight: bold;
            color: ${props.active ? props.color : props.textColor};
            align-self: center !important;
            `
    
    
    let dashStyles = css`
        width: 56px;
        border-radius: 10px;
        height: 6px;
        background-color: ${props.color};
        align-self: center;
    `


    if(props.active === 'current'){
        circleStyles = css`
            display: flex;
            border-radius: 50px;
            width: 20%;
            aspect-ratio: 1/1;
            background-color: #2ABF9F;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 25px;
        `

        textStyles = css`
            font-family: 'Lato', sans-serif;    
            font-style: normal;
            font-weight: bold;
            color: #2ABF9F;
            align-self: center;
        `

        dashStyles = css`
            width: 56px;
            border-radius: 10px;
            height: 6px;
            background-color: #2ABF9F;
            align-self: center;
        `
    }
    else if(props.active === 'completed'){
        circleStyles = css`
        display: flex;
        border-radius: 50px;
        width: 20%;
        aspect-ratio: 1/1;
        background-color: #B3B3B3;
        align-items: center;
        justify-content: center;
        color: black;
        font-size: 25px;
    `

    textStyles = css`
        font-family: 'Lato', sans-serif;    
        font-style: normal;
        font-weight: bold;
        color: black;
        align-self: center;
    `

    dashStyles = css`
        width: 56px;
        border-radius: 10px;
        height: 6px;
        background-color: #B3B3B3;
        align-self: center;
    `
    }
    else{
        circleStyles = css`
        display: flex;
        border-radius: 50px;
        width: 20%;
        aspect-ratio: 1/1;
        background-color: white;
        align-items: center;
        justify-content: center;
        color: black;
        font-size: 25px;
    `

    textStyles = css`
        font-family: 'Lato', sans-serif;    
        font-style: normal;
        font-weight: bold;
        color: black;
        align-self: center;
    `

    dashStyles = css`
        width: 56px;
        border-radius: 10px;
        height: 6px;
        background-color: #B3B3B3;
        align-self: center;
    `
    }


    return(
        <div css={barItemStyles}>
            <div css={circleStyles}> {props.number} </div>
            <p css={textStyles}> {props.text} </p>
            <div css={dashStyles}></div>
        </div>
    )
}


export default function CreationBar(props) {
    return (
    <div css={mainBarStyles}>
        <BarItem  text='Project Name' number='1' active={props.active === 1 ? 'current' : props.active > 1 ? 'completed' : 'todo'}/>
        <BarItem  text='File Location' number='2' active={props.active === 2 ? 'current' : props.active > 2 ? 'completed' : 'todo'}/>
        <BarItem  text='Templates and Files' number='3' active={props.active === 3 ? 'current' : props.active > 3 ? 'completed' : 'todo'}/>
        <BarItem  text='Default Class' number='4' active={props.active === 4 ? 'current' : props.active > 4 ? 'completed' : 'todo'}/>
    </div>
  )
}

