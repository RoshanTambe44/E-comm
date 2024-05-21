import Navbar from "./Components/Navbar";
import ProCard from "./Components/ProCard";
import Cart from "./Components/Cart";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Wholecomponent from "./Components/wholecomponent";
import Carousel from "./Components/Carousel";
import Addproduct from "./Components/addproduct";
import Adminpage from "./pages/adminpage";
import Transectionsuccess from "./pages/transectionsuccess";
import NewsSlider from "./Components/newslider";
import Footer from "./Components/footer";


const App = () => {
  const [prodiv, setProdiv] = useState(true);
  const [proRight, setProRight] = useState(true);
  const [cartProduct, setCartProduct] = useState([]);
  const [cartState, setCartState] = useState(true);
  const [data, Setdata] = useState([]);
  const [Record, SetRecord] = useState([]);
  const [handlebtn, setHandlebtn] = useState(true);
  const [uname, setUname] = useState("");
  const [uid, setUid] = useState("");
  const [updated, setUpdated] = useState(true);
  const [purchased, setPurchased] = useState(false);
  const [roll, setRoll] = useState();
  const [prohometogler, setProHomeTogler ] = useState(true) 

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.post(
          "https://e-comm-backend-qal7.onrender.com/api/getcartproduct",
          { id: uid }
        );
        setCartProduct(response.data.data.cartProducts);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    if (uid) {
      fetchCartData();
    }
  }, [uid]);

  useEffect(() => {
    axios
      .get("https://e-comm-backend-qal7.onrender.com/api/getproducts")
      .then((res) => {
        Setdata(res.data);
        SetRecord(res.data);
      })
      .catch((err) => console.log(err.toJSON().message));
  }, [updated]);

  const handler = (event) => {
    SetRecord(
      data.filter((f) => f.title.toLowerCase().includes(event.target.value))
    );
  };

  function cartHandler() {
    setCartState(false);
    // setCartProduct(  )
  }

  function cutCartHandler() {
    setCartState(true);
    setProRight(true);
  }

  function productHandlerNav(e) {
    e.preventDefault();
    setProdiv(false);
    setProRight(true);
  }

  function cutHandler() {
    setProdiv(true);
    setProRight(false);
  }

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={
            <Login
              setUname={setUname}
              setUid={setUid}
              setHandlebtn={setHandlebtn}
              setRoll={setRoll}
            />
          }
        />
        <Route
          path="/"
          element={
            <Wholecomponent>
              
              <Navbar
                uid={uid}
                uname={uname}
                setUname={setUname}
                setHandlebtn={setHandlebtn}
                handlebtn={handlebtn}
                productHandlerNav={productHandlerNav}
                cartProduct={cartProduct}
                cartHandler={cartHandler}
                handler={handler}
                roll={roll}
                setProHomeTogler={setProHomeTogler}
              />
              {prohometogler ? <><Carousel /><NewsSlider data={ data} /><Footer/> </> :
              <ProCard
                cutCartHandler={cutCartHandler}
                cartProduct={cartProduct}
                setCartProduct={setCartProduct}
                setPurchased={setPurchased}
                uid={uid}
                prodiv={prodiv}
                setHandlebtn={setHandlebtn}
                handlebtn={handlebtn}
                setProdiv={setProdiv}
                cutHandler={cutHandler}
                setProRight={setProRight}
                proRight={proRight}
                Record={Record}
                SetRecord={SetRecord}
                purchased={purchased}
                handler={handler}
                cartState={cartState}
              />}
            </Wholecomponent>
          }
        />
        <Route
          path={`/adminpanel/${uid}/addproduct`}
          element={<Addproduct uid={uid} />}
        />
        <Route
          path={"/cartproducts"}
          element={
            <Cart
              cutCartHandler={cutCartHandler}
              cartProduct={cartProduct}
              setCartProduct={setCartProduct}
              uid={uid}
              setPurchased={setPurchased}
            />
          }
        />
        <Route
          path="/adminpanel/:id"
          element={<Adminpage uid={uid} uname={uname} />}
        />
        <Route path="/transectionsuccess" element={<Transectionsuccess />} />
        <Route
          path="/products"
          element={
            <ProCard
              cutCartHandler={cutCartHandler}
              cartProduct={cartProduct}
              setCartProduct={setCartProduct}
              setPurchased={setPurchased}
              uid={uid}
              prodiv={prodiv}
              setHandlebtn={setHandlebtn}
              handlebtn={handlebtn}
              setProdiv={setProdiv}
              cutHandler={cutHandler}
              setProRight={setProRight}
              proRight={proRight}
              Record={Record}
              SetRecord={SetRecord}
              purchased={purchased}
              handler={handler}
              cartState={cartState}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
