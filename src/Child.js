import {useState} from 'react'
function Child(props){

    let [searchTask,setSearchTask]=useState("")
    return(
        <>
            <h1>This is an Child Component</h1>
            <input type="text" value={searchTask} onChange={(e)=>{
                setSearchTask(e.target.value)
            }}/>
            <button onClick={()=>{
                props.add(searchTask)
                setSearchTask("")
            }}>Click</button>
        </>
    )
}

export default Child;