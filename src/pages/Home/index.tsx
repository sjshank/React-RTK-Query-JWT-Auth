import React from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

//Home screen component
const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <Stack direction="vertical" className="justify-content-center">
      <div className="align-self-center ">
        <header className="text-center ">
          <h1>Welcome to React RTK JWT Authentication!</h1>
        </header>
        <main className="text-center ">
          <p className="fs-5">
            This application is designed & developed by Saurabh Shankariya. <br/>
            Driven by <span className="bd-highlight p-1" style={{backgroundColor:'bisque', fontWeight:500}}>React + Redux-RTK Query + JWT + React-Router-Dom</span>
          </p>
          <p className="fs-5">
            Check out more projects on Github{" "}
            <a href="https://github.com/sjshank" target="_blank">
              SJSHANK
            </a>
          </p>
        </main>
        <footer className="text-center ">
          <Link to="/login" className="font-monospace bd-highlight fs-3">
            Proceed to Login
          </Link>
        </footer>
      </div>
    </Stack>
  );
};

export default Home;
