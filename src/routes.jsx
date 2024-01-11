import About from "./pages/About";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Conditions from "./pages/Conditions";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { ABOUT_ROUTE, ADMIN_ROUTE, CART_ROUTE, CONDITIONS_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Element: Admin
  }  
]

export const publicRoutes  = [
  {
    path: SHOP_ROUTE,
    Element: Shop
  },
  {
    path: LOGIN_ROUTE,
    Element: Auth
  }, 
  {
    path: REGISTRATION_ROUTE,
    Element: Auth
  },
  {
    path: ABOUT_ROUTE,
    Element: About
  },
  {
    path: CART_ROUTE,
    Element: Cart
  },
  {
    path: CONDITIONS_ROUTE,
    Element: Conditions
  }, {
    path: PRODUCT_ROUTE + '/:id',
    Element: ProductPage
  }
]