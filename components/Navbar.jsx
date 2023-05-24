import Image from "next/image";
import Logo from "../public/images/nemesisLogo.jpg";
import Link from "next/link";
import getAllCategories from "@/lib/getAllCategories";

export const Navbar = async () => {
  const categoryData = getAllCategories();
  const categories = await categoryData;

  return (
    <nav className="w-full h-20 shadow-xl bg-white text-black">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 text-sm">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            width="55"
            height="auto"
            className="cursor-pointer rounded-full"
            priority
          />
        </Link>
        <div>
          <ul className="hidden sm:flex">
            <Link href="/categories">
              <li className="ml-10 uppercase hover:border-b border-black border-spacing-0 font-medium">
                Collections
              </li>
            </Link>
            <Link href="/services">
              <li className="ml-10 uppercase hover:border-b border-black border-spacing-0 font-medium">
                Services
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b border-black border-spacing-0 font-medium">
                About
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
