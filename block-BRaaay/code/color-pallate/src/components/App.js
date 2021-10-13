import colors from '../data/colors.json';
import Colors from "./Colors";

function App(){
    var keys = Object.keys(colors);
    return keys.map(key=>{
          return  <Colors key={key} shade={key} />
     });
}

export default App;