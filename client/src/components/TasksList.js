import { useEffect } from "react"


export default function TaskList() {

const loadTask = async () => {
  const res = await fetch("http://localhost:3000/routes/tasks")
  const data = await res.json()
  
}

useEffect(() => {

}, [])



  return (
    <>
    <h1>Task List</h1>
    </>
 
  )
}
