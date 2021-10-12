function handleName(info, event){
    alert(`Your character is ${info}`);
}

function Name(props){
    return(
      <button onClick={(event)=>{handleName(props.info, event)}}>{props.info}</button>
    );
}

export default Name;