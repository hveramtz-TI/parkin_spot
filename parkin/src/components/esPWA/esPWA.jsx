import React,{useState} from 'react'
import './esPWA.css'
import Bottomnav from '../bottomNav/bottomnav'
import Header from '../header/header'

function EsPWA() {
  const [valorButtom, setValorButtom] = useState('')

  
  return (
    <div className='PWA'>
      <Header/>
      <Bottomnav valorButtom={valorButtom} setValorButtom={setValorButtom}/>
    </div>
  )
}

export default EsPWA