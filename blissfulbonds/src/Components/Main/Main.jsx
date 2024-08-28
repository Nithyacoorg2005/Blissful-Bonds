import React from "react";
import "./Main.css";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaHeart } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const Main = () => {

  return (
    
    <>
    <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
      <div className="main">
        <div className="main1">
          <h3>Everything you love in one place...</h3>
        </div>
        <button className="btn1"><Link style={{textDecoration:"none",color:"#fff"}} to="/Updates">Get Updates</Link></button>
        <div className="icons1">
          <i>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </i>
          <i>
            <a href="https://www.facebook.com/">
              <FaFacebookF />
            </a>
          </i>
          <i>
            <a href="https://www.youtube.com/">
              <IoLogoYoutube />
            </a>
          </i>
          <i>
            <a href="https://www.twitter.com/">
              <FaXTwitter />
            </a>
          </i>
        </div>
      </div>
      <div className="Section1">
        <div className="women1">
          <img
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="para">
            <h2>Angelina Boras</h2>
            <h6>Nenlada,Italy</h6>
            <p>
              Blissful Bonds is a visually appealing and user-friendly website
              that caters to the online dating community. Its clean design and
              intuitive navigation make it easy for users to browse profiles and
              connect with potential matches. The color scheme and layout are
              modern, creating an inviting atmosphere. However, the site could
              benefit from more interactive features to enhance user engagement.
              Overall, it presents a solid foundation for a positive user
              experience in the online dating space..
            </p>
            <button className="pbtn"><Link style={{textDecoration:"none",color:"black"}} to="/More">Know more...</Link></button>
          </div>
        </div>
      </div>
<div className="div">
<h3>Why to choose Blissful Bonds...?</h3>
</div>
      
      <div className="choose">
        <div className="nolove">
          <img
            src="https://images.pexels.com/photos/4873556/pexels-photo-4873556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
          <p>
            {" "}
            Blissful Bonds offers a variety of interactive features, such as
            virtual events and icebreaker games, to help users connect in fun
            and engaging ways. These features foster deeper connections and make
            the online dating experience enjoyable and memorable.
          </p>
        </div>
        <div className="nolove">
          <img
            src="https://images.pexels.com/photos/15179353/pexels-photo-15179353/free-photo-of-man-and-woman-standing-near-on-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
          <p>
            Blissful Bonds uses advanced matchmaking algorithms designed to
            connect users based on shared interests, values, and personality
            traits. This personalized approach increases the likelihood of
            finding meaningful relationships, making your search for love more
            efficient and rewarding.
          </p>
        </div>
        <div className="nolove">
          <img
            src="https://images.pexels.com/photos/3942853/pexels-photo-3942853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
          <p>
            {" "}
            The platform boasts an intuitive and clean interface, making it easy
            for users of all tech skill levels to navigate. Whether you're new
            to online dating or a seasoned user, you'll appreciate the seamless
            experience that Blissful Bonds provides.
          </p>
        </div>
        <div className="nolove">
          <img
            src="https://images.pexels.com/photos/5177115/pexels-photo-5177115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
          <p>
            {" "}
            Safety and Privacy Features Your safety is a top priority at
            Blissful Bonds. The platform includes robust privacy controls,
            secure messaging, and user verification processes to ensure a safe
            and trustworthy environment for all members. You can explore
            connections with peace of mind.
          </p>
        </div>
        <div className="nolove">
          <img
            src="https://images.pexels.com/photos/5163910/pexels-photo-5163910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
          <p>
            {" "}
            Diverse Community Blissful Bonds is home to a diverse community of
            singles from various backgrounds, ages, and locations. This
            diversity enriches your dating experience, giving you the
            opportunity to meet people who share your interests or introduce you
            to new perspectives.
          </p>
        </div>
      </div>
      <div className="js">
        <h2>
          "Where Safety, Diversity, and Engaging Features Create Lasting
          Relationships"
        </h2>
        <div className="alice">
          <p>
            Blissful Bonds excels in creating meaningful connections with its
            advanced matchmaking algorithms. Its user-friendly interface and
            modern design make online dating enjoyable and easy to navigate. The
            platform prioritizes safety and privacy, ensuring a secure
            environment for all users. A diverse community enriches the
            experience, offering a wide range of potential matches. With
            engaging features like virtual events and games, Blissful Bonds goes
            beyond traditional dating to foster deeper relationships{" "}
            <i>
              <FaHeart />
            </i>
          </p>
          <img
            src="https://images.pexels.com/photos/2943909/pexels-photo-2943909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className="footer">
        <div className="foot">
          <h1>Created by Nithyashree CS<i> <FaHeart/></i></h1>
        </div>
      </div>
      </motion.div>
    </>
   
  );
};

export default Main;
