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
        <div className="w-full">
            <div className="h-[432px] flex items-center justify-between p-4 pr-0 bg-[#0F0F0F]/96 rounded-[64px]">

                <div className="flex gap-22 items-center">
                    {/* Stepper */}
                    <div className="flex flex-col gap-2">
                        {[0, 1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className={`w-2 h-[72px] ${
                                    item > index ? "bg-[#504F4F]" : "bg-primary-main"
                                }`}
                            />
                        ))}
                    </div>

                    <div>
                        <div
                            className="mb-10 w-14 h-14 bg-[#B1FF6829] border border-primary-main text-primary-main flex items-center justify-center text-[24px] rounded-[16px]">
                            {index + 1}
                        </div>
                        <p className="text-[24px] font-semibold">{step.title}</p>
                        <p className="max-w-[411px] text-sm">{step.description}</p>
                    </div>
                </div>

                <div
                    className="w-[400px] h-[400px] rounded-[48px] bg-[#1D1D1D] relative overflow-hidden flex items-center justify-center">
                    <div
                        className="absolute blur-[240px] w-[449px] h-[449px] bg-radial from-[#90FF29] to-[#504F4F] rounded-full"/>
                    <Image
                        src={`/images/steps/hiw${step.step}.png`}
                        width={308}
                        height={233}
                        alt={step.title}
                        className="relative z-10"
                    />
                </div>
            </div>
        </div>
    );
};
export default StepCard;
