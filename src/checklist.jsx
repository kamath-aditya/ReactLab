// Write a React code to display a checklist with multiple options that can select items and the 
// selected options are dynamically displayed on the screen
import { useState } from 'react'

const groceryItems=["Milk","Bread","Eggs","Apples","Chicken","Rice","Carrots"];

function Checklist(){
    const [selectedItems,setSelectedItems]=useState([]);
    const handleChange= (event) => { 
        const {value,checked} = event.target;
        setSelectedItems((prev) => checked ? [...prev,value] : prev.filter((item) => item !== value));
    };
    return(
        <div>
            <h1>Grocery Shopping List</h1>
            <div>
                {groceryItems.map((item)=>(
                    <label key={item}>
                        <input type="checkbox" value={item} onChange={handleChange} checked={selectedItems.includes(item)}/>
                        {item}
                    </label>
                ))}
            </div>
            <div>
                <h2>Items to Buy:</h2>
                {selectedItems.length>0?(
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        {selectedItems.map((item) => ( <li key={item}>{item}</li> ))}
                    </ul>
                    ):( <p>No items selected</p> )
                }
            </div>
        </div>
    );
};

export default Checklist;