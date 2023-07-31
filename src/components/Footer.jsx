import styles from "../style"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="text-[18px] font-medium font-poppins leading-[24px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link,index) => (
                <li className={`text-16 font-normal font-poppins leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" :"mb-0"}`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#343e45]">
        <p className="text-[18px] font-normal text-center font-poppins leading-[27px] text-dimWhite">
          Copyright 2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row gap-[24px] md:mt-0 mt-6">
          {socialMedia.map((social,index) => (
            <div>
              <img key={social.id} src={social.icon} alt={social.id} className="w-[21px] h-[21px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer
 