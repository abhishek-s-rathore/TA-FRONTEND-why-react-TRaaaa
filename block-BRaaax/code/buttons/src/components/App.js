import Button from "./Button";

function App(){
   return(
       <>
        <Button label="Click Me!" type="secondary" size="large"/>
        <Button label="Click Me!" type="primary" size="medium"/>
        <Button label="Click Me!" type="secondary" size="small"/>
        <Button label="Click Me!"/>
        <Button type="secondary" onClickHandler={()=>alert('You clicked me!')}/>
        </>
   )
};

export default App;


