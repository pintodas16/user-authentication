
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import LandingImg from "../assets/img/landing/five.png";

function AboutUs() {
    //

    return (
        <>
        <Header />
            {/* hero section  */}
            <section className="bg-[#FFEEE5] px-4.25 lg:px-16 xl:px-[4.7rem]">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="flex justify-center py-11.5 md:py-25">
                        <div className="flex flex-col gap-6">
                            <h1 className="font-Manrope font-extrabold text-heading-two md:text-main-heading text-center text-dark  max-w-[339px] md:max-w-[791px]">
                                Welcome to ShopHub
                            </h1>
                            <p className="font-Manrope font-normal text-medium md:text-extra-medium text-center text-dark max-w-[339px] md:max-w-[791px]">
                                At ShopHub, we empower entrepreneurs and
                                businesses to bring their products to a global
                                audience. Whether you're a seasoned retailer or
                                just starting, our platform is designed to help
                                you build and manage your online store with
                                ease.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="px-4.25 lg:px-16 xl:px-[4.7rem]" id="about-us">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="mt-18 md:mt-34 grid grid-cols-1 md:grid-cols-2 gap-4.25 md:gap-7.5">
                        <div className="h-[339px] md:h-[630px] rounded-4xl md:rounded-6.5xl">
                            <img
                                className="w-full h-full rounded-6.5xl object-cover"
                                src={LandingImg}
                                alt=""
                            />
                        </div>
                        <div className="py-7.5 px-4.25 md:p-15 rounded-4xl md:rounded-6.5xl bg-[#EEF0FF] flex items-center">
                            <div className="flex flex-col gap-2.5 md:gap-12">
                                <h3 className="font-Manrope font-extrabold text-2.25xl md:text-heading-four text-dark">
                                    Our Mission
                                </h3>
                                <p className="font-Manrope font-normal text-medium md:text-extra-medium text-light-dark md:max-w-[510px]">
                                    We believe in democratizing commerce by
                                    providing everyone the tools they need to
                                    succeed online. Our mission is to create an
                                    inclusive, dynamic marketplace where sellers
                                    can thrive and customers can discover
                                    products that meet their needs and
                                    preferences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-18 md:mt-34 flex flex-col gap-7.5 md:gap-17.5">
                        <div className="flex justify-center">
                            <div className="flex flex-col gap-3 md:gap-4.25">
                                <h4 className="font-Manrope font-extrabold text-2.25xl  md:text-heading-four text-center text-dark md:max-w-[520px]">
                                    What We Offer
                                </h4>
                                <p className="font-Manrope font-normal text-medium md:text-extra-medium text-light-dark text-center md:max-w-[520px]">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5">
                            <div className="rounded-5xl border border-grey py-7.5 md:py-11.5 px-4.25 md:px-7.5 bg-white flex flex-col gap-7.5">
                                <div className="h-[80px] w-[80px] rounded-full bg-[#EEF0FF] flex justify-center items-center">
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.1642 15.6459C15.1642 18.3001 12.9162 20.4516 10.3584 20.4516C7.8007 20.4516 5.55273 18.3795 5.55273 15.6459C5.55273 14.265 6.39494 10.5537 6.96005 8.83352C7.49246 7.20827 9.00873 6.1123 10.7196 6.1123H29.1625C30.8671 6.1123 32.3772 7.19893 32.9174 8.81483C33.4934 10.5382 34.3527 14.2604 34.3527 15.6459C34.3527 18.23 32.1047 20.4516 29.547 20.4516C26.9892 20.4516 24.7398 18.3001 24.7398 15.6459"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.51172 24.1621V26.9316C7.51172 31.004 10.0477 33.8808 14.1233 33.8808H25.7817C29.859 33.8808 32.3949 31.004 32.3949 26.9316V24.1621"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15.1465 14.1504V15.6527C15.1465 18.307 17.2978 20.4583 19.9522 20.4583C22.6065 20.4583 24.7578 18.307 24.7578 15.6527V14.1504"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-4.25">
                                    <h5 className="font-Manrope font-semibold text-large md:text-xl text-dark">
                                        Easy Store Setup
                                    </h5>
                                    <p className="font-Manrope font-normal text-medium text-light-dark">
                                        We provide a user-friendly interface
                                        that allows you to create and customize
                                        your store without any technical
                                        expertise.
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-5xl border border-grey py-7.5 md:py-11.5 px-4.25 md:px-7.5 bg-white flex flex-col gap-7.5">
                                <div className="h-[80px] w-[80px] rounded-full bg-[#EEF0FF] flex justify-center items-center">
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.32031 29.2334V33.7896"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M16.5312 27.0645V33.7902"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M24.7422 22.7246V33.7896"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M32.9531 16.4336V33.7904"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M27.9648 5.84436L32.9541 4.99023L33.6437 9.46623"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M6.35742 21.4266C6.35742 21.4266 22.7537 21.9127 32.953 4.99023"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-4.25">
                                    <h5 className="font-Manrope font-semibold text-large md:text-xl text-dark">
                                        Comprehensive Sales Tools
                                    </h5>
                                    <p className="font-Manrope font-normal text-medium text-light-dark">
                                        From inventory management to marketing
                                        features, we offer everything you need
                                        to run a successful online business.
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-5xl border border-grey py-7.5 md:py-11.5 px-4.25 md:px-7.5 bg-white flex flex-col gap-7.5">
                                <div className="h-[80px] w-[80px] rounded-full bg-[#EEF0FF] flex justify-center items-center">
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M29.1075 15.7939H10.8985C7.81908 15.7939 5.90234 17.9668 5.90234 21.043V29.7495C5.90234 32.824 7.81908 34.9985 10.9001 34.9985H29.1075C32.1868 34.9985 34.102 32.824 34.102 29.7495V21.043C34.102 17.9668 32.1771 15.7939 29.1075 15.7939Z"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M16.4199 8.57715L19.767 11.9241L23.1138 8.57715"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M19.7665 11.9243L19.7656 5"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10.9375 20.1172H13.1348"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M29.0665 30.6768H26.8691"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16.4199 25.4002C16.4199 23.4202 18.0253 21.8164 20.0037 21.8164C21.9837 21.8164 23.589 23.4202 23.589 25.4002C23.589 27.3802 21.9837 28.9839 20.0037 28.9839C18.0253 28.9839 16.4199 27.3802 16.4199 25.4002Z"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-4.25">
                                    <h5 className="font-Manrope font-semibold text-large md:text-xl text-dark">
                                        Secure Transactions
                                    </h5>
                                    <p className="font-Manrope font-normal text-medium text-light-dark">
                                        Our platform ensures that all
                                        transactions are safe and secure, giving
                                        both sellers and buyers peace of mind.
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-5xl border border-grey py-7.5 md:py-11.5 px-4.25 md:px-7.5 bg-white flex flex-col gap-7.5">
                                <div className="h-[80px] w-[80px] rounded-full bg-[#EEF0FF] flex justify-center items-center">
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M31.6058 19.9062C33.709 21.124 34.969 23.644 34.2716 26.352C33.743 28.4099 32.008 30.0364 29.9225 30.4465C29.6128 30.5082 29.3063 30.5439 29.008 30.5569C27.4933 30.6217 26.3518 29.1817 26.7053 27.7077L28.2183 21.3819C28.5766 19.8867 30.276 19.1359 31.6058 19.9062Z"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M19.1836 34.9557C23.0608 34.9557 25.8078 35.7521 28.5856 30.5596"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8.39225 19.9062C6.28903 21.124 5.02905 23.644 5.72635 26.352C6.25498 28.4099 7.9901 30.0364 10.0755 30.4465C10.3852 30.5082 10.6917 30.5439 10.99 30.5569C12.5046 30.6217 13.6462 29.1817 13.2927 27.7077L11.7798 21.3819C11.4214 19.8867 9.72196 19.1359 8.39225 19.9062Z"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M32.253 20.3403V17.2545C32.253 10.4875 26.7672 5 19.9985 5C13.23 5 7.74414 10.4875 7.74414 17.2545V20.3403"
                                            stroke="#121212"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-4.25">
                                    <h5 className="font-Manrope font-semibold text-large md:text-xl text-dark">
                                        Customer Support
                                    </h5>
                                    <p className="font-Manrope font-normal text-medium text-light-dark">
                                        Our dedicated support team is here to
                                        assist you every step of the way,
                                        ensuring you have a seamless experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* pricing section  */}
            <div className="bg-[#EEF9F8] px-4.25 lg:px-16 xl:px-[4.7rem]" id="values">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="mt-18 md:mt-34  py-25 flex flex-col gap-7.5 md:gap-17.5">
                        <div className="flex flex-col gap-3 lg:flex-row md:gap-0 justify-between items-center">
                            <h4 className="font-Manrope font-extrabold text-heading-four text-dark lg:max-w-[387px] text-center md:text-left">
                                Our Values
                            </h4>
                            <p className="font-Manrope font-normal text-extra-medium text-light-dark text-center md:text-left lg:max-w-[520px]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore.
                            </p>
                        </div>
                        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.25  md:gap-7.5">
                            <div className="py-7.5 md:py-11.5 px-4.25 md:px-7.5 rounded-5xl border border-grey bg-white flex flex-col gap-7.5">
                                <div className="h-[60px] w-[60px] bg-[#EEF0FF] rounded-full  flex justify-center items-center font-Manrope font-bold text-large text-dark">
                                    1
                                </div>
                                <div className="flex flex-col gap-4.25">
                                    <h5 className="font-Manrope font-semibold text-large md:text-xl text-dark">
                                        Innovation
                                    </h5>
                                    <p className="font-Manrope font-normal text-medium text-light-dark">
                                        We continuously innovate to provide the
                                        best tools and features to our users. We
                                        are providing the best.
                                    </p>
                                </div>
                            </div>
                            <div className="py-7.5 md:py-11.5 px-4.25 md:px-7.5 rounded-5xl border border-grey bg-white flex flex-col gap-7.5">
                                <div className="h-[60px] w-[60px] bg-[#EEF0FF] rounded-full  flex justify-center items-center font-Manrope font-bold text-large text-dark">
                                    2
                                </div>
                                <div className="flex flex-col gap-4.25">
                                    <h5 className="font-Manrope font-semibold text-large md:text-xl text-dark">
                                        Community
                                    </h5>
                                    <p className="font-Manrope font-normal text-medium text-light-dark">
                                        We believe in building a community where
                                        sellers and buyers can connect, share,
                                        and grow together.
                                    </p>
                                </div>
                            </div>
                            <div className="py-7.5 md:py-11.5 px-4.25 md:px-7.5 rounded-5xl border border-grey bg-white flex flex-col gap-7.5">
                                <div className="h-[60px] w-[60px] bg-[#EEF0FF] rounded-full  flex justify-center items-center font-Manrope font-bold text-large text-dark">
                                    3
                                </div>
                                <div className="flex flex-col gap-4.25">
                                    <h5 className="font-Manrope font-semibold text-large md:text-xl text-dark">
                                        Transparency
                                    </h5>
                                    <p className="font-Manrope font-normal text-medium text-light-dark">
                                        We operate with transparency in all our
                                        dealings, ensuring that our users always
                                        know what to expect.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* faq section  */}
            <div className="px-4.25 lg:px-16 xl:px-[4.7rem]" id="faq">
                <div className="max-w-7xl f-full mx-auto">
                    <div className="mt-18 md:mt-34 flex flex-col items-center gap-7.5 md:gap-17.5">
                        <div className="flex flex-col items-center gap-3 md:gap-4.25">
                            <h4 className="font-Manrope font-extrabold text-dark text-2.25xl lg:text-heading-four text-center">
                                FAQ’s
                            </h4>
                            <p className="font-Manrope font-normal text-medium lg:text-extra-medium text-center text-light-dark max-w-[520px]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore.
                            </p>
                        </div>
                        <div className="border border-light-grey rounded-6.5xl lg:max-w-[910px]">
                            <Faq />
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    );
}

export default AboutUs;
