import {ThemeProvider, CssBaseline} from '@mui/material'
import theme from './theme'
import TweetList from "./components/TweetList";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="App">
                <TweetList/>
            </div>
        </ThemeProvider>
    );
}

export default App;
