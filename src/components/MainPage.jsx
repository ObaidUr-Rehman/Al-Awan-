import React, { useState, useRef, useEffect } from 'react'
import $ from "jquery";
import "../components/MainPage.css";

import {
    CircularProgressbar
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "../ChangingProgressProvider"


//images
import logo from "../images/logo.png";
import vehicle from "../images/vehicle.png";
import WePack from "../images/WePack.png";
import WeMove from "../images/WeMove.png"
import FastestShipping from "../images/FastestShipping.png";
import CostSaving from "../images/CostSaving.png";
import SafePacking from "../images/SafePacking.png";
import Jammy from "../images/Jammy.png";
import Ava from "../images/Ava.png";
import John from "../images/John.png";
import brand from "../images/brand.png";


// icons
import PublicIcon from '@mui/icons-material/Public';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import Looks4OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import Looks5OutlinedIcon from '@mui/icons-material/Looks5Outlined';
import Looks6OutlinedIcon from '@mui/icons-material/Looks6Outlined';








const DataCards = [
    {
        title: "Cost Saving",
        imgsrc: CostSaving,
        des: "Lorem ipsum dolor sit consectetur"
    },
    {
        title: "Safe Packing",
        imgsrc: SafePacking,
        des: "Lorem ipsum dolor sit consectetur."
    },
    {
        title: "Fastest Shipping",
        imgsrc: FastestShipping,
        des: "Lorem ipsum dolor sit consectetur."
    },
];



const MainPage = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);




    useEffect(() => {
        // function for fontSize for All Screen Size H1
        function bannertitlefontsize(val) {
            $('p').css("font-size", "" + val + "px");
            $('h1').css("font-size", "" + val + "px");
        }

        // function for fontSize for All Screen Size PARAGRAPH
        function bannerparasize(val) {
            $('p').css("font-size", "" + val + "px");
        }

        let currntwidth = window.innerWidth;
        if (currntwidth > 100 && currntwidth < 500) {
            bannertitlefontsize(25);
            bannerparasize(7);

        } else if (currntwidth > 500 && currntwidth < 800) {
            bannertitlefontsize(35);
            bannerparasize(9);

        } else if (currntwidth > 800 && currntwidth < 1025) {
            bannertitlefontsize(45);
            bannerparasize(11);

        } else if (currntwidth > 1025 && currntwidth < 1365) {
            bannertitlefontsize(55);
            bannerparasize(13);

        } else if (currntwidth > 1365 && currntwidth < 1600) {
            bannertitlefontsize(65);
            bannerparasize(15);

        } else if (currntwidth > 1600 && currntwidth < 1921) {
            bannertitlefontsize(75);
            bannerparasize(18);

        } else {
            bannertitlefontsize(85);
            bannerparasize(22);
        }
    });


    const button1Ref = useRef();
    const button2Ref = useRef();
    const button3Ref = useRef();
    const button4Ref = useRef();
    const button5Ref = useRef();
    const button6Ref = useRef();


    const handleScroll = ref => {
        window.scrollTo({
            behavior: "smooth",
            top: ref.current.offsetTop
        });
    };


    return (
        <>
            <div className="navbar">
                Menu <MenuIcon onClick={showSidebar} />
            </div>

            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        Close
                        <CloseIcon></CloseIcon>

                    </li>

                    <div className="sidebar">
                        <ul>
                            <li className="nav-text" ref={button1Ref} onClick={() => handleScroll(button1Ref)}>
                                <LooksOneOutlinedIcon /> About Us
                            </li>

                            <li className="nav-text" ref={button2Ref} onClick={() => handleScroll(button2Ref)}>
                                <LooksTwoOutlinedIcon /> Why Choose Us
                            </li>

                            <li className="nav-text" ref={button3Ref} onClick={() => handleScroll(button3Ref)}>
                                <Looks3OutlinedIcon /> Services
                            </li>

                            <li className="nav-text" ref={button4Ref} onClick={() => handleScroll(button4Ref)} >
                                <Looks4OutlinedIcon />   Features
                            </li >

                            <li className="nav-text" ref={button5Ref} onClick={() => handleScroll(button5Ref)}>
                                <Looks5OutlinedIcon />   Testimonials
                            </li>

                            <li className="nav-text" ref={button6Ref} onClick={() => handleScroll(button6Ref)}>
                                <Looks6OutlinedIcon />  Contact Us
                            </li>
                        </ul>

                        <div className="sidebar-content">

                            <p>Connect with us</p>

                            <div className="socialmedia">
                                <FacebookOutlinedIcon ></FacebookOutlinedIcon>
                                < TwitterIcon></TwitterIcon>
                                <InstagramIcon></InstagramIcon>
                                <LinkedInIcon></LinkedInIcon>
                            </div>
                        </div>
                    </div>
                </ul>
            </nav>

            <div className="backgroundpage1">

                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <div className="content1">
                    <h1>Choose Possibility <br /> In Every Direction </h1>
                    <p>At our company, we specialize in providing reliable and <br />
                        efficient road logistics services to businesses of all sizes.</p>
                    <button>Our Services</button>
                </div>

            </div>



            <div className="backgroundpage2" ref={button1Ref}>

                <div className="allcontent2">

                    <div className="content2" >
                        <h4>ABOUT US</h4>
                        <h1>Your Only <br /> Logistic Partner </h1>
                        <p>Our fleet of modern and well-maintained vehicles allows <br />
                            us to handle a wide range of cargo, including fragile and <br />
                            temperature-sensitive items. We are fully equipped to <br />
                            handle the transportation of hazardous materials and have <br />
                            the necessary safety protocols in place to ensure the safe <br />
                            delivery of all shipments.</p>
                    </div>

                    <div className="imgcontent2">
                        <img src={vehicle} alt="" />
                    </div>

                </div>


                <div className="Delivery">

                    <div className="transport">
                        <PublicIcon></PublicIcon>
                        {/* <h1>🌍</h1> */}
                        <h2>Pakistan Transport</h2>
                    </div>

                    <div className="transport">
                        <QueryBuilderIcon></QueryBuilderIcon>
                        {/* <h1>🕧</h1> */}
                        <h2>24/7 Availability</h2>
                    </div>

                    <div className="transport">
                        <HeadsetMicIcon></HeadsetMicIcon>
                        {/* <h1>🎧</h1> */}
                        <h2>Customer Support</h2>
                    </div>


                </div>

            </div>



            <div className="backgroundpage3">

                <div className="content3">
                    <h4>MOVING SAME</h4>
                    <h1>We Provide Safe <br />
                        Moving Procedures</h1>
                    <p>We interface customers to the best and the most expert movers in <br />
                        Pakistan. With the biggest system of bearers, transporters, packers <br />
                        and movers in the nation, we are your one stop search for all home <br />
                        moving and transport needs.</p>

                    <div className="progressbar">

                        <div className="image3" style={{ padding: "40px 40px 40px 40px" }}>
                            {/* <img src={icon} alt="" /> */}
                            <ChangingProgressProvider values={[0, 87]}>
                                {percentage => (
                                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                )}
                            </ChangingProgressProvider>
                            <h3>Customer Chooses Us</h3>
                        </div>

                        <div className="image3" style={{ padding: "40px 40px 40px 40px" }}>
                            <ChangingProgressProvider values={[0, 92]}>
                                {percentage => (
                                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                )}
                            </ChangingProgressProvider>
                            <h3>Customer are Satisfied</h3>
                        </div>

                    </div>
                </div>

            </div>


            <div className="backgroundpage2" ref={button2Ref}>

                <div className="allcontent2">

                    <div className="content2">
                        {/* <h3>01</h3> */}
                        <h4>WHY CHOOSE US</h4>
                        <h1>We Pack </h1>
                        <p>Packing and prepping your home for a move requires <br />
                            skill and care. Our crew of professional packers are <br />
                            trained in-house with years of experience packing <br />
                            and moving.</p>
                    </div>

                    <div className="imgcontent2">
                        <img src={WePack} alt="" />
                    </div>

                </div>

            </div>


            <div className="backgroundpage2">

                <div className="allcontent2">


                    <div className="imgcontent2">
                        <img src={WeMove} alt="" />
                    </div>

                    <div className="content2">
                        <h4>WHY CHOOSE US</h4>
                        <h1>We Move</h1>
                        <p>We believe in always going above and beyond for our <br />
                            clients and making their move a great experience. <br />
                            We’re constantly innovating our moving techniques..</p>
                    </div>


                </div>

            </div>



            <div className="backgroundpage5" ref={button3Ref} >

                <div className="content5">
                    <h3>SERVICES</h3>
                    <h2>WHAT WE DO</h2>
                </div>


                <div className="cards">



                    <div className="cardcontent">

                        <div className="card-img">
                            <DeviceThermostatIcon></DeviceThermostatIcon>
                        </div>

                        <div className="card-info">
                            <h2>Temperature Cont</h2>
                            <p>Lorem ipsum dolor sit amet  <br /> adipisicing elit. Ducimus  <br /> unde illum dolore quae harum <br /> ugiat laboriosam omnis ea  </p>
                        </div>

                    </div>


                    <div className="cardcontent">

                        <div className="card-img">
                            <LocalShippingOutlinedIcon></LocalShippingOutlinedIcon>
                        </div>

                        <div className="card-info">
                            <h2>Full Truck Load</h2>
                            <p>Lorem ipsum dolor sit amet  <br /> adipisicing elit. Ducimus <br /> unde illum dolore quae harum <br /> ugiat laboriosam omnis ea</p>
                        </div>

                    </div>



                    <div className="cardcontent">

                        <div className="card-img">
                            {/* <h1>📦</h1> */}
                            < WidgetsOutlinedIcon></WidgetsOutlinedIcon>
                        </div>

                        <div className="card-info">
                            <h2>Door to Door</h2>
                            <p>Lorem ipsum dolor sit amet  <br /> adipisicing elit. Ducimus  <br /> unde illum dolore quae harum <br /> ugiat laboriosam omnis ea</p>
                        </div>

                    </div>

                </div>


            </div>


            <div className="backgroundpage6" ref={button4Ref} >

                <div className="content6">
                    <h3>FEATURES</h3>
                    <h2>OUR FOCAL POINT</h2>
                </div>

                <div className='main'>

                    {DataCards.map((elem, i) => {
                        console.log(elem)
                        return (


                            <div className='arrivalbody'>

                                <div className='imagee'>
                                    <img src={elem.imgsrc} alt="" />
                                </div>


                                <div className="cardinformation6">
                                    <h2 className="title">{elem.title} </h2>
                                    <p>{elem.des}</p>
                                </div>

                            </div>
                        )
                    })}
                </div>

            </div>


            <div className="backgroundpage7" ref={button5Ref} >

                <div className="content7">
                    <h3>TESTIMONIALS</h3>
                    <h2>OUR FOCAL POINT</h2>
                </div>

                <div className="testinomials">


                    <div className="test-content">
                        <hr className='horizontal' />
                        <p>Lorem ipsum dolor sit amet consectetur. Nun <br />
                            in amet m attis nisi sollicitudin non ut. Ornare <br />
                            egestas amet tortor pe lentesque nisl rutru <br />
                            mauris a tellus aliquam nu.</p>
                        <hr className='horizon' />
                        <div className="test-contentimg">
                            <img src={Jammy} alt="" />
                            <h4>Jammy Shawn</h4>
                            <h5>Systems Director <br /> Al-Awan</h5>
                        </div>
                    </div>



                    <div className="test-content">
                        <hr className='horizontal' />
                        <p>Lorem ipsum dolor sit amet consectetur. Nun <br />
                            in amet m attis nisi sollicitudin non ut. Ornare <br />
                            egestas amet tortor pe lentesque nisl rutru <br />
                            mauris a tellus aliquam nu.</p>
                        <hr className='horizon' />
                        <div className="test-contentimg">
                            <img src={Ava} alt="" />
                            <h4>Ava John</h4>
                            <h5>Systems Director <br /> Al-Awan</h5>
                        </div>
                    </div>




                    <div className="test-content">
                        <hr className='horizontal' />
                        <p>Lorem ipsum dolor sit amet consectetur. Nun <br />
                            in amet m attis nisi sollicitudin non ut. Ornare <br />
                            egestas amet tortor pe lentesque nisl rutru <br />
                            mauris a tellus aliquam nu.</p>
                        <hr className='horizon' />
                        <div className="test-contentimg">
                            <img src={John} alt="" />
                            <h4>John Wick</h4>
                            <h5>Systems Director <br /> Al-Awan</h5>
                        </div>
                    </div>
                </div>
            </div>



            <div className="backgroundpage8" ref={button6Ref}>

                <div className="content8">
                    <h3>CONTACT US</h3>
                    <h2>GET IN TOUCH</h2>
                </div>

                <div className="Form">

                    <div className="Form-Information">

                        <form action="/action_page.php">

                            <div className="name">
                                <label>Full Name:</label> <br />
                                <input type="text" /> <br />
                            </div>


                            <div className="name">
                                <label>Email</label> <br />
                                <input type="text" />
                            </div>


                            <div className="name">
                                <label>Phone No:</label> <br />
                                <input type="text" />
                            </div>


                            <div className="name">
                                <label>City</label> <br />
                                <input type="text" />
                            </div>


                        </form>


                        <div className="message">
                            <label>Message</label> <br />
                            <input type="text" />

                        </div>


                        <div className="btn">
                            <button>Send Message</button>
                        </div>


                    </div>
                </div>


                <div className="content8">
                    <h3>OUR LOCATION</h3>
                    <h2>WHERE TO FIND US?</h2>
                </div>


                <div className="location">


                    <div className="contact">
                        <MailOutlineOutlinedIcon></MailOutlineOutlinedIcon>
                    </div>
                    <p>support@alawan.com</p>

                    <div className="contact">
                        <LocalPhoneOutlinedIcon></LocalPhoneOutlinedIcon>
                    </div>
                    <p>+92 000 000 00
                        +92 000 000 00</p>

                    <div className="contact">
                        <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                    </div>
                    <p>Al-Awan Tower, BL-4A, Clifton, Karachi, Pakistan</p>

                </div>

            </div>


            <div className="backgroundpage9">

                <div className="brand">
                    <img src={brand} alt="" />
                </div>
            </div>


            <div className="backgroundpage10">


                <div className="content10">

                    <div className="bothcontent">

                        <div className="cont-logo">
                            <img src={logo} alt="" />
                        </div>

                        <div className="allconnect">

                            <div className="connection">
                                <FacebookOutlinedIcon ></FacebookOutlinedIcon>
                            </div>

                            <div className="connection">
                                < TwitterIcon></TwitterIcon>
                            </div>

                            <div className="connection">
                                <InstagramIcon></InstagramIcon>
                            </div>

                            <div className="connection">
                                <LinkedInIcon></LinkedInIcon>
                            </div>

                        </div>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur <br />
                        Interdum enim nibh sit aliquet famesu <br />
                        sce odio et pulvinar mi fermentum con.</p>
                </div>

                <div className="copyright">

                    <p> © 2022 Al-awan. All rights reserved |
                        Cookies |
                        Privacy Policy |
                        Terms & Condition |</p>

                </div>
            </div>

        </>
    )
}

export default MainPage;