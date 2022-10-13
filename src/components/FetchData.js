/* eslint-disable jsx-a11y/scope */
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import '../App.css'

function FetchData() {
    const [post, setpost] = useState('');
    useEffect(() => {
       axios.get("https://jsonplaceholder.typicode.com/posts")
       .then((response)=>{setpost(response.data)})
    }, []);

    if(post.length === 0){
        return <div> <h2>Loading.......!</h2></div>
    }

    else{

  return (
    <div>
    
   
   <h2>Details</h2>

   <table class="table table-bordered">
    <tr className='myrow'>
        <th scope="col">User ID</th>
        <th scope="col">Title</th>
        <th scope="col">Body</th>
    </tr>


    {
    post.map((value)=>{
        return <tr className='myrow'>

            <td className='mytd' scope="row">{value.id}</td>
            <td className='mytd'>{value.title}</td>
            <td className='mytd'>{value.body}</td>
            <td className='mytd'><button type="submit">Submit</button></td>

        </tr>
    })
   }

   </table>
   

    </div>
  )

}
}

export default FetchData