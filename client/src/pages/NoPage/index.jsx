import { Helmet } from "react-helmet-async";

const NoPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found! Error 404</title>
      </Helmet>
    </>
  );
};

export default NoPage;
