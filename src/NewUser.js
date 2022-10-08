import React from "react";

const NewUser=(props)=>{

   const userDetails=props.data;
   console.log(userDetails)




    return(
        <div>
            <h2>{userDetails.username}</h2>

        </div>


    )


};


export default NewUser;