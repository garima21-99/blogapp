import React, { useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import Blogapi from './Blogapi'
import Blogdetail from './Blogdetail';

const Blogs=()=>{
    const [modal,setModal]=useState(false)
    const[blog,setBlog]=useState(Blogapi)
  function blogdetail(id){
      const detailpage=Blogapi.filter((curElem)=>{return curElem.id===id})
      setBlog(detailpage);
      setModal(true)
      
    
  }
  
    const[text,setText]=useState("");
    const[stxt,setStxt]=useState([]);
    const [img,setImg]=useState("");
    
    const addItem=()=>{
        
        setStxt([...stxt,text]);
       
        
       
    }
    const[display,setDisplay]=useState([]);
    useEffect(() => {
        if(img){
            const reader=new FileReader();
            reader.onloadend=()=>{
                setDisplay(reader.result)
            };
            reader.readAsDataURL(img)
        }
        else{
            setDisplay(null)
        }
    }, [img])
    return(
        <>
        <nav><span>B</span>log<span>A</span>pp
       <NavLink to="/logout" className="logout">Logout</NavLink></nav>
        <div className="container">
            <div className="newblogcontainer">
                <h1 className="heading">Add Your Blog</h1>
                <img src="#"/><br/>
             <label>Add your Cover</label> <br/>  <input className="img"type="file"
             onChange={(e)=>{
             const file=e.target.files[0]
             if(file)
             {
                 setImg(file)
                
             }
             else{
                 setImg(null)
             }}}/><br/>
             <label>Add your Text</label> <br/> <input type="text"
             onClick={(e)=>{setText(e.target.value)}}/><br/>
             <button className="blogdetailbtn"
             onClick={addItem}>ADD</button>
            </div>
            
            <img className="blogimage2" src={display}/>
            <p  className="blogtext2">{stxt}</p>
          
        
            {
        Blogapi.map((curElem)=>{
            return(
                <>
                
                <div className="blogscontainer">
                    <img className="blogimage"src={curElem.image}/>
                    <p  className="blogtext">{curElem.text}</p>
                    <button className="blogdetailbtn"onClick={()=>{
                    blogdetail(curElem.id)
                    }}>More</button>
                   
                </div>
                </>
                
            )
        }
    )}
        </div>
        
      { modal &&<Blogdetail openstate={modal} notopen={setModal} detail={blog}/>}
        </>
    )
}
   

export default Blogs
