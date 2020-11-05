// import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './app.css'
import AboutMePage from './pages/about-me-page/about-me-page'
import HomePage from './pages/home-page/home-page'
import ShopPage from './pages/shop-page/shop-page'
import Nav from './components/nav/nav'
import ProductPage from './pages/product-page/product-page'
import CartPage from './pages/cart-page/cart-page'
import LoginPage from './pages/login-page/login-page'
import RegPage from './pages/reg-page/reg-page'


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Switch>
        <Route
          exact
          path={"/"}
          component={HomePage}
        />
        <Route
          path={"/about-me"}
          component={AboutMePage}
        />
        <Route
          path={"/shop"}
          component={ShopPage}
        />
        <Route
          path={"/products/:productId"}
          component={ProductPage}
        />
        <Route
          path={"/cart"}
          component={CartPage}
        />
        <Route
          path={"/login"}
          component={LoginPage}
        />
        <Route
          path={"/register"}
          component={RegPage}
        />

      </Switch>
      <footer>I am a footer.</footer>
    </div>
  )
}

export default App
