import PacmanLoader from "react-spinners/PacmanLoader";

const Loader = () => {
    return (
        <div className="flex justify-center items-center my-10">
            <PacmanLoader color="#4CAF4F" />
        </div>
    );
};

export default Loader;