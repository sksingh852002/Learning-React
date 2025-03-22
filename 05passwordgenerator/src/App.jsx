import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [pass, setPass] = useState("")


  //refHook
  const passwordRef = useRef(null)

  const passGeneraotor = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*-_=+[]{}~`"


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char)
    }

    setPass(password)

  }, [length, numAllow, charAllow, setPass])

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,101)
  window.navigator.clipboard.writeText(pass)
},[pass])

  useEffect(()=>{passGeneraotor()

  },[length, numAllow, charAllow, passGeneraotor])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          
          <input type="text"
            value={pass}
            className='outline-none bg-white w-full py-1 px-3'
            placeholder='Password'
            readOnly 
            ref={passwordRef}/>
         
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >Copy</button>
        </div>
        
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'></div>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }} />
          <label>Length:{length}</label>


          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={(e) => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charInput"
              onChange={(e) => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
