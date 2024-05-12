import React from "react";
import { Layout } from "antd";
import {
    BiLogoInstagram,
    BiLogoYoutube,
    BiMailSend,
    BiSolidMap,
    BiSolidPhone,
} from "react-icons/bi";

import "./styles.scss"
import Link from "../Link";

const Header: React.FC = () => {
    const { Header } = Layout;

    const items = new Array(3).fill(null).map((_, index) => ({
        key: String(index + 1),
        label: `nav ${index + 1}`,
    }));
    return (
        <Header
            className="bg-[--secondary-color] justify-between"
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div className="mr-4">JCC 2024</div>
            <div className="flex c">
                <span className="transition-colors hover:text-pink-700 mr-4">
                    <Link url="https://www.instagram.com/jccfceia">
                        <BiLogoInstagram size={24}/>
                    </Link>
                </span>
                <span className="transition-colors hover:text-pink-700">
                    <Link url="https://www.youtube.com/channel/UC-CReVEx4-3AfJOH1Tr-udw">
                        <BiLogoYoutube size={24}/>
                    </Link>
                </span>
            </div>

        </Header>
    );
};

export default Header