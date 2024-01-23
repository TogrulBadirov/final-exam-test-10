import  { createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export const WishlistContext = createContext()

const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist")?JSON.parse(localStorage.getItem("wishlist")):[])
    useEffect(() => {
        localStorage.setItem("wishlist",JSON.stringify(wishlist))
    }, [wishlist])
    
    const addToWishlist = (item)=>{
        const index = wishlist.findIndex(x=> x._id === item._id)
        if (index === -1) {
            toast.success('Successfully Added To Wishlist!')
            setWishlist([...wishlist,item])
        }
        else{
            toast('Removed From Wishlist!', {
                icon: 'ℹ️',
              });
            setWishlist(wishlist.filter(x=>x._id !== item._id))
        }
    }

    const isInWishlist = (item)=>{
        const index = wishlist.findIndex(x=> x._id === item._id)
        if (index === -1) {
            return false
        }
        else{
            return true
        }
    }

    const data = {
        wishlist,
        addToWishlist,
        isInWishlist
    }
  return (
    <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider
