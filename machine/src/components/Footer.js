import React from "react";
import { Link } from "react-router-dom";

/*
    Purpose:
        - Display Company Info

    Restriction:
        - NIL

    Endpoints:
        - NIL

    Author:
        - Cheyanne Lim
*/

const Footer = () => {
    return (
        <footer className="bg-secondary pt-4">
            <div className="container">
                <div className="row py-4">
                    <div className="col-lg-3 col-12 align-left">
                        <Link className="navbar-brand" to="index.html">
                            <i className="bx bx-buildings bx-sm text-light" />
                            <span className="text-light h5">BATTERY</span>{" "}
                            <span className="text-light h5 semi-bold-600">L!fe</span>
                        </Link>
                        <p className="text-light my-lg-4 my-2">
                            Our company aims to do a part for the environment by recycling batteries
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                        <h2 className="h4 pb-lg-3 text-light light-300">Frontend Team</h2>
                        <ul className="list-unstyled text-light light-300">
                            <li className="pb-2">
                                <i className="bx-fw bx bx-mail-send bx-xs" />
                                <Link
                                    className="text-decoration-none text-light py-1"
                                    to="mailto:info@company.com"
                                >
                                    cheyanne.lim@geco.asia
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                        <h2 className="h4 pb-lg-3 text-light light-300">Backend Team</h2>
                            <ul className="list-unstyled text-light light-300">
                                <li className="pb-2">
                                    <i className="bx-fw bx bx-mail-send bx-xs" />
                                    <Link
                                        className="text-decoration-none text-light py-1"
                                        to="mailto:info@company.com"
                                    >
                                        alex.lim@geco.asia
                                    </Link>
                                </li>
                                <li className="pb-2">
                                    <i className="bx-fw bx bx-mail-send bx-xs" />
                                    <Link
                                        className="text-decoration-none text-light py-1"
                                        to="mailto:info@company.com"
                                    >
                                        liu.fang@geco.asia
                                    </Link>
                                </li>
                                <li className="pb-2">
                                    <i className="bx-fw bx bx-mail-send bx-xs" />
                                    <Link
                                        className="text-decoration-none text-light py-1"
                                        to="mailto:info@company.com"
                                    >
                                        xuhong.lew@geco.asia
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-100 bg-primary py-3">
                    <div className="container">
                        <div className="row pt-2">
                        <div className="col-lg-6 col-sm-12">
                            <p className="text-lg-start text-center text-light light-300">
                                © Copyright 2022 Battery Life Company. All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <p className="text-lg-end text-center text-light light-300">
                                Cheyanne, Alex, Liu Fang, Xu Hong
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
