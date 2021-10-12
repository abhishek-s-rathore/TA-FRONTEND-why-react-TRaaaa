import Name from './Name'; 

function Names(){
    return(
         ['Arya', 'John', 'Bran'].map(name=>{
           return  <Name key={name} info={name}/>
         })
    );
}

export default Names;