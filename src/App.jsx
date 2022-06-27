import React, { Suspense } from 'react'
import { Route } from 'wouter'
import { Logo } from "./components/Logo/Logo"
import { Searcher } from './components/Searcher/Searcher'
const Home = React.lazy( () => import('./pages/Home/Home'))
const Results = React.lazy( () => import('./pages/Results/Results'))
const Details = React.lazy( () => import('./pages/Details/Details'))
// import { Home } from './pages/Home/Home'
// import { Results } from './pages/Results/Results'
// import { Details } from './pages/Details/Details'

import { GifsContextProvider } from './context/GifsContexts'

import './App.css'


function App() {

  return (
    <main className="App container">
      <Logo />
      <Searcher />
      <GifsContextProvider>
        <Suspense fallback={null}>
          <Route path="/" component={Home} />
          <Route path="/gifs/:keyword" component={Results} />
          <Route path="/gif/:id" component={Details} />
        </Suspense>
      </GifsContextProvider>
    </main>
  )
}

export default App
