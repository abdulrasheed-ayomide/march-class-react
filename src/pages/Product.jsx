    import React, { useState, useEffect } from "react";

    const Product = () => {
        const [product, setProduct] = useState([]);
        const [loading, setLoading] = useState(false);
        const [errorStatus, setErrorStatus] = useState();
        const [refreshBtn, setRefreshBtn] = useState(false);

        useEffect(() => {
            const getProduct = async () => {
                setLoading(true)
                try {
                    const pro = await fetch('http://localhost:4000/api/product');
                    console.log(pro);
                    
                    const res = await pro.json()
                    console.log(res,"product.....");
                    
                    
                    
                    //  console.log(res.product, 'product.....');
                    if (res.products && res.products.length >= 1) {
                        setProduct(res.products);
                        console.log(res.products, "Api Products");
                    }

                } catch (error) {
                    console.log(error);
                    setErrorStatus(error.message)
                    setRefreshBtn(true)
                }finally{
                    setLoading(false)
            }


            }
            getProduct()

        }, [refreshBtn]);

        return (
            <div>
                <h2>Product</h2>
                {loading && <strong>Loading...</strong>}
                {errorStatus && <strong>Error occur while fetching Product</strong>}
                {refreshBtn && <button onClick={() => setRefreshBtn(false)}>Refresh</button>}   

                {
                    product.length >= 1 && <div>
                        {product.map((prod, i) => (
                            <ul key={i}>
                                <li><img src={prod.image} alt={prod.title} width={"100px"} /></li>
                                <li>{prod.title}</li>
                                <li>{prod.description}</li>
                                <li>{prod.price}</li>
                            </ul>
                        ))}
                    </div>
                }

            </div>
        )
    }

    export default Product