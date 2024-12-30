import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="flex w-[100%] text-white">
                <div className="w-[50%] pl-80 py-10 bg-[#1F2937]">
                    <h1 className="text-xl">CONTACT US</h1>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <nav className="bg-[#111827] pl-24 py-10 w-[50%]">
                    <h1 className="text-xl">Follow US</h1>
                    <p className="">Join us on social media</p>
                    <div className="flex gap-4">
                        <a href="#"><FaFacebook size={20} /></a>
                        <a href="#"><FaInstagram  size={20}/></a>
                        <a href="#"><FaTwitter size={20}/></a>
                    </div>
                </nav>
            </div>
            <div className="footer footer-center bg-[#151515] text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;