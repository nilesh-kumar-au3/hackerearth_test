import React,{ Fragment } from "react";
import TimeStampToDate from "./TimeStampToDate";
const Table=(props)=>{
    console.log(props);
    let users=props.users;
    return(
        <div>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Event</th>
      <th scope="col">Name</th>
      <th scope="col">Speaker</th>
      <th scope="col">Speaker Occupation</th>
      <th scope="col">Published On</th>
      <th scope="col">Views</th>
    </tr>
  </thead>
  <tbody>
      {users.map((item,index)=> 
        <Fragment>
           <tr key={item.published_date} >
      <th scope="row">{index+1}</th>
      <td>{item.event}</td>
      <td>{item.name}</td>
      <td>{item.main_speaker}</td>
      <td>{item.speaker_occupation}</td>
      <td>{TimeStampToDate(item.published_date)}</td>  
      <td>{item.views}</td>
      </tr>
        </Fragment>
      )}
  </tbody>
</table>
<nav aria-label="Page navigationexample">
  <ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
</div>)
}
export default Table;