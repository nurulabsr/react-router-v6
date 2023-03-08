import React, { Children } from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Pages/Home/Home';
import Article from './components/Pages/Article/Article';
import Error from './components/Pages/Error/Error';
import Main from './components/Layout/Main';
import Users from './components/Pages/Users/Users';
import UserDetail from './components/Pages/Details/UserDetail/UserDetail';
function App() {
  const router = createBrowserRouter([
    {  path:"/",
       element: <Main/>,
       children:[
        {
          path:"/", 
          element: <Home/>
        },
        {
          path:"/article",
          element: <Article/>
        },
        {
          path: "/user",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users")
          },
          element: <Users/>   
        },
       {
        path:"/user/:userId",
        loader: async ({params}) => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
         },
         element: <UserDetail></UserDetail>
       },

      ]
    },
    {
      path: '*',
      element: <Error/>
     },



  ])

  return (
    <RouterProvider router={router}>
     
    </RouterProvider>
  );
}

export default App;
