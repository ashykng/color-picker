import React, {useState} from "react";

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF")

    function handleColorChange(event){
        setColor(event.target.value);
    }

    function copyColor(){
        const tempElement = document.createElement('input');
        tempElement.value = color;
        
        document.body.appendChild(tempElement);
        tempElement.select();
        document.execCommand('copy');
        document.body.removeChild(tempElement);
    }

    return(
        <div className="container">
            <h1>Color Picker</h1>

            <div className="displayContainer" style={{backgroundColor: color}}>
                <p>Selected Color: <span id="color">{color}</span></p>
                <button onClick={copyColor}>Copy</button>
            </div>

            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}

export default ColorPicker;