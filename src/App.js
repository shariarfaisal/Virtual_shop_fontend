import React from 'react';
import Home from './components/fontend/pages/Home/index';
import Brands from './components/fontend/pages/Brands/index';
import BrandProfile from './components/fontend/pages/BrandProfile/index';
import Profile from './components/fontend/pages/Profile/index';
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
import ShopContextProvider from './components/context/ShopContext';
import ProfileContextProvider from './components/fontend/context/ProfileContext';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/brands',
    component: Brands
  },
  {
    path: '/brand/:id',
    component: BrandProfile
  },
  {
    path: '/brand/:id/:categoryId',
    component: BrandProfile
  },
  {
    path: '/profile',
    component: Profile
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
      <ShopContextProvider>
      <ThemeContextProvider>
        <ProfileContextProvider>
        <Router>
          <Switch>
            {
              routes.map((i,key) => {
                return <Route key={key} path={i.path} exact component={i.component}/>
              })
            }
          </Switch>
        </Router>
      </ProfileContextProvider>
      </ThemeContextProvider>
      </ShopContextProvider>
    </CoreContextProvider>
  );
}

export default App;
