import React from 'react'
import { useState } from "react";
import { TextField } from '@mui/material';
import axios from 'axios'
import classes from './UploadItem.module.css'
import CustomButton from '../customButton/CustomButton';
import DragAndDrop from '../dragAndDrop/DragAndDrop';


const UploadItem = () => {

    const [item,setItem] = useState({
        name:'',
        category:'',
        image:'123456',
        price:'',
        creator:'levani',
        subCategory:'',
        description:'',
    })
    
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(item)
        axios.post("http://localhost:5000/api/products", item).then(res=>{
            console.log(res)
            setItem({
                name:'',
            category:'',
            image:'123456',
            price:'',
            creator:'levani',
            subCategory:''
            })
        })
        
    }

  return (
    <div className={classes.wrapper}>
    
    <h2>UploadItem</h2>

    <form className={classes.uploadForm}>

    <TextField margin="dense" id='name' label='name' onChange={(e)=>{setItem({...item, name:e.target.value})}}/>
    <TextField margin="dense" id='category'label='category'onChange={(e)=>{setItem({...item, category:e.target.value})}}/>
    
    <TextField margin="dense" id='subCategory'label='subCategory'onChange={(e)=>{setItem({...item, subCategory:e.target.value})}}/>
    <TextField margin="dense" id='price' label='price' onChange={(e)=>{setItem({...item, price:e.target.value})}} />
    <TextField margin="dense" id='description'label='description'onChange={(e)=>{setItem({...item, description:e.target.value})}}/>
    <DragAndDrop onChange={(e)=>{setItem({...item, image:e})}}
    text='Choose an Image or drag it here:'
    />

    <CustomButton
    onClick={submitHandler} 
    text='submit'
    />
    </form>

    </div>
  )
}

export default UploadItem