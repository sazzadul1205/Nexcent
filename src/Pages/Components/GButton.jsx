import { Link } from "react-router-dom";

const GButton = ({ content, url }) => {
    return (
        <div>
            <Link to={url}>
                <button className="w-32 h-12 bg-[#4CAF4F] text-sm text-white p-2 rounded-md">{content}</button>
            </Link>
        </div>
    );
};

export default GButton;