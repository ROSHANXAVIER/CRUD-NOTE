import React from 'react'
import './update.css'
import axios from 'axios';

import {useState} from 'react'

function Update() {
    const [input,setInput]=useState({
        title:'',
        content:''
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
            title:input.title,
            content:input.content
        }
        axios.post('https://express-swart.vercel.app/update',newNote).then(res=>{
            setResp(res.data)
        })
    }
  return (
    <div className='cen'>
       <h4>ENTER DATE AND CONTENT TO UPDATE</h4>
      <form>
          <div className='form-group'>
              <input onChange={handleChange} name='title' value={input.title} className='form-control' placeholder='Date in DD/MM/YYYY format' ></input>
          </div>
          <div className='form-group'>
              <textarea onChange={handleChange} name="content" value={input.content} autoComplete='off' className='form-control' placeholder='enter new content'></textarea>
          </div>
          <button onClick={handleClick} className='btn btn-lg btn-info'>ADD NOTE</button>
      </form>
      <div>{resp}</div>
    </div>
  )
}

export default Update