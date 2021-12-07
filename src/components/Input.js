import { useState } from "react"

function Input({addList}) {

    const emptyList = {id: null, task: '', completed:false}
    const [fillList, setFillList] = useState(emptyList)
    
    const handleChange = e => {
        const {name, value} = e.target

        setFillList({...fillList, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!fillList.task) return
        addList(fillList)
        setFillList(emptyList)
    }


    return (

        <div className="input">
            <div className="circle"></div>
            <form action="" onSubmit={handleSubmit}>
                <input 
                placeholder="Create a new todo..."
                type="text" 
                name="task"
                value={fillList.task}
                onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default Input
