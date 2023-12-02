export default function ProductDetailsEdit() {

    const [values, setValues] = useState({
        productName: '',
        category: '',
        price: '',
        imageUrl: '',
        material: ''
    });

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault(),

        onEditProductSubmit(values);
    }
    return (
        <form id="add" onSubmit={onSubmit}>
            <div className="form">
                <h2>EDIT Product</h2>

                <label htmlFor="productName">Product Name:</label>
                <input
                    value={values.productName}
                    onChange={onChangeHandler}
                    type="text" id="productName"
                    name="productName"
                    placeholder="Enter Product name here..."
                /><br />

                <label htmlFor="category">Category:</label>
                <input value={values.category} onChange={onChangeHandler} type="text" id="category" name="category" placeholder="Enter Category Here..." /><br />

                <label htmlFor="price">Price:</label>
                <input value={values.price} onChange={onChangeHandler} type="number" id="price" name="price" placeholder="Enter Price Here..." /><br />

                <label htmlFor="product-img">Image:</label>
                <input value={values.imageUrl} onChange={onChangeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                <label className="labelm" htmlFor="material">Material:</label>
                <select id="material" name="material" value={values.material} onChange={onChangeHandler}>
                    <option value="mdf">MDF</option>
                    <option value="pdch">PDCH</option>
                    <option value="solid-wood">Solid Wood</option>
                </select>
                <button type="submit" className="btnn" value="Edit Product">EDIT PRODUCT</button>
            </div>
        </form>
    )
}