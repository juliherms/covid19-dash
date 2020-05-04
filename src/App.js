import React from 'react';
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalStyle from './commons/styles/global-style'
import Main from './containers/Main'

/**
 * Funcao principal
 * injectFirst - força o css do material-ui
 */
function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline/>
      <GlobalStyle/>
      <Main />
    </StylesProvider>
  );
}

export default App;
