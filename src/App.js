import {Route, Switch, Redirect} from 'react-router-dom';

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
    return (
        <div>
            <MainNavigation/>
            <Route path='/welcome'>
                <Welcome/>
            </Route>
            <Route path='/products' exact>
                <Products/>
            </Route>
            <Route path='/products/:productId'>
                <ProductDetail/>
            </Route>
        </div>
    );
}

export default App;
