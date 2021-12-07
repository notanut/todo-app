const Button = ({name, setFilter, className}) => {
    return (
        <>
            <button
            className={className}
            onClick={() => setFilter(name)}
            >
                {name}
            </button>
        </>
    )
}

export default Button
