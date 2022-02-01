import { CircularProgress } from "@material-ui/core";
import "./SpinerStyle.scss";

const Spinner = () => (
  <div className="spinner">
    <CircularProgress />
  </div>
);

export default Spinner;
