import Home from './pages/Home/index';
import Search from './pages/Search/index';
import Brands from './pages/Brands/index';
import BrandProfile from './pages/BrandProfile/index';
import Profile from './pages/Profile/index';
import Favourits from './pages/Favourits/index';
import Register from './pages/Register/index';
import Login from './pages/Login/index';
import ProductDetails from './pages/ProductDetails/index'

const routes = [
  {path: '/',component: Home},
  {path: '/search/:search',component: Search},
  {path: '/brands',component: Brands},
  {path: '/brand/:brandId',component: BrandProfile},
  {path: '/favourits',component: Favourits},
  {path: '/brand/:brandId/:catId',component: BrandProfile},
  {path: '/profile',component: Profile},
  {path: '/product/:id',component: ProductDetails},
  {path: '/register',component: Register},
  {path: '/login',component: Login},
]

export default routes
