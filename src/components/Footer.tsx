import React from "react";
import Stack from "react-bootstrap/Stack";

//App footer
const Footer: React.FunctionComponent<any> = (): JSX.Element => {
  return (
    <footer>
      <hr />
      <Stack direction="horizontal" gap={3} className="justify-content-center">
        <div className="p-3 align-self-center fs-6 login-text">
          Author Saurabh Shankariya
        </div>
      </Stack>
    </footer>
  );
};

export default Footer;
