// import { useState } from 'react'
import routes from "@/route/routes.jsx"
import { createHashRouter, RouterProvider} from "react-router-dom"
// import { createContext } from "react"

import './App.less'

function App() {

  

  const router = createHashRouter(routes)


  return (
      <RouterProvider router={router} />
  )
}

export default App
