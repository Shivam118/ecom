import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import Greeting from "../components/success/Greeting";
import Items from "../components/success/Items";
import Details from "../components/success/Details";
import { useOrderContext } from "../context/ordercontext";
import { useCartContext } from "../context/cartcontext";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const { state } = useOrderContext();
  const navigate = useNavigate();
  const { clearCart } = useCartContext();

  useEffect(() => {
    setTimeout(() => clearCart(), 10000);
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {state ? (
        <section
          className="h-100 gradient-custom"
          style={{ backgroundColor: "#eee" }}
        >
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="10" xl="8">
                <MDBCard style={{ borderRadius: "10px" }}>
                  <Greeting />
                  <MDBCardBody className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p
                        className="fw-normal mb-0"
                        style={{ color: "#a8729a", fontSize: "16px" }}
                      >
                        Order Details
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "14px" }}
                      >
                        Order Id : {state.paymentDetails.paymentId}
                      </p>
                    </div>
                    <Items cart={state.cartDetails.cart} />
                    <Details Order={state} />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

export default Success;
