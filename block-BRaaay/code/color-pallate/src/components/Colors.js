import colors from '../data/colors.json';
import Color from './Color';

function Colors(props) {
    let varients = colors[props.shade];
    return (
        <section className="shade flex justify-between align-center">
            <aside className="flex-15">
                <h2>{ props.shade.charAt(0).toUpperCase() +props.shade.slice(1,props.shade.length)}</h2>
            </aside>
            <main className="flex-84 flex-wrap">
            {varients.map((varient, index) => {
                return <Color key={varient} index={index} colorCode={varient}/>
            })}
            </main>
        </section>
    );
}

export default Colors;