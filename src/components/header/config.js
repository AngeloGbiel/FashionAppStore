import logoFashionStore from './img/logo.png'
import * as IoIcons from 'react-icons/io'
import * as SiIcons from 'react-icons/si'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'

import * as HiIcons from 'react-icons/hi'
import * as MdIcons from 'react-icons/md'
import * as BiIcons from 'react-icons/bi'
import * as BsIcons from 'react-icons/bs'



export const dataHeader = {
    logo: logoFashionStore,
    NameStore: "Fashion Store",
    menu: [
        {
            icon:<HiIcons.HiOutlineHome/>,
            title:'Home'
        },
        {
            icon:<MdIcons.MdProductionQuantityLimits/>,
            title:'Products'
        },
        {
            icon:<BiIcons.BiImageAlt/>,
            title:'Gallery'
        },
        {
            icon:<GiIcons.GiNothingToSay/>,
            title:'About'
        },
    ],
    socialmidia: [
        {
            icon:<IoIcons.IoLogoWhatsapp />,
            title:"WhatsApp"
        },
        {
            icon:<SiIcons.SiFacebook />,
            title:"Facebook"
        },
        {
            icon:<AiIcons.AiFillInstagram />,
            title:"Instagram"
        },
        
        
    ],
    responsiveBurger: <GiIcons.GiHamburgerMenu/>,
    responsiveClose: <BsIcons.BsArrowLeftCircleFill/>
}