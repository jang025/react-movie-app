import { ProgressBar } from "react-loader-spinner";

const Loader = () => (
  <ProgressBar
    visible={true}
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  />
);

export default Loader;
