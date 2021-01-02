import './App.css';
import React from "react"
import Homepage from "./pages/homepage/Homepage"
import Header from "./component/header/Header"
import Footer from "./component/footer/Footer"
import { Switch, Route, Redirect } from "react-router-dom"
import ShopPage from "./pages/shop-page/ShopPage"
import AccountPage from "./pages/account-page/AccountPage"

function App() {

  return <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/account" component={AccountPage} />
      <Redirect from='*' to='/' />
    </Switch>
    <Footer />
  </div>

}

export default App;
