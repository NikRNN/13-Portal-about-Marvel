import img from "../../resources/error.gif";

const ErrorMessage = () => {
  return (
    <img
      style={{
        display: "block",
        width: "250px",
        height: "250px",
        objectFit: "contain",
        margin: "0 auto",
      }}
      src={img}
    />
  );
};
export default ErrorMessage;
