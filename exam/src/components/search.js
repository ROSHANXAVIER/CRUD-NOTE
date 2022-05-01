import React from 'react'
import './create.css'
import axios from 'axios';
import {useState} from 'react'
function Search() {
    const [input,setInput]=useState({
        title:''
    })
    const[resp,setResp]=useState("")
    function handleChange(event){
        const{name,value}=event.target;

        setInput(prevInput=>{
            return{
                ...prevInput,
                [name]:value
            }
        })


    }

    function handleClick(event){
        event.preventDefault();
        const newNote={
            title:input.title
        }
        axios.post('https://express-swart.vercel.app/search',newNote).then(res=>{
            setResp(res.data)
        })
    }
  return (
    <div className='cen'>
        <h4 className='head'>ENTER DATE OF THE NOTE TO VIEW</h4>
        <form>
          <div className='form-group'>
              <input onChange={handleChange} name='title' value={input.title} className='form-control' placeholder='Date in DD/MM/YYYY format' ></input>
          </div>
          <button onClick={handleClick} className='btn btn-lg btn-info'>SEARCH</button>
      </form>
      <div>NOTE : {resp}</div>
    </div>
  )
}

export default Search