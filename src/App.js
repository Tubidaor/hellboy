import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './app.css'
import AboutMePage from './pages/about-me-page/about-me-page'
import HomePage from './pages/home-page/home-page'
import ShopPage from './pages/shop-page/shop-page'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path={"/"}
          compoment={HomePage}
        />
        <Route
          path={"/about-me"}
          compoment={AboutMePage}
        />
        <Route
          path={"/shop"}
          compoment={ShopPage}
        />
      </Switch>
    </div>
  )
}

export default App
