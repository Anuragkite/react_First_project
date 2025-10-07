import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class=' text-3xl font-bold underline bg-black-500 p-20 rounded-t-2xl text-transform:uppercase text-orange-300 '>
        This is the Testing of the react tailwind setup in vite application
      </h1>
      <Card source="https://i.pinimg.com/1200x/73/6d/1f/736d1fc83f95cfbe0e668a50f28279c7.jpg" TitleData="FErrari with massarati " Info="THe fastest white car" />
      <Card source="https://i.pinimg.com/736x/ff/b2/e9/ffb2e96495d32ae320941369619c370a.jpg" /*TitleData="the spider man "*/ />
      <Card source="https://i.pinimg.com/736x/c8/08/4a/c8084ab3a075a0a58406b893e6d80792.jpg" TitleData="the PORCHE 911 " Info= " THe fastest white car " />
    </>
  )
}

export default App
