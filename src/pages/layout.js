import React from "react"
import {createGlobalStyle,ThemeProvider} from "styled-components"
import Theme from "../themes/theme"

const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0
}
body,html{
    font-family:${props => props.theme.fonts.main};
    height:100%;
    background-color:${props => props.theme.colors.light1};
}

`
 const Layout =({element}) => {
    <ThemeProvider theme={Theme}>
        <GlobalStyles/>
{element()}
    </ThemeProvider>
}

export default Layout