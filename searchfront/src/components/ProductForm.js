import { useState } from "react"
import axios from "axios"
const ProductForm = () => {
    
    const [name,setName]= useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/products',{name});
            setName('')
            console.log("Added");
        } catch (error) {
            console.error(error);
        }

    }
    return (
    <div>
        <form onSubmit={handleSubmit} > 
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Product Name" required />
            <button type="submit">Add Product</button>
        </form>
    </div>
  )
}

export default ProductForm
