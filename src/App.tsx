import { Route, Routes,  } from "react-router-dom";
import TemplateDeafault from "./template/templateDeafault/TemplateDeafault";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Detail from "./components/detail/Detail";
import Cart from "./components/card/Cart";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='' element={<TemplateDeafault/>}>
        <Route index path='' element={<Home/>}/>
        <Route path='detail/:id' element={<Detail/>}/>   
        <Route path='login' element={<Login/>}/>
        <Route path='cart' element={<Cart/>}/>        
        <Route path='profile' element={<Profile/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
