import { useParams, useHistory } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    const history = useHistory();

    const clickHandler = () => {
        history.push("/products")
    }
    return (
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
            <button onClick={clickHandler}>Go Back</button>
        </section>
    )
}

export default ProductDetail;
