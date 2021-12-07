import { useState, useEffect } from "react"
import Input from "./Input"
import List from "./List"
import Button from "./Button"
import { v4 as uuidv4 } from 'uuid'
import checkImg from "../assets/icon-check.svg"

const MainSection = ({toggleIcon, onClick}) => {
    const [width, setWidth] = useState(window.innerWidth)
    
    useEffect(()=> {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
    })

    const todoList = [
        {id: 1, task: 'Complete online Javascript course', completed:true},
        {id: 2, task: 'Jog around the park 3x', completed:false},
        {id: 3, task: '10 minutes meditation', completed:false},
        {id: 4, task: 'Read for 1 hour', completed:false},
        {id: 5, task: 'Pick up groceries', completed:false},
        {id: 6, task: 'Complete Todo App on Frontend Mentor', completed:false},
    ]

    const [lists, setLists] = useState(todoList)
    const [filter, setFilter] = useState("All")
    const length = lists.filter((list) => !list.completed).length

    // LOCAL STORAGE
    useEffect(() => {
        const storedLists = JSON.parse(localStorage.getItem('lists'))
        if (storedLists) setLists(storedLists)
    }, [])

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(lists))
    }, [lists])
    

    // ADDING A TODO
    const addList = (list) =>{
        list.id = uuidv4()
        setLists([...lists, list])
    }

    // DELETING A TODO
    const deleteList = (id) => {
        setLists(lists.filter((list) => list.id !== id))
    }

    // COMPLETED TODO (CHECKED)
    const completedList = (id) => {
        setLists(lists.map((list) => (
            list.id === id ? {...list, completed: !list.completed}
            : list
        )))
    }

    // FILTERING TODO
    const FILTER_MAP = {
        All: () => true,
        Active: list => !list.completed,
        Completed: list => list.completed
    }

    const FILTER_NAMES = Object.keys(FILTER_MAP)

    const filterList = FILTER_NAMES.map(name => (
        <Button 
        key={name} 
        name={name} 
        setFilter={setFilter}
        className={name === filter ? 'active' : ''}
        />
    ))

    // RENDERING LISTS
    const taskList = lists.filter(FILTER_MAP[filter]).map(list => (
        <List
        key={list.id}
        id={list.id}
        onChecked={completedList}
        onDelete={deleteList}
        task={list.task} 
        completed={list.completed}
        checkedCircle={`circle ${list.completed ? 'checked' : ''}`}
        checkedTask={`${list.completed ? 'checkedList' : ''}`}
        checkImg={list.completed ? <img src={checkImg} alt="" /> : ''}
        />
    ))


    // CLEAR COMPLETED 
    const clearCompleted = () => {
        setLists(lists.filter((list) => !list.completed))
    }

    return (
        <section>
            <div className="heading">
                <h1>TODO</h1>
                <img src={toggleIcon} alt="" onClick={onClick}/>
            </div>
            <Input
             addList={addList}
            />
            <div className="lists">
                {taskList}

            <div className="status">

                <div className="status__count">
                    <span>{length} </span>
                    <span>
                    <span>{length > 1 ? 'items' : 'item'} </span>  
                    left
                    </span>
                </div>
                
                {width >= 550 &&
                <div className="status__category">
                    {filterList}
                </div>
                }
                

                <div className="status__clear">
                    <button
                    onClick={clearCompleted}
                    >
                        Clear Completed
                    </button>
                </div>

            </div>
            </div>
                {width <= 550 &&
                <div className="status__category">
                    {filterList}
                </div>}

        </section>
    )
}

export default MainSection
