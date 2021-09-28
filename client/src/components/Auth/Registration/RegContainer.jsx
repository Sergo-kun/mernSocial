import React from 'react';
import Reg from "./Reg";
import {connect} from "react-redux";
import {registrationThunk} from "../../../reducers/auth-reducer";

const RegFront = (props) => {
    return (
        <>
         <Reg registrationThunk={props.registrationThunk}/>
        </>
    );
}





const RegContainer = connect(null, {registrationThunk})(RegFront);

export default RegContainer