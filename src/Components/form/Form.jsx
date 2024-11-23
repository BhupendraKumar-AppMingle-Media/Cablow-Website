import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import './Form.css';

const Form = () => {

    const [popupVisible, setPopupVisible] = useState(false);

    const handlePopupShow = () => {
        setPopupVisible(true);
    };

    const navigate = useNavigate();

    const handleExpensesSubmit = (e) => {
        e.preventDefault(); // Prevents page reload
        // navigate('/expenses');
    };

    const handleExpCrossBtn = () => {
        setPopupVisible(false);
        // navigate('/expenses');
    };

    const handleExpDataSubmit = () => {
        console.log("Data was Submitted");
    };

    return (
        <div>
            {/* Trigger to show the popup */}
            <button onClick={handlePopupShow} className="btn btn-primary mt-3">Go For Ride</button>

            {/* Conditional rendering of the popup */}
            {popupVisible ? (
                <div className="background-blurColor d-flex justify-content-center align-items-center">
                    <div id="expenses-popup-form" className="p-4 bg-light rounded shadow-lg bg-warning">
                        <RxCross2 onClick={handleExpCrossBtn} className="expenses-cross-icon" style={{ cursor: 'pointer', fontSize: '24px' }} />
                        <h5 className="text-center mb-4  fw-bold">Enter Personal Details</h5>
                        <form onSubmit={handleExpensesSubmit} className="expenses-form-tag">

                            {/* First and Last Name Fields */}
                            <div className="form-row row mb-3">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="form-group row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label fw-bold">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                                </div>
                            </div>

                            {/* Mobile Number Field */}
                            <div className="form-group row mb-3">
                                <label htmlFor="inputMobile" className="col-sm-2 col-form-label  fw-bold">Mobile</label>
                                <div className="col-sm-10">
                                    <input type="tel" className="form-control" id="inputMobile" placeholder="Mobile Number" />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center  ">
                                <button onClick={handleExpDataSubmit} type="submit" className="btn btn-success  fw-bold">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Form;
