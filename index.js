import React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import AutoPublicist from './AutoPublicist'
import './fonts/DejaVuSansMono.css'
import './fonts/DejaVuSansMono.woff'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "DejaVu Sans Mono", "Roboto Mono", monospace;
  }
  
  html, body, #pitch {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`

render(
  <React.Fragment>
    <GlobalStyle/>
    <AutoPublicist/>
  </React.Fragment>
  , document.getElementById('pitch')
)
