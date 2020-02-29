import React from "react";
import { useState} from 'react'; 
const Search=(props)=>{
    const [search,setsearch] = useState("");

     const handleChange=(e)=>setsearch(e.target.value)
   
    return( 
     <div class="input-group mb-3 w-50">
  <input type="text" class="form-control" name="search" placeholder="Search by Speaker name" onChange={handleChange} aria-describedby="button-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" onClick={()=>props.search(search)} type="button" id="button-addon2">Search</button>
  </div>
</div>
       
    )
}
export default Search;