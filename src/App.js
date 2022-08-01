import './App.css';
import { Searcher } from './components/Searcher.jsx'
import Container from '@mui/material/Container';

function App() {
  return (
    <Container sx={{
      background: 'whitesmoke',
      marginTop: '40px',
      width: '80vw',
      height: '700px',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Searcher />

    </Container>
  );
}

export default App;
