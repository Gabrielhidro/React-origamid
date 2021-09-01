
export default function Input ({id, label, type, setValue, ...props}){
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input 
                type={type}
                id={id}
                onChange={(event) => setValue(event.target.value)}
                {...props}
            />
        </>
    )
}