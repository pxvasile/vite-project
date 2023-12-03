import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as productService from '../../../../../../services/productService';

import './DeleteModal.css';

export default function Modal({
  deleteProduct,
}) {

  const navigate = useNavigate();
  const { productId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);

  const backClickHandler = () => {
    navigate(`/catalog/${productId}`);
  }

  const confirmClickHandler = async () => {
    const result = await productService.delete(productId);
    console.log(result);
    deleteProduct(productId);

    navigate('/catalog');
  }

  return (
    <div className="modal">
          <div className="titleCloseBtn">
            <h1>Are You Sure You Want to Delete?</h1>

            <button onClick={backClickHandler} className="cancelBtn1">No</button>
            <button onClick={confirmClickHandler} className="cancelBtn2">Yes</button>
          </div>
        </div>
  )
};