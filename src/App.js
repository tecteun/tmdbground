import React, { Fragment, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Search} from './components/Search'
import { Results } from './components/Results'
import { Details } from './components/Details'
import { Route } from 'react-router-dom'
function App() {
  const [query, setQuery] = useState('')
  const [listItems, setListItems] = useState([]);
  const [page, setPage] = useState(1);

  return (
   
    <Fragment>
      <GlobalStyle />
      <Main>
        <Route render={(props) => <Search {...props} setValue={setQuery} />} />
        <Route exact path="/" render={(props) => <Results {...props} 
               listItems={listItems}
               setListItems={setListItems} 
               page={page}
               setPage={setPage}
               queryString={query} />} />
        <Route path="/id/:id/:trailer?" component={Details}/>
      </Main>
    </Fragment>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
  }
  h1 {
    margin: 0;
  }
  a, a:hover {
    color: black;
    font-weight: bolder;
  }
`

const Main = styled.main`
  width: 100%;
  max-width: 1365px;
  margin: 0 auto;
`
