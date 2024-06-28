import React from 'react'

const CategoryForm = ({value, handleSubmit, setValue}) => {
  return (

  <>
  <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input type="text" className="form-control" placeholder='Enter new Category' id="exampleInputEmail1" aria-describedby="emailHelp"
    value={value}  
     onChange={(e) =>  setValue(e.target.value)}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  
  </>
  )
}

export default CategoryForm
