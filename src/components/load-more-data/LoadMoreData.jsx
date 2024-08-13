import { useEffect, useState } from "react";
import "./styles.css";
const LoadMoreData = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          page === 0 ? 0 : page * 20
        }`
      );
      const data = await response.json();
      //console.log(data);
      if (data && data.products && data.products.length) {
        setProducts([...products, ...data.products]);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (products.length === 160) {
      setDisabled(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="load-container">
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h3>Price: ${product.price}</h3>
          </div>
        ))}
      </div>

      <div className="load-btn">
        <button disabled={disabled} onClick={() => setPage(page + 1)}>
          {disabled ? "No more products to load" : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default LoadMoreData;
