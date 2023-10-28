import React from "react";
import users from "./users";

function Looping(){
    
    const array = users.map((n)=>
    <li>{n.id}</li>
    );
    return(
        // <div>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>S.no</th>
        //                 <th>name</th>
        //                 <th>id</th>
        //                 <th>location</th>
        //                 <th>work</th>
        //                 <th>car</th>

        //             </tr>
        //         </thead>
        //         <tbody>
        //             {users.map((user,index)=>{
        //                 return <tr key={index}>
        //                     <td>{index+1}</td>
        //                     <td>{user.name}</td>
        //                     <td>{user.id}</td>
        //                     <td>{user.location}</td>
        //                     <td>{user.work}</td>
        //                     <td>{user.car}</td>
        //                 </tr>
        //             })}
        //         </tbody>
        //     </table>
        // </div>

        <ul>{array}</ul>


    )
}
export default Looping;