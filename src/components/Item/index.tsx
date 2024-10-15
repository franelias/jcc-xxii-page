import clsx from "clsx";
import lamiImg from "../../assets/lambda_transparente.png";
import { Modal } from "antd";
import { useState } from "react";
import { useIntl } from "react-intl";

export enum ItemType {
  Activity = "activity",
  Talk = "talk",
  Workshop = "workshop",
}

export type ItemProps = {
  title: string;
  subtitle?: string;
  speaker?: string;
  type: ItemType;
  description?: string;
  logo?: string;
};

const Item = ({
  title,
  subtitle,
  speaker,
  type,
  description,
  logo,
}: ItemProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const intl = useIntl();

  return (
    <div>
      <div
        className={clsx(
          "flex items-center gap-4 px-4 py-3 justify-between mb-2 rounded-lg",
          type === "talk" && "bg-white",
          type === "activity" && "bg-[#f8f1d9]"
        )}
      >
        <div className="flex items-center gap-4">
          <div
            className="hidden md:block bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit"
            style={{ backgroundImage: `url(${logo || lamiImg})` }}
          ></div>
          <div className="flex flex-col justify-center">
            <p className="md:hidden text-[#151711] text-base font-medium leading-normal line-clamp-1">
              {title} {speaker}
            </p>
            <p className="md:hidden text-[#151711]  font-medium leading-normal line-clamp-1">
              {speaker}
            </p>

            <p className="hidden md:block text-[#151711] text-base font-medium leading-normal line-clamp-1">
              {title} {speaker && "-"} {speaker}
            </p>
            <p className="text-[#7a8764] text-sm font-normal leading-normal line-clamp-2">
              {subtitle}
            </p>
          </div>
        </div>
        {description && (
          <>
            <div className="shrink-0 hidden md:block">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f3f4f0] text-[#151711] text-sm font-medium leading-normal w-fit"
                onClick={() => setModalVisible(true)}
              >
                <span className="truncate">Mas info</span>
              </button>
            </div>
            <div className="md:hidden w-4/5 h-16 absolute" onClick={() => setModalVisible(true)}></div>
          </>
        )}
      </div>

      <Modal
        title={<p className="text-center">{title}</p>}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        centered
        closable={false}
      >
        <div className="flex flex-col text-center">
          {intl.formatMessage(
            { id: "dummyId", defaultMessage: description },
            { br: <br />, hr: <hr /> }
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Item;
