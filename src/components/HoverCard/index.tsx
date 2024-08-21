import React from 'react';
import { Card } from 'antd';

type HoverCardProps = {
    url: string;
    title?: string;
    subtitle?: string;
    link?: string;
};

const HoverCard: React.FC<HoverCardProps> = ({ url, title, subtitle, link }) => {
    return (
        <div className="flex flex-col md:mt-0 mb-2 w-full">
            <Card
                onClick={link ? () => window.open(link) : undefined}
                className="relative overflow-hidden rounded-lg shadow-lg"
                style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: 'contain',
                    aspectRatio: '2240 / 1000',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    cursor: link ? 'pointer' : 'default',
                    // height: '250px', // Set a fixed height to ensure the image fills the card
                    transition: 'all 0.3s ease-in-out',
                }}
            >
            </Card>
            <div className="mt-3 tracking-[-0.015em]">
                <div className="text-[#151711] text-[18px] font-bold leading-tight">{title}</div>
                <div className="mt-1">{subtitle}</div>
            </div>
        </div>
    );
};


export default HoverCard;
