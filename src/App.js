import './App.css';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';

import { Searcher } from './components/Searcher.jsx'
import { getIngUsers } from './services';
import { UserCard } from './components/containers/UserCard';


function App() {
  const [inputUser, setInputuser] = useState('octocat')

  const [initialRender, setInitialRender] = useState([])

  const callApi = async (userRender) => {
    const response  = await getIngUsers(userRender) 
    setInitialRender(response)
  }

  useEffect(( ) => {
    callApi(inputUser)
  }, [inputUser])


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
      {
         console.log('from app',initialRender)
      }
      <Searcher inputUser={inputUser} setInputuser={setInputuser}/>  
      <UserCard initialRender={initialRender}/>
      </Container>
  );
}

export default App;
