import React from 'react';
import NomeMensagem from './Components/NomeMensagem/NomeMensagem';
import './App.css';
import styled from 'styled-components';

const CssDoContainer = styled.div`
display: flex;
margin: auto;
align-items: flex-end;
width: 500px;
height: 99.5vh;
border: solid 1px black;
background-color: rgb(229,221,213);
`

const CssDoItem = styled.div`
`

function App() {
  return (
    <div className="App">
       <CssDoContainer>
         <CssDoItem>
           <NomeMensagem />
         </CssDoItem>
          
        </CssDoContainer>  

    </div>
  );
}

export default App;
