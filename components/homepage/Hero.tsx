import Image from "next/image";

const mockFields = ["فیتنس", "یوگا", "رزمی", "دویدن", "دوچرخه سواری", "شنا", "پیلاتس", "مدیتیشن", "تمرینات گروهی", "دویدن", "دوچرخه سواری", "شنا"];

const Hero = () => {
    return (
        <div className="flex relative items-start justify-between min-h-[997px] w-full max-w-desktop mx-auto px-[120px]">
            <div className="relative z-2 pt-[250px]">
                <p className="text-[36px] font-medium text-nowrap text-primary-main">دسترسی به فضاهای تمرینی</p>
                <p className="text-[96px] my-5 leading-[196px] font-bold text-nowrap text-primary-main">در سراسر شهر</p>
                <p className="text-[36px] font-medium text-nowrap text-secondary-main">بدون وابستگی به یک مکان یا یک سبک تمرین</p>
            </div>
            <Image unoptimized loading="eager" src="/images/heroImage.jpg" className="z-1 absolute left-0" width={924} height={777} alt="cityrep" />
            <div className="w-full overflow-hidden absolute flex items-center justify-center h-[280px] z-10 -bottom-[0] left-0">
                <div className="absolute flex items-center justify-center left-[-20px] w-[calc(100%+40px)] h-[74px] bg-primary-800 z-10 rotate-z-[8deg]">
                    {
                        mockFields.map((field, index) => (
                            <span key={index} className="flex text-nowrap justify-center gap-8 items-center mr-4 px-2 py-2 font-semibold">
                                {field}
                                <div className="w-[6px] h-[6px] rounded-full bg-white" />
                            </span>
                        ))
                    }
                </div>
                <div className="absolute flex items-center justify-center text-[#1D1D1D] left-[-20px] w-[calc(100%+40px)] h-[74px] bg-[#767676] z-10 rotate-z-[-8deg]">
                    {
                        mockFields.map((field, index) => (
                            <span key={index} className="flex text-nowrap justify-center gap-8 items-center mr-4 px-2 py-2 font-semibold">
                                {field}
                                <div className="w-[6px] h-[6px] rounded-full bg-[#1D1D1D]" />
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Hero;