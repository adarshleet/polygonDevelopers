import Image from "next/image";
import logo from "../public/logo.png";
import Navigation from "./Navigation";

export default function Header() {
    return (

        <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 bg-zinc-100 backdrop-blur-lg">
            <div className="container flex items-center justify-between py-6 ">

                <div className="flex items-center gap-x-4">
                    <Image src={logo} alt="logo" className="w-24 h-24 rounded-full" />
                    <h1 className="text-3xl font-bold">POLYGON DEVELEPORS</h1>
                </div>

                <Navigation />
            </div>
        </div>
    );
}