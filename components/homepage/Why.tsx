import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Why = () => {
    return (
        <div className="w-full max-w-desktop mx-auto max-mobile:px-6 px-[120px] pb-20">
            <p className="text-[#B6A2FF] text-[24px] text-center">چرا CityRep</p>
            <div className="grid grid-cols-2 gap-6 mt-10 max-mobile:grid-cols-1">
                <div className="w-full min-h-[296px] rounded-[32px] p-1 bg-linear-[252.32deg,_#947DFF_0%,_#B1FF68_100%]">
                    <div className="bg-[#0E0E0E]/96 rounded-[32px] w-full h-full p-10 max-mobile:p-4">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-[#B6A2FF] rounded-[8px] flex items-center justify-center">
                                <CheckIcon className="text-[#0E0E0E]" />
                            </div>
                            <p>بدون وابستگی به یک باشگاه یا قرارداد ثابت</p>
                        </div>
                        <div className="mt-6 max-mobile:flex-col-reverse flex items-center gap-4 max-mobile:w-full max-mobile:justify-between">
                            <p className="mt-6 max-w-[370px] max-mobile:text-sm">
                                اشتراک‌های ماهانه، شما را به یک مکان محدود می‌کنند و در صورتی که یک باشگاه خدمات مناسبی ارائه ندهد یا دسترسی به آن در برخی روزها برای شما دشوار باشد، می‌توانید بدون اتلاف وقت و پرداخت هزینه‌ی اضافی، باشگاه خود را تغییر دهید و تمرین‌تان را در سایر باشگاه‌های طرف قرارداد ادامه دهید.
                            </p>
                            <Image src="/images/whyRight.png" alt="Why CityRep" width={143} height={138} />
                        </div>

                    </div>
                </div>


                <div className="w-full min-h-[296px] rounded-[32px] p-1 bg-linear-[252.32deg,_#B1FF68_0%,_#947DFF_100%]">
                    <div className="bg-[#0E0E0E]/96 rounded-[32px] w-full h-full p-10 pl-0 max-mobile:pl-4 max-mobile:p-4">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-[#B1FF68] rounded-[8px] flex items-center justify-center">
                                <CheckIcon className="text-[#0E0E0E]" />
                            </div>
                            <p>یک باشگاه برای همه‌ی اهداف کافی نیست.</p>
                        </div>
                        <div className="mt-6 flex items-center max-mobile:flex-col-reverse gap-4 max-mobile:justify-between max-mobile:w-full">
                            <p className="mt-6 max-w-[370px] max-mobile:text-sm">
                                بدن، تمرین‌ها و سلیقه‌ی شما همواره در حال تغییرند، اما دسترسی محدود نباید مانع این تحول شود. با اشتراک ما می‌توانید بدون نگرانی سبک‌های مختلف ورزشی را امتحان کنید، باشگاه خود را آزادانه انتخاب کنید و تمرین خود را متناسب با نیاز و علاقه‌ی روزانه‌تان برنامه‌ریزی کنید.
                            </p>
                            <Image src="/images/whyLeft.png" alt="Why CityRep" width={143} height={138} />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Why;