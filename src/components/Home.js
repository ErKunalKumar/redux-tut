import react from "react";

function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img src="../images/ecart.jpg" alt="ecart" />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="../images/background.jpg" alt="images1" />
        </div>
        <div className="txt-wrapper item">
          <span>I-Phone</span>
          <span>Price:$1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
