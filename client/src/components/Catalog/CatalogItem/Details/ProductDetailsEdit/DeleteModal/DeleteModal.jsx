import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as productService from '../../../../../../services/productService';
import AuthContext from "../../../../../../contexts/authContext";

import './DeleteModal.css';

export default function Modal() {
  const { confirmClickHandler } = useContext(AuthContext);
  const navigate = useNavigate();
  const { productId } = useParams();

  const backClickHandler = () => {
    navigate(`/catalog/${productId}`);
  }


  return (
    <div className="modal">
          <div className="titleCloseBtn">
            <h1>Are You Sure You Want to Delete?</h1>

            <button onClick={backClickHandler} className="cancelBtn1">No</button>
            <button onClick={() => confirmClickHandler(productId)} className="cancelBtn2">Yes</button>
          </div>
        </div>
  )
};