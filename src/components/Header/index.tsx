import React from "react";
import { Layout } from "antd";
import lamiImg from "../../assets/lambda_transparente.png";

import "./styles.scss"

const Header: React.FC = () => {
    const { Header } = Layout;

    return (
        <Header
            className="bg-[--secondary-color] "
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 20,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div
                className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit"
                style={{ backgroundImage: `url(${lamiImg})` }}
            ></div>
            <div className="mr-4 text-2xl font-black leading-tight" style={{marginLeft: -15}}>JCC XXII</div>
        </Header>
    );
};

export default Header