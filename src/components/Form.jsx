const Form = ({onChange,onClick}) => {
    return ( 
        <div>
        <label>Add to do</label>
        <input onChange={onChange} type="text"></input>
        <button type="submit" onClick={onClick} >Add</button>
        </div>
     );
}
 
export default Form;