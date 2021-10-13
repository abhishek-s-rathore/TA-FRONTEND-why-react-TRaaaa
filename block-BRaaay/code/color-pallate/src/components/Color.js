function Color(props){
   return(
        <div className="color-container">
        <div className="color-box" style={{backgroundColor:props.colorCode}}></div>
        <p className="flex justify-between align-center">
            <span className="color-weight">{props.index=== 0 ? '50': props.index*100 }</span>
            <span className="color-code">{(props.colorCode)}</span>
        </p>
        </div>
   );
}

export default Color;