// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { App as AntdApp, Button } from 'antd';
import routes from "@/routes"
import { createHashRouter, RouteObject, RouterProvider } from "react-router-dom";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <AntdApp>
    
        <Button type="primary">Button</Button>
        {/* 渲染路由 */}
        <RouterProvider router={routes} />
    </AntdApp>
  )
}

export default App
