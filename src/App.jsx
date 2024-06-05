import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/Home/Home'
import SearchPage from './Pages/SearchPage/Search'
import ResultPage from './Pages/ResultPage/Result'
import DetailPage from './Pages/DetailPage/Detail'
const App = () => {

  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('')

  console.log(inputValue, selectValue);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/Search-Page' element={<SearchPage 
        inputValue={inputValue} 
        selectValue={selectValue} 
        setSelectValue={setSelectValue} 
        setInputValue={setInputValue}/>} />

        <Route 
        path={`/Result-Page`} 
        inputValue={inputValue}
        selectValue={selectValue}
        element={<ResultPage />} />

        <Route 
        path={`/Result-Page/:namaMobil/:kapasitas`} 
        inputValue={inputValue}
        selectValue={selectValue}
        element={<ResultPage />} />

        <Route path='/Detail-Page/:id' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
