import React from "react";
import { Layout } from "antd";
import {
    BiLogoInstagram,
    BiLogoYoutube,
} from "react-icons/bi";

import "./styles.scss"
import Link from "../Link";

const Header: React.FC = () => {
    const { Header } = Layout;

    return (
        <Header
            className="bg-[--secondary-color] justify-between"
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 20,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div className="mr-4">JCC 2024</div>

            <div className="flex c">
                <span className="transition-colors mr-4 hover:text-pink-700">
                    <Link url="https://www.instagram.com/jccfceia">
                        <BiLogoInstagram className="hover:text-pink-700" size={24} />
                    </Link>
                </span>
                <span className="transition-colors  hover:text-pink-700">
                    <Link url="https://www.youtube.com/channel/UC-CReVEx4-3AfJOH1Tr-udw">
                        <BiLogoYoutube className="hover:text-pink-700" size={24} />
                    </Link>
                </span>
            </div>

        </Header>
    );
};

export default Header