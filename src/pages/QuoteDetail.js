//QuoteDetail
import { useParams, Route } from "react-router-dom"
import Comments from "../components/comments/Comments"

const QuoteDetail = () => {
    const params = useParams()
    return (
        <section>
            <h1>Quote Detail Page</h1>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments></Comments>
            </Route>
        </section>
    )
}

export default QuoteDetail;



