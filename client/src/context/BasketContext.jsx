import  { createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export const BasketContext = createContext()

const BasketProvider = ({children}) => {
    const [basket, setBasket] = useState(localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")):[])
    const total = basket.reduce((acc,current)=>acc+(current.price * current.count),0)
    useEffect(() => {
        localStorage.setItem("basket",JSON.stringify(basket))
    }, [basket])
    
    const addToBasket= (item)=>{
        const index = basket.findIndex(x=> x._id === item._id)
        if (index === -1) {
            setBasket([...basket,{...item,count:1}])
            toast.success('Successfully Added To Basket!')
        }
        else{
            basket[index].count++
            setBasket([...basket])
            toast('Already In Basket, Count Inreased!', {
                icon: 'ℹ️',
              });
            
            // setBasket(basket.filter(x=>x._id !== item._id))
        }
    }

    const removeFromBasket= (item)=>{
            setBasket(basket.filter(x=>x._id !== item._id))
            toast('Removed From Basket!', {
                icon: 'ℹ️',
              });
    }

    const isInBasket = (item)=>{
        const index = basket.findIndex(x=> x._id === item._id)
        if (index === -1) {
            return false
        }
        else{
            return true
        }
    }

    const UpdateCountOfBasket = (item,value)=>{
        const index = basket.findIndex(x=> x._id === item._id)
        basket[index].count += value
        if (basket[index].count < 1) {
            return removeFromBasket(item)
        }
        toast('Count Updated!', {
            icon: 'ℹ️',
          });
        setBasket([...basket])
    }

    const data = {
        basket,
        addToBasket,
        isInBasket,
        removeFromBasket,
        total,
        UpdateCountOfBasket
    }
  return (
    <BasketContext.Provider value={data}>
        {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider
