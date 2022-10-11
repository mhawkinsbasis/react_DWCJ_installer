/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Routes, Route } from "react-router-dom";

import Homepage from '../pages/Homepage'
import GithubPage from '../pages/GithubPage';
import AddPage from '../pages/creation/AddPageHome';
import AddPageLocation from '../pages/creation/AddPageLocation';
import EditPage from '../pages/EditPage';
import DocumentationPage from '../pages/DocumentationPage';
import AddPageTemplates from '../pages/creation/AddPageTemplates';
import AddPageDefault from '../pages/creation/AddPageDefault';

const mainStyles = css`
    height: 100vh;
    background-color: #23282C;
    width: calc(100vw - 150px);
    
`


export default function PageDisplay() {
  return (
      <div css={mainStyles}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/add' element={<AddPage />} />
          <Route path='/add/location' element={<AddPageLocation />} />
          <Route path='/add/templates' element={<AddPageTemplates />} />
          <Route path='/add/default' element={<AddPageDefault />} />
          <Route path='/edit' element={<EditPage />} />
          <Route path='/documentation' element={<DocumentationPage />} />
          <Route path='/github' element={<GithubPage />} />
        </Routes>
      </div>
  )
}
