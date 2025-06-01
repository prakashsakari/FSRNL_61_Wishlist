export const WishlistedItems = ({id, isCompleted, wishlist, arrOfWishlist, setArrOfWishlit}) => {

    const onDeleteClick = (id) => {
    const filteredArr = arrOfWishlist.filter(wishlist => wishlist.id !== id);
    setArrOfWishlit(filteredArr)
  }

  const onWishCheckChange = (id) => {
    const updatedWishlist = arrOfWishlist.map(wishlist => wishlist.id === id ? {...wishlist, isCompleted: !wishlist.isCompleted} : wishlist);
    setArrOfWishlit(updatedWishlist)
  }

    return (
      <div>
        <label>
          <input checked={isCompleted} onChange={() => onWishCheckChange(id)} type='checkbox'/>
          <span className={isCompleted ? 'strike' : ''}>{wishlist}</span>
        </label>            
        <button onClick={() => onDeleteClick(id)}>Delete</button>
      </div>
    )
  }

export default WishlistedItems;