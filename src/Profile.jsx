import React from 'react'


export default function Profile() {


    const isLoggedIn = false;

    const items = ["apple",'banana',"orange"]


  return (

    <div>
    {
        isLoggedIn?<h1>Welcome User</h1>:<h1>Welcome Guest</h1>
    }

    <div>
        {items.length > 0 ? (
            <ul>
                {
                    items.map((item,index)=>(

                        <li key={index} >{item}</li>
                    ))
                }
            </ul>
        ):"no item found"}
    </div>


      
    </div>
  )
}
