import { ThemeProvider } from '@mui/material/styles';
import CardList from './components/CardList';
import { theme } from './Theme/theme'

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CardList/>
      </ThemeProvider>
    </div>
  );
}

export default App;
