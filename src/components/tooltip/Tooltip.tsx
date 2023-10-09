type TooltipProps = {
    text: string;
};

const Tooltip = ({ text }: TooltipProps) => {
    return (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 bg-white">
            <span>{text}</span>
        </div>
    );
};

export default Tooltip;
