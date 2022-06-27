import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import GlobalStyle from './config/GlobalStyles'
import AppRoutes from './routes/AppRoutes'

// const temas = {
//   dark: {
//     color: '#f5f5f5',
//     backgroundColor: '#333',
//     primary: '#19def0',
//   },

//   light: {
//     color: '#333',
//     backgroundColor: '#f5f5f5',
//     primary: '#6747b6e9',
//   },
// }
const themeProjeto = createTheme({
  palette: {
    primary: {
      main: '#373B65',
    },
    secondary: {
      main: '#F89920',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={themeProjeto}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
