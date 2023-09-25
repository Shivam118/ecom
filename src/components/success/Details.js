/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

const Details = ({ Order }) => {
  console.log(Order);
  return (
    <>
      <div>
        <MDBContainer>
          <h3
            style={{
              color: "#a8729a",
              fontSize: "16px",
              textTransform: "capitalize",
            }}
          >
            Order Information
          </h3>
          <br />
          <MDBRow>
            <MDBCol md="6" className="mb-4">
              <h4>Billing Address</h4>
              <p style={{ fontSize: "14px" }}>
                {Order.billingInfo.address}, {Order.billingInfo.city},{" "}
                {Order.billingInfo.state}, {Order.billingInfo.pinCode}
              </p>
            </MDBCol>
            <MDBCol md="6" className="mb-4">
              <h4>Shipping Address</h4>
              <p style={{ fontSize: "14px" }}>
                {Order.shippingInfo.address}, {Order.shippingInfo.city},{" "}
                {Order.shippingInfo.state}, {Order.shippingInfo.pinCode}
              </p>
            </MDBCol>
            <hr />
            <MDBCol md="12">
              <h4>Payment Details</h4>
              <br />
              <p style={{ fontSize: "13px" }}>
                <strong>Mode of Payment:</strong>{" "}
                {Order.paymentDetails.modeOfPayment}
                <br />
                <strong>Payment Id :</strong> {Order.paymentDetails.paymentId}
                <br />
                <strong>Order Id:</strong> {Order.paymentDetails.orderId}
              </p>
            </MDBCol>
          </MDBRow>
          <br />
        </MDBContainer>
        <table style={{ width: "100%" }}>
          <tbody style={{ fontSize: "14px", textAlign: "right" }}>
            <tr>
              <td>
                <strong>Subtotal:</strong> $
                {Order.cartDetails.total_price / 100}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Shipping Fee:</strong> $
                {Order.cartDetails.shipping_fee / 100}
              </td>
            </tr>
            <tr>
              <td>
                <strong style={{ color: "green" }}>
                  Total Amount Paid: $
                  {Order.cartDetails.total_price / 100 +
                    Order.cartDetails.shipping_fee / 100}
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Details;
