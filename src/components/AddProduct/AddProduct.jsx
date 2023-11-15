import '../AddProduct/AddProduct.module.css';

export default function AddProduct() {
    return (
        <>
            <div className="main-block">
                <form action="/">
                    <div className="title">
                        <h2>Add Product</h2>
                    </div>
                    <div className="info">    
                        <label htmlFor="product-name">Product name:</label>
                        <input type="text" name="productName" placeholder="Product name..." />

                        <label htmlFor="category">Category:</label>
                        <input type="text" name="category" placeholder="Category..." />

                        <label htmlFor="price">Price:</label>
                        <input type="number" name="price" placeholder="Price..." />
                        <select value="material">
                            <option value="mdf" placeholder="">MDF</option>
                            <option value="pdch" placeholder="">PDCH</option>
                            <option value="solid-wood" placeholder="">SOLID WOOD</option>
                            <option value="pallets" placeholder="">Pallets</option>
                        </select>
                    </div>
                    <button type="submit" href="/">
                        Submit
                    </button>
                </form>
            </div>

        </>
    )
}