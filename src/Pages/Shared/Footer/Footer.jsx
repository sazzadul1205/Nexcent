import Nexcent from '../../../assets/Footer/Nexcent.svg';
import Icon from '../../../assets/Footer/Icon.svg';
import insta from '../../../assets/Footer/Insta.svg';
import ball from '../../../assets/Footer/ball.svg';
import twitter from '../../../assets/Footer/twitter.svg';
import youtube from '../../../assets/Footer/YouTube.svg';
import send from '../../../assets/Footer/send.svg';

const Footer = () => {
    return (
        <footer className="footer bg-[#263238] px-4 md:px-6 lg:px-40 py-8 lg:py-16 ">
            <div className="mb-6 md:mb-8">
                <a className="text-xl flex gap-1 mb-3 md:mb-4 lg:mb-10">
                    <img src={Icon} alt="Icon"  />
                    <img src={Nexcent} alt="Nexcent" />
                </a>
                <div className="mb-3 md:mb-4 lg:mb-10 text-xs md:text-sm text-white">
                    <p>Copyright © 2020 Nexcent Ltd.</p>
                    <p>All rights reserved</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <img src={insta} alt="Instagram" className="h-6 w-6 md:h-8 md:w-8" />
                    <img src={ball} alt="Ball" className="h-6 w-6 md:h-8 md:w-8" />
                    <img src={twitter} alt="Twitter" className="h-6 w-6 md:h-8 md:w-8" />
                    <img src={youtube} alt="YouTube" className="h-6 w-6 md:h-8 md:w-8" />
                </div>
            </div>
            <nav className="text-white mb-6 md:mb-8">
                <header className="footer-title text-lg md:text-xl font-semibold mb-2 md:mb-4">Company</header>
                <a className="link link-hover text-xs md:text-sm ">About us</a>
                <a className="link link-hover text-xs md:text-sm">Blog</a>
                <a className="link link-hover text-xs md:text-sm">Contact us</a>
                <a className="link link-hover text-xs md:text-sm">Pricing</a>
                <a className="link link-hover text-xs md:text-sm">Testimonials</a>
            </nav>
            <nav className="text-white mb-6 md:mb-8">
                <header className="footer-title text-lg md:text-xl font-semibold mb-2 md:mb-4">Support</header>
                <a className="link link-hover text-xs md:text-sm">Help Center</a>
                <a className="link link-hover text-xs md:text-sm">Terms of service</a>
                <a className="link link-hover text-xs md:text-sm">Legal</a>
                <a className="link link-hover text-xs md:text-sm">Privacy Policy</a>
                <a className="link link-hover text-xs md:text-sm">Status</a>
            </nav>
            <aside className="relative">
                <h1 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Stay up to date</h1>
                <div className="relative">
                    <input
                        className="p-3 pr-10 text-white  rounded w-full"
                        type="text"
                        placeholder="Your email address"
                    />
                    <img
                        className="absolute right-0 top-0 mr-2 mt-3 cursor-pointer"
                        src={send}
                        alt="Send Icon"
                    />
                </div>
            </aside>
        </footer>
    );
};

export default Footer;
