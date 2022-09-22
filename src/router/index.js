import { Navigate } from "react-router-dom"
import Home from '@/views/home'
import Detail from '@/views/detail'
import Entire from '@/views/entire'

 const routes = [
  {
    path:'/',
    element: <Navigate to="/entire"/>
  },
  {
    path:'home',
    element:<Home/>
  },
  {
    path:'detail',
    element:<Detail/>
  },
  {
    path:'entire',
    element:<Entire/>
  }
]


export default routes