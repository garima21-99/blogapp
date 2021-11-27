import React from 'react'
import Blogs from './Blogs'
import Blogapi from './Blogapi'

const Blogdetail = ({detail,notopen}) => {
    
  
        
    return (
        <>
        {
        detail.map((curelem)=>{
            return(<>
            <div className="container1">
           
             <div className="blogscontainer1">
             <i id="cross-btn" class="fas fa-times" onClick={()=>{notopen(false)

             }}></i>
             <img className="blogimage1"src={curelem.image}/>
             <p  className="blogtext1">{curelem.text}</p>
             </div>
             </div>
            </>)
        })
}
        </>
    )
}

export default Blogdetail
