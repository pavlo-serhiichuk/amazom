import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ErrorTitle} from "./Error.style";
import {useNavigate} from "react-router-dom";
import {PathEnum} from "../../utils/paths";

const ErrorPage = () => {
    const {error} = useTypedSelector(state => state.product)
    const navigate = useNavigate()

    if (!error) {
        navigate(PathEnum.MAIN)
    }

    return (
        <div>
            <ErrorTitle>
                Error: {error}
            </ErrorTitle>

        </div>
    );
};

export default ErrorPage;