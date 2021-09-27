import {ThemeProvider, CssBaseline, Container} from '@mui/material'
import theme from './theme'
import TweetList from "./components/TweetList";
import Header from "./components/Header";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container disableGutters maxWidth="md">
                <Header/>
                <TweetList/>
            </Container>
        </ThemeProvider>
    );
}

export default App;
