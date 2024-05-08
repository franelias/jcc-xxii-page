export type EventProps = {
    time: string;
    title: string;
    speakers?: string;
    gray?: boolean;
    onClick?: () => void;
};