import { useState, useEffect } from "react"
import axios from "axios"
const ProductList = () => {
  const [products , setProducts] = useState([]);
  const [searchTerm, setSearchTerm]= useState('');

  useEffect(()=>{
    const fetchProducts = async ()=>{
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    };
    fetchProducts();
  },[])

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

  return (
    <div>
       <input type="text"  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}  placeholder="Search Products" />

       <ul>
        {filteredProducts.map(product =>(
          <li key={product._id}>{product.name}</li>
        ))}

       </ul>
    </div>
  )
}

export default ProductList
