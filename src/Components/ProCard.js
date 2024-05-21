import { useState, useEffect } from "react";
import "./ProCard.css";
import ProCardNavbar from "./proCardNavbar";
import { Link } from "react-router-dom";

const ProCard = ({
  prodiv,
  cutCartHandler,
  cartProduct,
  setCartProduct,
  setPurchased,
  cartState,
  handler,
  purchased,
  setProdiv,
  cutHandler,
  setProRight,
  proRight,
  Record,
  SetRecord,
  handlebtn,
  setHandlebtn,
  uid,
}) => {
  const IDs = cartProduct.map((product) => product.productId);

  const [product, setProduct] = useState([
    { image: "", title: "", price: "", qty: "" },
  ]);
  const [qty, setQty] = useState();
  //  const [userCartProduct, setUserCartProduct] = useState();
  //  const [title, setTitle] = useState();
  //  const [discription, setDiscription] = useState();
  //  const [price, setPrice] = useState();
  //  const [image, setImage] = useState();
  const [qty123, setQty123] = useState(1);

  //handel products --------------------------------------------

  function removeCartPanel() {
    setProRight(true);
  }

  const productHandler = (e) => {
    setProduct(
      Record.filter((records) => records.title.includes(e.target.innerText))
    );
    setProRight(false);
    setProdiv(true);
  };

  useEffect(() => {
    // This block will run after setProduct has updated the state
    if (product.length > 0) {
      setQty(product[0].price);
      setQty123(1);
    }
  }, [product]);

  function qtyAdd(e) {
    setQty123(e.target.value);
    setQty(parseInt(e.target.value, 10) || 1);
    menualQty(e.target.value);
  }

  function menualQty(qtyValue) {
    setQty(product[0].price * qtyValue);
  }

  const increaseQuantity = () => {
    setQty(qty + Math.round(product[0].price));
    setQty123(Number(qty123) + 1);
  };

  const decreaseQuantity = () => {
    if (qty > 1) {
      setQty(qty - Math.round(product[0].price));
      setQty123(Number(qty123) - 1);
    }
  };

  const cartHandler = async () => {
    try {
      const updatedProducts = {
        productId: product[0]._id,
        image: product[0].image,
        price: product[0].price,
        title: product[0].title,
        category: product[0].category,
        description: product[0].description,
        qty: qty123,
        subtotal: Math.round(qty),
        purchased: purchased,
      };

      // Check if the product already exists in the cart
      const productExists = cartProduct.some(
        (item) => item.productId === updatedProducts.productId
      );

      if (productExists) {
        // Show error alert if product already exists in the cart
        alert("This product is already in your cart.");
      } else {
        // If the product doesn't exist, add it to the cart
        await setCartProduct((prevProducts) => [
          ...prevProducts,
          updatedProducts,
        ]);

        await fetch("https://e-comm-backend-qal7.onrender.com/api/addcartproduct", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: uid, cartProducts: updatedProducts }),
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="product-main">
      <Link
        className="cart-button-div"
        to="/cartproducts"
        style={{
          position: "fixed",
          backgroundColor: "greenyellow",
          padding: "10px",
          textDecoration: "none",
          color: "black",
          borderRadius: "50%",
          zIndex: "100",
          top: "10px",
          right: "10px",
          cursor: "pointer",
        }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          <span className="cart-count">{cartProduct.length}</span>
        </div>
      </Link>
      <ProCardNavbar handler={handler} />
      <div className="main-back">
        {proRight === true ? (
          <div className="main-card " style={{ width: "100%" }}>
            {Record.map((user) => (
              <div key={user._id} className="card width-20 mt-5 me-2" id="card2"  style={{cursor:"pointer", height:"500px"}}  >
                  <img src= {user.image} className="card-img-top" style={{height:"300px"}} alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title" onClick={productHandler}>{user.title}</h5>
                    <button className="btn btn-primary mt-3" id="btn" >${user.price}</button>
                  </div>
              </div>
              
            ))}
          </div>
        ) : (
          <div
            className="main-card "
            style={handlebtn === false ? { width: "80%" } : { width: "100%" }}
          >
            {Record.map((user) => (
              <div
                key={user._id}
                className="card width-20 mt-5 me-2"
                id="card2"
                style={{ cursor: "pointer", height: "500px" }}
              >
                <img
                  src={user.image}
                  className="card-img-top"
                  style={{ height: "300px" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title" onClick={productHandler}>
                    {user.title}
                  </h5>
                  {/* <p className="card-text"> {user.description} </p> */}
                  <button className="btn btn-primary mt-3" id="btn">
                    ${user.price}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {proRight === true ? (
          ""
        ) : (
          <>
            {handlebtn === false && (
              <div className="input-div">
                <div className="product-div">
                  <img
                    className="product-img"
                    src={product[0].image}
                    alt="..."
                  />
                  <h5 className="right-product-title">{product[0].title}</h5>
                  <button className="right-product-price">
                    ${Math.round(product[0].price)}
                  </button>
                  <button className="updated-price">
                    subtotal : ${Math.round(qty)}
                  </button>
                  <br />
                  <input
                    onChange={qtyAdd}
                    min="1"
                    className="right-product-input"
                    value={qty123}
                    type="number"
                  />
                  <br />
                  <button onClick={decreaseQuantity} className="decrease-btn">
                    -
                  </button>
                  <button onClick={increaseQuantity} className="increase-btn">
                    +
                  </button>
                  <div className="d-flex align-items-center justify-content-center">
                    <button
                      className="btn btn-primary right-product-add"
                      id="btn"
                      onClick={() => cartHandler()}
                    >
                      Add Cart
                    </button>
                    <button
                      className="btn btn-primary right-product-buy"
                      onClick={removeCartPanel}
                      id="btn"
                    >
                      cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProCard;
