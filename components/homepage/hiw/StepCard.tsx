import Image from "next/image";

type Props = {
    index: number;
    step: {
        step: number;
        title: string;
        description: string;
    }
}
const StepCard = ({step, index}: Props) => {
    return (
        <div className="w-full max-mobile:px-6">
            <div className="h-[432px] max-mobile:h-auto flex items-center justify-between max-mobile:flex-col-reverse p-4 pr-0 max-mobile:pr-4 bg-[#0F0F0F]/96 rounded-[64px]">
                <div className="flex gap-22 items-center  max-mobile:mt-4 max-mobile:justify-center">
                    {/* Stepper */}
                    <div className="flex flex-col gap-2 max-mobile:hidden">
                        {[0, 1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className={`w-2 h-[72px] ${
                                    item > index ? "bg-[#504F4F]" : "bg-primary-main"
                                }`}
                            />
                        ))}
                    </div>

                    <div className="max-mobile:flex max-mobile:flex-col max-mobile:justify-center max-mobile:items-center">
                        <div
                            className=" mb-10 max-mobile:mb-4 w-14 h-14 bg-[#B1FF6829] border border-primary-main text-primary-main flex items-center justify-center text-[24px] rounded-[16px]">
                            {index + 1}
                        </div>
                        <p className="text-[24px] font-semibold max-mobile:mb-4">{step.title}</p>
                        <p className="max-w-[411px] text-sm max-mobile:text-center">{step.description}</p>
                    </div>
                </div>

                <div
                    className="w-[400px] max-mobile:min-h-[200px] max-mobile:w-full h-[400px] max-mobile:h-auto rounded-[48px] bg-[#1D1D1D] relative overflow-hidden flex items-center justify-center">
                    <div
                        className="absolute blur-[240px] max-mobile:h-[400px] max-mobile:w-full w-[449px] h-[449px] bg-radial from-[#90FF29] to-[#504F4F] rounded-full"/>
                    <Image
                        src={`/images/steps/hiw${step.step}.png`}
                        width={308}
                        height={233}
                        alt={step.title}
                        className="relative z-10 max-mobile:w-1/2"
                    />
                </div>
            </div>
        </div>
    );
};
export default StepCard;
