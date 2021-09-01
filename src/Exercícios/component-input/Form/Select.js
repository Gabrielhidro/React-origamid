export default function Select({options, value, setValue}){
    return (
        <select value="" onChange={({target}) => setValue(target.value)}>
            <option value="" disabled >Selecione</option>
            {options.map((option) => {
                return <option key={option} value={option}>{option}</option>
            })}
        </select>
    )
}