// import Link from "next/link";
import { useUser } from "../context/user";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { supabase } from "../utils/supabase";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const { user } = useUser();
    const [ userInfo, setUserInfo ] = useState(null);
    const userLogout = useSelector((state) => state.userLogout);
    const navigate = useNavigate();
    const [checkCookies, setCheckCookies] = useState(true);

    const [signedIn, setSignedIn] = useState(true);

    useEffect(() => {
        console.log(user);
        setUserInfo(user);
    }, [user]);


    const handleLogout = async () => {  
        try{
            setUserInfo(null);
            // router.push("/");
            navigate("/");
            setSignedIn(false);
            await supabase.auth.signOut();
        }catch(error){
            console.log(error);
        }
    }

    return (
        <header className="header">
            <div className="brand-name">
                <a href="/">Ecommerce Web App 1432</a>
            </div>
            <div className="header-links">
                {
                    userInfo
                    ?
                    <div>
                        <a href="/cart">Cart</a>
                        <a href="/products">Products</a>
                        { user ? 
                            <a href="/profile">My Profile</a>
                        :
                            null
                        }
                        <a href="/"><a className="signout-link" onClick={(e) => handleLogout() }>Sign Out</a></a>
                    </div>
                    :
                    <div className="signin-link">
                        <a href="/signin">Sign In</a>
                    </div>
                }                
            </div>
        </header>
    );
};

export default Nav;