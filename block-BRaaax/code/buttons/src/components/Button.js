function getButtonStyle(props){
    let type = Boolean(props.type);
    let size = Boolean(props.size);

       if(type && size){
        return `button-${props.type} button-${props.size}`;
       }  else if(type){
        return `button-${props.type} button-medium`;
       } else if(size){
        return `button-primary button-${props.size}`;
       }else{
        return `button-primary button-medium`;
       }
} 

function Button(props){
  return (
        <button onClick={props.onClickHandler } disabled={props.disabled} className={getButtonStyle(props)}> {props.label|| "Button" }</button>
  );
}

export default Button;

