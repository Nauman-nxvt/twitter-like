import { createTheme }  from '@mui/material'
const theme = createTheme({
    typography: {
        fontFamily: ['TwitterChirp', '-apple-system', 'system-ui', "Segoe UI", 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(',')
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    overflow: 'hidden'
                }
            }
        }
    }
})
export default theme