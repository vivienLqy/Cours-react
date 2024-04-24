import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Profil from "./Profil";
import { UserContext } from "../../Contexts/UserContext";

const index = () => {
    const { user } = useContext(UserContext)

    return (
        <div>
            {!user ? <Navigate to="/" replace={true} /> :
                <Profil user={user} />}
        </div>
    );
};

export default index;