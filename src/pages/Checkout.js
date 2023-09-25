/* eslint-disable react-hooks/exhaustive-deps */
import { MDBContainer } from "mdb-react-ui-kit";
import BillingAddress from "../components/checkout/BillingAddress";
import ShippingAddress from "../components/checkout/ShippingAddress";
import { useOrderContext } from "../context/ordercontext";
import SideCart from "../components/checkout/SideCart";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { state } = useOrderContext();
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("orderDetails", JSON.stringify(state));
    navigate("/success");
  };
  return (
    <>
      <MDBContainer className="my-5 py-5" style={{ maxWidth: "1100px" }}>
        <SideCart />
        <form onSubmit={HandleSubmit}>
          <BillingAddress />
          <ShippingAddress />
          <div className="text-center">
            <button
              type="Submit"
              className="btn btn-success btn-block"
              style={{ height: "50px", fontSize: "16px", borderRadius: "10px" }}
            >
              Place order
            </button>
          </div>
        </form>
      </MDBContainer>
    </>
  );
};

export default Checkout;
