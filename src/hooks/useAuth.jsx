import React, { use } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";

const UseAuth = () => {
	return use(AuthContext);
};

export default UseAuth;
