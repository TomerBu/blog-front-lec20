import {RingLoader} from "react-spinners";

const Spinner = () => {
  return <div className="flex items-center justify-center">
    <RingLoader size={200} color="red" speedMultiplier={2}/>
  </div>;
};

export default Spinner;
