const ServiceItem = ({ title, description, Icon, index}) => {

const margin = index === 1 ? "mt-[60px]" : index === 2 ? "mt-[120px]" : index === 3 ? "mt-[-80px]" : index === 4 ? "mt-[-40px]" : "mt-[20px]"

    return (
        <div className={`p-[20px] max-sm:w-[90%] max-lg:w-[100%] lg:p-[50px] max-w-[415px] max-[1400px]:w-[29.64vw] lg:h-[330px] border-[2px] border-secondary1 rounded-[16px] text-left flex flex-col justify-center ${margin} max-lg:mt-[20px] mx-[10px]`}>
            <div className="p-[12px] bg-secondary2 inline-flex w-fit h-fit mb-[20px]">
                <Icon className="w-[26px] h-[26px] text-background" />
            </div>

            <p className="text-[24px] font-[700] leading-[34px] mb-[12px]">
                {title}
            </p>
            <p className="leading-[26px]">{description}</p>
        </div>
    );
};

export default ServiceItem;
