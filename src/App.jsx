import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css'
import { WishlistedItems } from './components/WishlistedItem';

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

  return (
    <>
      <h1>Your Wishlist</h1>
      <div>
        <input value={wishlist} onChange={onWishlistChange} placeholder="Add your wishlist here..."/>
        <button onClick={onAddClick}>Add</button>
      </div>
      <div>
        {
          arrOfWishlist.map(({id, wishlist, isCompleted}) => <WishlistedItems key={id} id={id} wishlist={wishlist} isCompleted={isCompleted} arrOfWishlist={arrOfWishlist} setArrOfWishlit={setArrOfWishlit}  />)
        }
      </div>
    </>
  )
}

export default App
