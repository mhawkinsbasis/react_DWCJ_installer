/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import AppCard from './AppCard'

const mainStyles = css`
    display: inline-flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: flex-start; 
    width: 80vw;
    max-height: 75%;
    overflow-wrap: break-word;
    overflow-y: scroll;
    background-color: #15191C;
    padding: 15px 0 0 15px;
    border-radius: 9px;
    border: solid #3a3a3a 1px;
    element {
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll; 
    }

    &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
    }
`
export default function CardContainer(props) {
  return (
    <div css={mainStyles}>
        <AppCard title={"Test Heading"} date={"01/01/2022"} location={"C:/test_app/hello_world"} buttonText={props.mode === 'edit' ? 'Edit' : 'Launch'}/>
        <AppCard title={"Test Heading"} date={"01/01/2022"} location={"C:/test_app/hello_world"} buttonText={props.mode === 'edit' ? 'Edit' : 'Launch'}/>
        <AppCard title={"Test Heading"} date={"01/01/2022"} location={"C:/test_app/hello_world"} buttonText={props.mode === 'edit' ? 'Edit' : 'Launch'}/>
        <AppCard title={"Test Heading"} date={"01/01/2022"} location={"C:/test_app/hello_world"} buttonText={props.mode === 'edit' ? 'Edit' : 'Launch'}/>
        <AppCard title={"Test Heading"} date={"01/01/2022"} location={"C:/test_app/hello_world"} buttonText={props.mode === 'edit' ? 'Edit' : 'Launch'}/>
        <AppCard title={"Test Heading"} date={"01/01/2022"} location={"C:/test_app/hello_world"} buttonText={props.mode === 'edit' ? 'Edit' : 'Launch'}/>
        <AppCard title={"Test Heading"} date={"01/01/2022"} location={"C:/test_app/hello_world"} buttonText={props.mode === 'edit' ? 'Edit' : 'Launch'}/>
        <AppCard title={"Test Heading"} date={"01/01/2022"} location={"C:/test_app/hello_world"} buttonText={props.mode === 'edit' ? 'Edit' : 'Launch'}/>
        <AppCard title={"Test Heading"} date={"01/01/2022"} location={"C:/test_app/hello_world"} buttonText={props.mode === 'edit' ? 'Edit' : 'Launch'}/>
        <AppCard title={"Test Heading"} date={"01/01/2022"} location={"C:/test_app/hello_world"} buttonText={props.mode === 'edit' ? 'Edit' : 'Launch'}/>
        <AppCard title={"Test Heading"} date={"01/01/2022"} location={"C:/test_app/hello_world"} buttonText={props.mode === 'edit' ? 'Edit' : 'Launch'}/>
    </div>
  )
}
