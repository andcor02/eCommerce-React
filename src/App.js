import React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  Stack,
  theme,
} from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import NavigationBar from './components/Nav/NavigationBar'
import Home from './pages/Home'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App
