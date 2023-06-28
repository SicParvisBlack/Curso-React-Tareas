import { useState } from "react";
import { useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductItem from "./ProductItem";

const ProductList = () => {

    const [productCount, setProductCount] = useState(3);
    const [products, setProducts] = useState([
        {
            name: "Pollo Teriyaki",
            description: "Descripción 1",
            ingredients: "Pollo",
        },
        {
            name: "Carne Asada",
            description: "Descripción 2",
            ingredients: "Carne",
        },
        {
            name: "Tacos",
            description: "Descripción 3",
            ingredients: "Tortillas",
        },
    ]);

    const addProduct = (product) => {
        setProducts([...products,product]);
    };

    useEffect(() => {
        setProductCount(products.length);
    }, [products, productCount]);

    return (
    <>
        <h1> Mi lista de recetas ({productCount} Recetas)</h1>
        <br/>
        <ProductForm onSubmit = {addProduct} />
        <br/>
        <ul className="flex gap-4 py-4">
            {products.map((product) => (
                <li>
                    <ProductItem product = {product} />
                </li>
                ))}
        </ul>
    </>
    );
};

export default ProductList;