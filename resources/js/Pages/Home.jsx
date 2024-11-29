import Ads from "@/Components/Home/Ads";
import Categories from "@/Components/Home/Categories";
import Header from "@/Components/Home/Header";
import News from "@/Components/Home/News";
import OurFeatures from "@/Components/Home/OurFeatures";
import Products from "@/Components/Home/Products";
import Subscription from "@/Components/Home/Subscription";
import React from "react";

export default function Home() {
    return (
        <div className="Home">
            <Header/>
            <OurFeatures/>
            <Products/>
            {/* <Categories/>    */}
            <Ads/>
            <News/>
            <Subscription/>
        </div>
    );
}
