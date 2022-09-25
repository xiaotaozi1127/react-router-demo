import {Route, Navigate, Routes} from 'react-router-dom';

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
    return (
        <div>
            <MainNavigation/>
            <Routes>
                <Route path='/' exact element={<Navigate to="/welcome"/>} />
                <Route path='/welcome/*' element={ <Welcome/>}>
                    <Route path="new-user" element={<h1>welcome, new user!</h1>}></Route>
                </Route>
                <Route path='/products/*' element={ <Products/>} />
                <Route path='/products/:productId' element={<ProductDetail/>} />
            </Routes>
        </div>
    );
}

export default App;
