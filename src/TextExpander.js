import { useState } from "react";

export default function TextExpander({children, collapsedNumWords = 10, expandButtonText ='Show more', 
    collapseButtonText ='Show less', buttonColor= '#1f09cd', expanded= false, className = ''}) {

    const styling = {
        color: buttonColor,
        background: 'none',
        border: 'none',
        font: 'inherit',
        cursor: 'pointer',
        marginLeft: '6px',

    }

    const [state, setState] = useState(expanded)
    const displayText = state ? children : children.split(' ').slice(0, collapsedNumWords).join(' ') + '...'
  return <div className={className}>
    <span>{displayText}</span>
    <button style={styling} onClick={()=>setState((st)=>!st)}>{state?collapseButtonText:expandButtonText}</button>
    </div>;
}
