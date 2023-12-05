import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useGetProductsQuery } from "../../services/productsApi";
import { Stack } from "react-bootstrap";

const Products: React.FunctionComponent = (): JSX.Element => {
  //Retrieve profile data
  const { data, isSuccess, isLoading } = useGetProductsQuery({});
  return (
    <div className="justify-content-start">
      <h2 className=" fs-2 text-capitalize login-text">Products</h2>
      {isLoading ? <div className="align-self-center">Loading...</div> : null}
      {isSuccess && <ListGroup>
        {data.map((product: any) => {
          return (
            <ListGroup.Item key={product.id}>
              <Stack direction="horizontal" className="justify-content-between">
                <span className="text-capitalize">
                  {`${product.title} - ${product.description}`}
                </span>
                <span>
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(product.price)}
                </span>
              </Stack>
            </ListGroup.Item>
          );
        })}
      </ListGroup>}
    </div>
  );
};

export default Products;
