/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function Button(props) {
    
    const buttonStyles = css`
        min-width: 106px;
        min-height: 25px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px;
        background: ${props.type === 'regular' ? '#2ABF9F' : '#DCE5EF'};
        border-radius: 4px;
        align-self: center;
        margin: 20px 20px 20px 0;
        color: ${props.textColor};
        font-family: 'Lato', sans-serif;    
        font-style: normal;
        font-weight: ${props.weight};
        transition: 0.3s;
    &:hover{
            background-color: ${props.type === 'regular' ? '#22967d' : '#b0b8c2'};
        }
    `
  
    return (
    <div css={buttonStyles}>{props.text}</div>
  )
}
