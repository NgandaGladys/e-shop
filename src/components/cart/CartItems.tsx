import {useState} from "react";

interface Props {
    qty?: number
}
const CartItems= ({qty = 0}:Props) => {
    const [addItemsToCart, setAddItemsToCart] = useState(qty);
    const handleAddItemsToCart = () => {
        setAddItemsToCart(prev => ++prev)

    }
    const handleRemoveItemsFromCart = ()=>{
        if(addItemsToCart !== 0){
            setAddItemsToCart((prev)=> --prev)
        }
    }
    return (
        <div className={"py-4 px-6 flex w-40 items-center justify-between gap-4 border-2 border-gray-200"}>
            <button onClick={handleRemoveItemsFromCart}><i className="fa-solid fa-minus"></i></button>
            <p>{addItemsToCart}</p>
            <button onClick={handleAddItemsToCart}><i className="fa-solid fa-plus"></i></button>
        </div>
    )
}
export default CartItems