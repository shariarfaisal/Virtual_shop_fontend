import React,{useState} from 'react'

export const ThemeContext = React.createContext();
const ThemeContextProvider = (props) => {
  const [theme,setTheme] = useState({
    color: {
      dark: '#2E2E2E',
      secondary: '#6C6C6C',
      lightGray: '#B4B4B4',
      light: '#FFFFFF',
      danger: 'rgb(245,0,87)',
      info: '#6EB2FB',
      gold: '#F1AD3D',
      warning: '#EFFC90',
      primary: '#00D3CA',
      success: '#4dca69',
      muted: '#6c757d !important'
    },
      h1: {
        fontSize: '48px',
        fontFamily: 'PlayfairDisplay',
        fontWeight: 'bold',
        color: '#2E2E2E',
        lineBreak: '150%'
      },
      h2:{
        fontSize: '24px',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        color: '#2E2E2E',
        lineBreak: '150%'
      },
      h3: {
        fontSize: '16px',
        fontFamily: 'PlayfairDisplay',
        fontWeight: 'bold',
        color: '#2E2E2E',
        lineBreak: '150%'
      },
      topbar:{
        fontSize: '15px',
        fontFamily: 'PlayfairDisplay',
        fontWeight: 'bold',
        color: '#2E2E2E',
        lineBreak: '240%'
      },
      bodyNormal:{
        fontSize: '15px',
        fontFamily: 'PlayfairDisplay',
        fontWeight: 'bold',
        color: '#6C6C6C',
        lineBreak: '240%'
      },
      bodySmall:{
        fontSize: '12px',
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        color: '#6C6C6C',
        lineBreak: '200%'
      },
  })
  return (
    <ThemeContext.Provider value={{...theme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
