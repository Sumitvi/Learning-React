import React, { useEffect , useState } from 'react'

function Card() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      const FetchData = async ()=>{
        try{

            let responce = await fetch("https://jsonplaceholder.typicode.com/todos/");
            let result = await responce.json();
            setData(result);
            setLoading(false); 

        }catch{
            console.error("Error is " , error);
            setLoading(false);



        }

      }

      FetchData();
     
    }, [])


    if(loading){
        return <div>Loading...</div>;
    }
    
    return (
        <div className="cardContainer" class="m-10 border-solid bg-slate-500">
          {data.map((item) => (
            <div key={item.id}>  
              <p>User ID: {item.userId}</p>
              <h2>Title: {item.title}</h2>
              <p>Completed: {item.completed ? "Yes" : "No"}</p>
            </div>
          ))}
        </div>
      );
  
}

export default Card