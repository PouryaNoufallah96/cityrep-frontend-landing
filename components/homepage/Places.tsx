import { BuildingOfficeIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

const places = [
    {
        title: "فیتنس",
        image: "/images/fields/fitness.jpg",
        link: "#"
    },
    {
        title: "کراس فیت",
        image: "/images/fields/crossfit.jpg",
        link: "#"
    },
    {
        title: "پیلاتس",
        image: "/images/fields/pilates.jpg",
        link: "#"
    },
    {
        title: "یوگا",
        image: "/images/fields/yoga2.jpg",
        link: "#"
    },
    {
        title: "امادگی جسمانی",
        image: "/images/fields/jesmani.jpg",
        link: "#"
    },
];

const Places = () => {
    return (
        <div className="w-full bg-white">
            <div className="flex relative flex-col items-center w-full max-w-desktop mx-auto max-mobile:px-6 px-[120px] bg-white py-[60px]">
                <p className="text-[24px] mb-10 text-primary-600">فضاهای تمرینی تحت پوشش </p>
                <div className="w-full grid grid-cols-5 gap-5 max-mobile:grid-cols-1">
                    {places.map((place, index) => (
                        <div key={index}
                            className="flex w-full aspect-[224/328] relative rounded-[16px] items-end justify-center overflow-hidden">
                            <Image src={place.image} alt={place.title} className="z-[5] object-cover" fill />
                            <p className="font-bold text-lg my-4 relative z-10">{place.title}</p>

                        </div>
                    ))}
                </div>
                <button className="cursor-pointer p-2 mt-10 w-[224px] h-[48px] flex items-center justify-between bg-primary-600/88 rounded-[30px]">
                    <div />
                    <p>ثبت نام</p>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-primary-600/88 bg-white">
                        <ChevronLeftIcon />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Places;