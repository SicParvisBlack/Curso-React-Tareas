const ProductItem = ({ product }) => {
    const { name, description, ingredients } = product;
    return (
        <div className={`p-4 rounded-xl w-[150px] ${
            product.ingredients === "" ? "bg-red-700" : "bg-slate-200"
          }`}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{ingredients}</p>
        </div>
    );
}

export default ProductItem;