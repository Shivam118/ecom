import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, SetUser] = useState(null);
  const navigate = useNavigate();
  const getUserInfo = async () => {
    if (localStorage.getItem("authToken") === "12345") {
      SetUser({
        name: "Test User",
        email: "test@test.com",
      });
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Wrapper style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <br />
                <br />
                <p className="text-muted mb-1">{user ? user.name : ""}</p>
                <p className="text-muted mb-4">{user ? user.email : ""}</p>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  label {
    cursor: pointer;
    padding: 8px;
    background-color: #f0f0f0;
    border-radius: 4px;
    margin-right: 10px;
  }

  label:hover {
    background-color: #d0d0d0;
  }

  label.active {
    background-color: #007bff;
    color: #fff;
  }
`;
export default Profile;
