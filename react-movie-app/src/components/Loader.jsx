import { ProgressBar } from "react-loader-spinner";

const Loader = () => (
  <ProgressBar
    color="#4fa94d"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "25%",
    }}
  />
);

export default Loader;
