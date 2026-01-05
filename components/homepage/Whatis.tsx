import Image from "next/image";

const Whatis = ()=>{
    return(
<div className="flex mt-[70px] relative items-center justify-between max-mobile:flex-col max-mobile:px-4 w-full max-w-desktop mx-auto max-mobile:px-6 px-[120px]">
        <div className="w-[400px] h-[400px] border p-2 border-[#767676] rounded-[64px]">
          <div className="w-full h-full flex items-center justify-center bg-[#2B2B2B] rounded-[64px] overflow-hidden relative">
            <div className="z-1 w-[361px] h-[326px] absolute top-[-100px] right-[-100px] bg-[#B6A2FF]/23 rounded-full blur-[70px]" />
            <div className="z-1 w-[361px] h-[326px] absolute bottom-[-100px] left-[-100px] bg-[#4024D1]/23 rounded-full blur-[70px]" />
            <Image src="/images/whyImage.png" alt="whyImage" width={361} className="realtive z-10" height={326} />
          </div>
        </div>
        <div className="max-w-[595px] relative">
          <div className="w-[524px] h-[290px] blur-[110px] rounded-full bg-linear-to-l from-[#4E2FE5] to-[#4E2FE5]/0 absolute z-1"/>
          <p className="relative z-10 text-primary-main font-bold text-[24px] mb-6">CityRep دقیقا چه کاری انجام می‌دهد؟</p>
          <p className="relative z-10">
            CityRep یک پلتفرم دسترسی به فضاهای تمرینی در سطح شهر است که به شما کمک می‌کند بدون وابستگی به یک مکان مشخص، دقیقاً بر اساس نیاز و سبک زندگی‌تان، در هر کدام از باشگاه‌های طرف قرارداد تمرین کنید. با CityRep به شبکه‌ای از فضاهای تمرینی همکار در نقاط مختلف شهر دسترسی دارید و می‌توانید هر زمان و هر جا که برایتان مناسب است تمرین کنید.
          </p>
        </div>
      </div>
    )
}

export default Whatis;