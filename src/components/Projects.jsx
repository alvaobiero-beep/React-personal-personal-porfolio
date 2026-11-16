import React, { use } from 'react'
import { useState } from 'react'

const Projects = () => {
    const[name ,setName]= useState("")
      const[title ,setTitle]= useState("")
      const[category,setCategory]= useState("")
      const[projects ,setProjects]= useState([])
      
    

      


      function handleaddproject(){
        const newproject = {
            id:Date.now(),
             projectname:name,
            projecttitle:title,
            projectcategory:category,
        
        }
        setProjects([...projects,newproject])

        

      }
      function handleName(e){
        setName(e.target.value)
      }
    
     function handleTitle(e){
        setTitle(e.target.value)
      }
     function handleCategory(e){
        setCategory(e.target.value)
      }
       
  return (
   <>
   <div  className='project-component'>
    <h1>Projects</h1>

    <button onClick={handleaddproject} className='project-name'>ADD PROJECT</button>




    <div className='project-input'>
        <input type="text"  value={name} placeholder='Project-name' onChange={handleName} required /><br />
        <input type="text"   value={title}  placeholder='Backend Or Frontend' onChange={handleTitle}/><br />
        <select value={category} onChange={handleCategory} >
            <option value=""> Select category</option>
            <option value="Html">Select Html</option>
            <option value="Javascript">Select Javascript</option>
            <option value=" Css"> Select Css</option>
            <option value="React">Slect React</option>



        </select>

    </div>
    <ul className='project-list'>
         <li>
            <p>Front end project</p>
            <p>Building a landing page</p>
            <p>Html && Css </p>

        </li>
        <li>
            <p>Front end project</p>
            <p>Building a shopping cart</p>
            <p>Javascript </p>

        </li>
        
        <li>
            <p>Front end project</p>
            <p>Building to do list</p>
            <p>Javascript && react </p>

        </li>
    {projects.map(
        ( project)=> <li key={project.id}> 
        { project.projecttitle} <br />
        { project.projectname} <br />
        { project.projectcategory}

        
          </li>
    )

    }




    </ul>



   </div>
   
   </>
  )
}

export default Projects