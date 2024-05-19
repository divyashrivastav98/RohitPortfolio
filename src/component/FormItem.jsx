export default function FormItem(props){
    return(
        <div className="flex gap-3 items-center">
            <label className="text-black font-bold">{props.label}</label>
            {!props.textarea && 
            <input className="w-60 p-4 boder-2 rounded-md text-base"
                   type={props.type} 
                   placeholder={props.placeholder}/>
            }
            {props.textarea && <textarea/>}
        </div>
    )
}