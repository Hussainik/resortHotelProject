import React from "react";
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"

export default function Error(){
    return <Hero>
        {/* <Banner title="404" subtitle="page not found">
            <Link to="/" className="btn-primary">
                return home
            </Link>
        </Banner> */}
         <div className="banner">
            <h1>404</h1>
            <div></div>
            <p>Page not found</p>
            <Link to="/" className="btn-primary">
               Return Home
            </Link>
        </div>
    </Hero>;
}