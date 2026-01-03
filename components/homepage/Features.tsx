import { BuildingOfficeIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";

const features = [
  {
    title: "برای باشگاه‌ها",
    icon: <BuildingOfficeIcon />,
    items: [
      "دسترسی به کاربران جدید",
      "استفاده بهتر از ظرفیت موجود",
      "همکاری ساده و ساختارمند"
    ]
  },
  {
    title: "برای مربیان",
    icon: <UserIcon />, // coach / trainer / person
    items: [
      "دسترسی به باشگاه‌های متنوع",
      "جابجایی راحت برای تغییر باشگاه میزبان",
      "امکان برقراری ارتباط با شاگردان بیشتر"
    ]
  },
  {
    title: "برای کاربران",
    icon: <UsersIcon />, // users / community
    items: [
      "آزادی انتخاب سبک تمرین",
      "بدون تعهد بلندمدت",
      "یک حساب کاربری، چندین باشگاه"
    ]
  }
];

const Features = () => {
  return (
    <div className="mt-[88px] mb-[110px] flex mt-[70px] relative flex-col items-center w-full max-w-desktop mx-auto px-[120px]">
      <p className="text-[24px] mb-10">مزایا در یک نگاه</p>
      <div className="w-full flex items-center justify-center gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex min-h-[324px] flex-col items-center max-w-[300px] bg-[#0E0E0E] p-8 rounded-[32px] shadow-[0px_0px_120px_0px_#B1FF6833]">
            <div className="w-12 h-12 rounded-full bg-[#B1FF6829] flex items-center justify-center mb-4 text-secondary-main [&_svg]:size-6">
              {feature.icon}
            </div>
            <p className="font-bold text-lg mb-4">{feature.title}</p>
            <ul className="list-disc list-inside">
              {feature.items.map((item, idx) => (
                <li key={idx} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features;