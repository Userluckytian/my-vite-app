import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 在 TypeScript 中，! 用于告诉编译器“这个值不会是 null 或 undefined”。
// 这是一种开发者对编译器作的保证，用于避免编译器在进行类型检查时报出可能的 null 或 undefined 错误。
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
