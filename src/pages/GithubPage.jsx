/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const mainStyles = css`
    display: flex;
    max-height: 100vh;
    overflow: hidden;
    
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


export default function GithubPage() {
  return (
    <div css={mainStyles}>
        <div css={headingStyles}>
            <h1 css={titleStyles}>The Dynamic Web Client for Java</h1>
            <p css={actionTextStyles}>Check us out on Github!</p>
        </div>
    </div>
  )
}
