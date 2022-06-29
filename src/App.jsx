import React, { Suspense } from 'react'
import { Route, Switch } from 'wouter'
import { Logo } from "./components/Logo/Logo"
const Home = React.lazy( () => import('./pages/Home/Home'))
const Results = React.lazy( () => import('./pages/Results/Results'))
const Details = React.lazy( () => import('./pages/Details/Details'))

import { GifsContextProvider } from './context/GifsContexts'

import './App.css'


function App() {

  return (
    <main className="App container">
      <Logo />
      <GifsContextProvider>
        <Suspense fallback={null}>
        <Switch>
          <Route path="/" component={Home} />
          {/* <Route path="/gifs/:keyword" component={Results} /> */}
          <Route path="/gifs/:keyword/:rating?" component={Results} />
          <Route path="/gif/:id" component={Details} />
        </Switch>
        </Suspense>
      </GifsContextProvider>
    </main>
  )
}

export default App
