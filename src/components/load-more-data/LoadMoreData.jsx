import React, { useEffect, useState } from "react";
import "./load-more-data.css";
const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      //cheching the response before setting it to the state var
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);

        setLoading(false);
      }

      if (response) console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(
    () => {
      fetchProducts();
      return () => {};
    }, //when the count updates the app should fetch the data again
    [count]
  );

  // to disable the load more item button when the 100 products are displayed
  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  const handleLoadMoreItems = () => {};

  if (loading && products.length === 0) {
    return <div>Loading products</div>;
  }

  return (
    <div className="load-more-data-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
              </div>
            ))
          : null}
      </div>
      <div className="load-more-item-button">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Items
        </button>
        {disableButton ? <p> You have reached 100 products</p> : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
