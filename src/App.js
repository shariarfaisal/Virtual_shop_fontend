import React from 'react';
import Home from './components/fontend/pages/Home/index';
import Brand from './components/fontend/pages/Brand/index';
import Register from './components/fontend/pages/Register/index';
import Login from './components/fontend/pages/Login/index';
import ProductDetails from './components/fontend/pages/ProductDetails/index'
import ThemeContextProvider from './components/fontend/context/ThemeContext';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AdminHome from './components/backend/pages/Home/index';
import ShopHome from './components/shop/pages/Home/index';
import ShopRegister from './components/shop/pages/Register/index';
import ShopLogin from './components/shop/pages/Login/index';
import ShopProfile from './components/shop/pages/Profile/index';
import CoreContextProvider from './components/context/CoreContext';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/brand',
    component: Brand
  },
  {
    path: '/product/:id',
    component: ProductDetails
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    component: AdminHome
  },
  {
    path: '/shop',
    component: ShopHome
  },
  {
    path: '/shop/products/:category',
    component: ShopHome
  },
  {
    path: '/shop/register',
    component: ShopRegister
  },
  {
    path: '/shop/login',
    component: ShopLogin
  },
  {
    path: '/shop/profile',
    component: ShopProfile
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
                return <Route key={key} path={i.path} exact component={i.component}/>
              })
            }
          </Switch>
        </Router>
      </ThemeContextProvider>
    </CoreContextProvider>
  );
}

export default App;
