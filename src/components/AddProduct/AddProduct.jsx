import '../AddProduct/AddProduct.module.css';

export default function AddProduct() {
    return (
        <>
            <div className="main-block">
                <form action="/">
                    <div className="title">
                        <i className="fas fa-pencil-alt" />
                        <h2>Add Product</h2>
                    </div>
                    <div className="info">
                        <input className="fname" type="text" name="name" placeholder="Full name" />
                        <input type="text" name="name" placeholder="Email" />
                        <input type="text" name="name" placeholder="Phone number" />
                        <input type="password" name="name" placeholder="Password" />
                        <select>
                            <option value="course-type" selected="">
                                Course type*
                            </option>
                            <option value="short-courses">Short courses</option>
                            <option value="featured-courses">Featured courses</option>
                            <option value="undergraduate">Undergraduate</option>
                            <option value="diploma">Diploma</option>
                            <option value="certificate">Certificate</option>
                            <option value="masters-degree">Masters degree</option>
                            <option value="postgraduate">Postgraduate</option>
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