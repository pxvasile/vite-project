import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../contexts/authContext";
import Path from '../../paths';

export default function Logout() {
    const navigate = useNavigate();
    const { logoutSubmitHandler } = useContext(AuthContext);

    return(
        navigate(Path.Home)
    )
};