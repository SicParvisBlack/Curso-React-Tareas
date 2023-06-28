const ProductForm = ({onSubmit}) => {
    const submit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form[0].value;
        const description = form[1].value;
        const ingredients = form[2].value;
        const product = { name, description, ingredients};
        onSubmit(product);
        form.reset();
    }

    return (
        <form onSubmit = {submit}>
            <input type="text" placeholder = "Nombre"/>
            <input type="text" placeholder = "Descripción"/>
            <input type="text" placeholder = "Ingredientes"/>
            <button type="submit">Agregar</button>
        </form>
    );
}

export default ProductForm;