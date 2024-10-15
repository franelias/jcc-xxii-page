import React, { useState } from 'react';
import { Card, Modal } from 'antd';

type CardWithModalProps = {
  url: string;
  cardTitle?: string;
  cardSubtitle?: string;
  modalTitle: string;
  modalBody: JSX.Element;
  noDarkmode?: boolean;
};

const CardWithModal: React.FC<CardWithModalProps> = ({ url, cardTitle, cardSubtitle, modalTitle, modalBody, noDarkmode }) => {
  const [hovered, setHovered] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCancel = () => {
    setModalVisible(false);
  };
  const ref = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (ref.current && noDarkmode)
			ref.current.style.setProperty("background-color", "white", "important");
	}, [noDarkmode]);
  
  return (
    <div className="flex w-full h-full flex-col">
      <Card
        className="relative overflow-hidden rounded-lg shadow-lg w-full h-[250px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setModalVisible(true)}
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          cursor: 'pointer',
          position: 'relative',
          transition: 'all 0.3s ease-in-out',
        }}
        ref={ref}
      >
        {hovered && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              color: '#000',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            Ver más
          </div>
        )}
      </Card>
      <div className="mt-3 tracking-[-0.015em]">
        <div className="text-[#151711] text-[18px] font-bold leading-tight">{cardTitle}</div>
        <div className="mt-1">{cardSubtitle}</div>
      </div>
      <Modal
        title={modalTitle}
        open={modalVisible}
        onCancel={handleCancel}
        footer={null}
        centered

      >
        <div className='flex flex-col' >
          {modalBody}
        </div>
      </Modal>
    </div>
  );
};

export default CardWithModal;
