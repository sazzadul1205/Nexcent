import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Banner3 from "../Banner3/Banner3";
import Clients from "../Clients/Clients";
import Community from "../Community/Community";
import CommunityUpdate from "../CommunityUpdate/CommunityUpdate";
import Customer from "../Customer/Customer";
import Demo from "../Demo/Demo";
import Helpings from "../Helping/Helpings";


const Home = () => {
    return (
        <div className="bg-white">
            <Banner></Banner>
            <Clients></Clients>
            <Community></Community>
            <Banner2></Banner2>
            <Helpings></Helpings>
            <Banner3></Banner3>
            <Customer></Customer>
            <CommunityUpdate></CommunityUpdate>
            <Demo></Demo>
        </div>
    );
};

export default Home;    