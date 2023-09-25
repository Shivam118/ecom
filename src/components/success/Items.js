import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
const Items = ({ cart }) => {
  return (
    <>
      <div>
        {cart.map((element) => {
          return (
            <div>
              <MDBCard className="shadow-0 border mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="3">
                      <MDBCardImage src={element.image} fluid alt="Phone" />
                    </MDBCol>
                    <MDBCol
                      md="3"
                      className="text-center d-flex justify-content-center align-items-center"
                    >
                      <p
                        style={{
                          fontSize: "16px",
                          textTransform: "capitalize",
                        }}
                      >
                        {element.name}
                      </p>
                    </MDBCol>
                    <MDBCol
                      md="2"
                      className="text-center d-flex justify-content-center align-items-center"
                    >
                      <p
                        style={{
                          fontSize: "16px",
                          textTransform: "capitalize",
                        }}
                      >
                        Qty: {element.quantity}
                      </p>
                    </MDBCol>
                    <MDBCol md="2" className="d-flex align-items-center">
                      <p
                        style={{
                          fontSize: "16px",
                          textTransform: "capitalize",
                          color: "green",
                        }}
                      >
                        ${element.price / 100}
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Items;
