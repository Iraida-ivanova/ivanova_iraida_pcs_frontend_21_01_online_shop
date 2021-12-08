import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import bannerImg from "../../mock3";
import React from "react";
import contacts from "../../contacts";
import Footer from "../Footer/Footer";

function IndexPage() {
    return (
        <div>
            <Banner banner={bannerImg}/>
        </div>
    )
}
export default IndexPage