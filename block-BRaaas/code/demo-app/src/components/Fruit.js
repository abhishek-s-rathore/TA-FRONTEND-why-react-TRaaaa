function handleFruit(info, event){
      alert(`You selected ${info.id}`);
}

function Fruit(props){
    return(
         <button onClick={(event)=>{handleFruit(props.fruitInfo, event)}} >{props.fruitInfo.value}</button>
    );
}

export default Fruit;