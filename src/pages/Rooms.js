import React from 'react';
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import { Link } from "react-router-dom"
import RoomCantainer from "../components/RoomCantainer"

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                {/* <Banner title="our rooms">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner> */}
                <div className="banner">
                    <h1>Our Rooms</h1>
                    <div></div>
                    <Link to="/" className="btn-primary">
                        return home
                    </Link>
                </div>
            </Hero>
            <RoomCantainer>

            </RoomCantainer>
        </>
    );
};

export default Rooms;