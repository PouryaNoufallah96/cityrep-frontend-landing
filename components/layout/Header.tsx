import { Logo } from "@/assets/icons/Logo";
import Link from "next/link";

const Header = () => {

    return (<header className="w-full h-20">
    <div className="flex items-center justify-between w-full max-w-desktop mx-auto h-full px-[120px]">
        <Logo />
        <Link href="#" className="hover:bg-white/20 w-[111px] h-10 rounded-full border border-white flex items-center justify-center text-sm font-semibold">
        ورود|ثبت نام
        </Link>
    </div>
    </header>);

};

export default Header;