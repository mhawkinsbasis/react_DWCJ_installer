/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PageDisplay from './components/PageDisplay';
import Sidebar from './components/Sidebar';


const appStyles = css`
  display: flex;
`

function App() {
  return (
    <div css={appStyles}>
      <Sidebar />
      <PageDisplay />
    </div>
  );
}

export default App;
