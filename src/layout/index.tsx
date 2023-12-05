import React from "react";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Container, Stack } from "react-bootstrap";

//It acts like a shared layout for app
//Uses outlet to render all the route content here
const AppLayout: React.FunctionComponent<any> = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Container className="main-content">
        <Stack direction="vertical" gap={2} className="justify-content-center">
          <Outlet />
        </Stack>
      </Container>
      <Footer />
    </div>
  );
};

export default AppLayout;
