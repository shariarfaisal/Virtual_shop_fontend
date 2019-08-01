import React from 'react';
import Home from './components/fontend/pages/Home/index';
import ProductDetails from './components/fontend/pages/ProductDetails/index'
import ThemeContextProvider from './components/fontend/context/ThemeContext';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AdminHome from './components/backend/pages/Home/index';
import ShopHome from './components/shop/pages/Home/index';
import Register from './components/shop/pages/Register/index';
import Login from './components/shop/pages/Login/index';
import CoreContextProvider from './components/context/CoreContext';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/details',
    component: ProductDetails
  },
  {
    path: '/admin',
    component: AdminHome
  },
  {
    path: '/shop',
    component: ShopHome
  },
  // {
  //   path: '/shop/products/:category',
  //   component: Products
  // },
  {
    path: '/shop/register',
    component: Register
  },
  {
    path: '/shop/login',
    component: Login
  }
]


function App() {
  return (
    <CoreContextProvider>
      <ThemeContextProvider>
        <Router>
          <Switch>
            {
              routes.map((i,key) => {
                return <Route path={i.path} exact component={i.component}/>
              })
            }
          </Switch>
        </Router>
      </ThemeContextProvider>
    </CoreContextProvider>
  );
}

export default App;
