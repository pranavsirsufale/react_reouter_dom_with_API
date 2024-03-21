import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home, About, Contact,User,Github, githubInfoLoader} from './components'


// const router = createBrowserRouter(
//   [
//     {
//       path:'/',
//       element:<Layout/>,
//       children:[
//         {
//           path:'',
//           element:<Home/>
//         },
//         {
//           path:'about',
         
//           children:[
//             {
//               path:'',
//               element:<About/>
//             },

//             {
//               path:'user',
//               element:<User/>
//           }
//           ]
//         },
//         {
//           path:'contactus',
//           element:<Contact/>
//         },
//         {
//           path:'github',
//           element:<Github/>
//         }
//       ]
//   },{

//   }
//   ]
// )

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout/>} >
    <Route path='' element={<Home/>} />
    <Route path='about'  >
      <Route path='' element={<About/>} />
      <Route path='user' element={<User/>} />
    </Route>
    <Route path='user' element={<User/>} />
    <Route path='contactus' element={<Contact/>} />
    <Route path='github' element={<Github/>} loader={githubInfoLoader} />
  </Route>
)
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
