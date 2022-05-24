import React from 'react'


export default function SearchBar(props) {
    

  return (
    
        
      <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Search" onChange={props.handleChange}  type="text" value={props.search} />
      
    
  )
}
