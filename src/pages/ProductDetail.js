import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate("/products")
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
