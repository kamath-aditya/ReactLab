import { useState } from 'react'

function SearchFilter() {
  const [searchTerm,setSearchTerm] = useState("")
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Kiwi', 'Mango', 'Orange', 'Papaya', 'Pineapple', 'Strawberry', 'Watermelon']
  const filteredItems = items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase())) 
  return (
    <div >
      <h1>Search Filter</h1>
      <input 
        type="text" 
        placeholder='Search...' 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        style={{ padding: '10px', width: '50%', fontSize: '16px' }} 
      />
      <ul style={{ listStyleType: 'none', padding: 0, margin: '10px' }} >
        {filteredItems.length > 0 ? (
          filteredItems.map((item,index) => <li key={index}>{item}</li>)
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  )
}

export default SearchFilter