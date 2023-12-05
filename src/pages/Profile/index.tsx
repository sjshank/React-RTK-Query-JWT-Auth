import { Card, Stack } from "react-bootstrap";
import { useGetProfileQuery } from "../../services/profileApi";
import React from "react";
import { Link } from "react-router-dom";

const Profile : React.FunctionComponent = () : JSX.Element => {

  //Retrieve profile data 
  const { data, isLoading, isSuccess } = useGetProfileQuery({});

  return (
    <Stack direction="vertical" gap={2} className="justify-content-center">
      <h2 className="align-self-center fs-3 text-capitalize login-text">
        Welcome {isSuccess && data.name}
      </h2>

      {isLoading ? <div className="align-self-center">Loading...</div> : null}
      {isSuccess && (
        <Card className="align-self-center">
          <Card.Img variant="top" alt="avatar" src={data.avatar} />
          <Card.Body>
            <Card.Title>{data.email}</Card.Title>
            <Card.Text>{data.role}</Card.Text>
            <Card.Text role="button" className="text-center" style={{textDecoration:'underline', fontWeight:500}}>
              <Link to="/products">Check All Prodcuts</Link></Card.Text>
          </Card.Body>
        </Card>
      )}
    </Stack>
  );
};

export default Profile;
