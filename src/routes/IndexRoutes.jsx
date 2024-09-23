import { createBrowserRouter } from 'react-router-dom';
import Index from '../layouts/Index';
import Dashboard from '../pages/dashboard/Dashboard';
import Categories from '../pages/category/Categories';
import Products from '../pages/Products';
import Sliders from '../pages/Sliders';
import Size from '../pages/Size';
import Comments from '../pages/Comments';
import Color from '../pages/Color';
import Content from '../pages/Content';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'slider',
        element: <Sliders />,
      },
      {
        path: 'sizes',
        element: <Size />,
      },
      {
        path: 'comments',
        element: <Comments />,
      },
      {
        path: 'color',
        element: <Color />,
      },
      {
        path: 'content',
        element: <Content />,
      },
    ],
  },
]);

export default routes;
