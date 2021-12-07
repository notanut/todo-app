const Button = ({name, setFilter, isPressed, className}) => {
    return (
        <>
            <span
            className={className}
            aria-pressed={isPressed}
            onClick={() => setFilter(name)}
            >
                {name}
            </span>
        </>
    )
}

export default Button
