import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css'

function App() {

  const [wishlist, setWishlist] = useState('');
  const [arrOfWishlist, setArrOfWishlit] = useState([]);

  const onWishlistChange = (e) => {
    const { value } = e.target // same as this --> const value = e.target.value
    setWishlist(value);
  }

  const onAddClick = () => {
    setArrOfWishlit([...arrOfWishlist, {id: uuid(), wishlist, isCompleted: false}]) // creating a wishlist
    setWishlist(''); //clear the input
  }

  const onDeleteClick = (id) => {
    const filteredArr = arrOfWishlist.filter(wishlist => wishlist.id !== id);
    setArrOfWishlit(filteredArr)
  }

  const onWishCheckChange = (id) => {
    const updatedWishlist = arrOfWishlist.map(wishlist => wishlist.id === id ? {...wishlist, isCompleted: !wishlist.isCompleted} : wishlist);
    setArrOfWishlit(updatedWishlist)
  }

  return (
    <>
      <h1>Your Wishlist</h1>
      <div>
        <input value={wishlist} onChange={onWishlistChange} placeholder="Add your wishlist here..."/>
        <button onClick={onAddClick}>Add</button>
      </div>
      <div>
        {
          arrOfWishlist.map(({id, wishlist, isCompleted}) => (
            <div key={id}>
              <label>
                <input checked={isCompleted} onChange={() => onWishCheckChange(id)} type='checkbox'/>
                <span className={isCompleted ? 'strike' : ''}>{wishlist}</span>
              </label>            
              <button onClick={() => onDeleteClick(id)}>Delete</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
