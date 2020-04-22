import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import Services from "../components/Services";
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home(){
    return(
    <>
        <Hero>
            {/* <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                <Link to="/rooms" className="btn-primary">
                    Our rooms
                </Link>
            </Banner> */}
            <div className="banner">
                <h1>Home Page</h1>
                <div></div>
                <p>home page</p>
                <Link to="/rooms" className="btn-primary">
                    Our rooms
                </Link>
            </div>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        
    </>
    );
    
}