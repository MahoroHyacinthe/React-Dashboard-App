export  const  Input = ({
    label,
    name,
    type,
    className,
    onChange
}) =>{

    return(

        <div className=" grid gap-1 text-white pt-4 pb">
            <label htmlFor={name}>{label}</label>
            <input className={className} name={name} type={type} onChange={onChange} />
        </div>
    )
}