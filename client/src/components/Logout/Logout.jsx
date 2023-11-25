import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../../services/authService';
import Path from '../../paths';
import AuthContext from "../../contexts/authContext";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutSubmitHandler } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() => {
                logoutSubmitHandler();
                navigate(Path.Home);
            })
            .catch(() => navigate(Path.Home));
    }, []);
 
    return null;
};