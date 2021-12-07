import deleteImg from "../assets/icon-cross.svg"

function List({completed, onDelete, onChecked, id, task, checkedCircle, checkedTask, checkImg}) {

    return (
        <>

                <div className="list">
                    <div className="list__wrapper"
                        onClick={() => onChecked(id)}
                    
                    >
                        <div 
                        className={checkedCircle}
                        >
                            {checkImg}
                        </div>
                            <p 
                            className={checkedTask}
                            >{task}
                            </p>
                    </div>
                        <img 
                        onClick={() => onDelete(id)}
                        className="list__delete" 
                        src={deleteImg} 
                        alt="close" />
                    </div>

        </>
    )
}

export default List
