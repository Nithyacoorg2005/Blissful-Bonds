import React from "react";
import "./OnlineDate.css";
import { FcManager, FcBusinesswoman, FcOnlineSupport } from "react-icons/fc";
import { FaUserFriends } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import { MdWorkspacePremium } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import imagebest from "../../images/image copy 2.png";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const OnlineDate = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    <>
      <div className="left-container">
        <div className="search">
          <input type="text" placeholder="Search your date here.." />
        </div>
        <div className="menu" id="man">
          <h4>MENU</h4>
          <ul>
            <li>
              <i>
                <FcManager />
              </i>
              Men
            </li>
            <li>
              <i>
                <FcBusinesswoman />
              </i>
              Women
            </li>
            <li>
              <i>
                <FaUserFriends />
              </i>
              Blissful Bonds Best Friends
            </li>
            
            <li>
              <i>
                <GiLovers />
              </i>
              Your Connections
            </li>
            <li>
              <i>
                <FcOnlineSupport />
              </i>
              Support
            </li>
            <li>
              <i>
                <MdWorkspacePremium />
              </i>
              Premium Users
            </li>
          </ul>
        </div>
      </div>
      <div id="man" className="mainbox">
        <div className="man">
          <img
            src="https://images.pexels.com/photos/3006904/pexels-photo-3006904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h5>Karl Genex</h5>
          <h6>
            <i>
              <FaLocationDot />
            </i>
            Ainala,Russia
          </h6>
          <button className="button1">Connect</button>
          <button onClick={()=>{
            navigate("/Chat")
          }
            
          } className="button2">Message</button>
        </div>
        <div className="man">
          <img
            src="https://images.pexels.com/photos/3026284/pexels-photo-3026284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h5>Jimmy Gurt</h5>
          <h6>
            <i>
              <FaLocationDot />
            </i>
            Sirfaa,Mangolia
          </h6>
          <button className="button1">Connect</button>
          <button onClick={()=>{
            navigate("/Chat")
          }}className="button2">Message</button>
        </div>
        <div className="man">
          <img
            src="https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h5>John Simson</h5>
          <h6>
            <i>
              <FaLocationDot />
            </i>
            Monity,Italy
          </h6>
          <button className="button1">Connect</button>
          <button className="button2">Message</button>
        </div>
        <div className="man">
          <img
            src="https://images.pexels.com/photos/2866077/pexels-photo-2866077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h5>William Karl</h5>
          <h6>
            <i>
              <FaLocationDot />
            </i>
            Tiplu,Greece
          </h6>
          <button className="button1">Connect</button>
          <button className="button2">Message</button>
        </div>
        <div className="man">
          <img
            src="https://images.pexels.com/photos/2294492/pexels-photo-2294492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h5>Thomas Enrich</h5>
          <h6>
            <i>
              <FaLocationDot />
            </i>
            Richmond,North America
          </h6>
          <button className="button1">Connect</button>
          <button className="button2">Message</button>
        </div>
        <div className="man">
          <img
            src="https://images.pexels.com/photos/2958620/pexels-photo-2958620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h5>Deepak Anand</h5>
          <h6>
            <i>
              <FaLocationDot />
            </i>
            Bengaluru,India
          </h6>
          <button className="button1">Connect</button>
          <button className="button2">Message</button>
        </div>
        <div className="man">
          <img
            src="https://images.pexels.com/photos/2709745/pexels-photo-2709745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h5>Shi Shu Sang</h5>
          <h6>
            <i>
              <FaLocationDot />
            </i>
            Belgium,China
          </h6>
          <button className="button1">Connect</button>
          <button className="button2">Message</button>
        </div>
        <div className="man">
          <img
            src="https://images.pexels.com/photos/2692553/pexels-photo-2692553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h5>Tiyuki Shikona</h5>
          <h6>
            <i>
              <FaLocationDot />
            </i>
            Tokyo ,Japan
          </h6>
          <button className="button1">Connect</button>
          <button className="button2">Message</button>
        </div>
      </div>

      <div className="mainbox2">
        <div className="women">
          <img
            src="https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h5>Enu Kashini</h5>
          <h6>
            <i>
              <FaLocationDot />
            </i>
            Tokyo ,Japan
          </h6>
          <button className="button1">Connect</button>
          <button className="button2">Message</button>
        </div>
        <div className="women">
          <img
            src="https://images.pexels.com/photos/2295746/pexels-photo-2295746.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <h5>Jenny Kile</h5>
          <h6>
            <i>
              <FaLocationDot />
            </i>
            Idree ,Europe
          </h6>
          <button className="button1">Connect</button>
          <button className="button2">Message</button>
        </div>
        <div className="women">
          <img
            src="https://images.pexels.com/photos/2787310/pexels-photo-2787310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h5>Roslina</h5>
          <h6>
            <i>
              <FaLocationDot />
            </i>
            Ingtre,United Kingdom
          </h6>
          <button className="button1">Connect</button>
          <button className="button2">Message</button>
        </div>
        <div className="women">
          <img
            src="https://images.pexels.com/photos/2869076/pexels-photo-2869076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h5>Dendelina</h5>
          <h6>
            <i>
              <FaLocationDot />
            </i>
            Denmark,Australia
          </h6>
          <button className="button1">Connect</button>
          <button className="button2">Message</button>
        </div>
        <div className="women">
          <img
            src="https://images.pexels.com/photos/2295746/pexels-photo-2295746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h5>Ennelina Voosvalt</h5>
          <h6>
            <i>
              <FaLocationDot />
            </i>
            Henderland,USA
          </h6>
          <button className="button1">Connect</button>
          <button className="button2">Message</button>
        </div>
        <div className="women">
          <img
            src="https://images.pexels.com/photos/1844012/pexels-photo-1844012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h5>Anne Itaga</h5>
          <h6>
            <i>
              <FaLocationDot />
            </i>
            Ureli,Isreal
          </h6>
          <button className="button1">Connect</button>
          <button className="button2">Message</button>
        </div>
        <div className="women">
          <img
            src="https://images.pexels.com/photos/1777854/pexels-photo-1777854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h5>Telina Karlex</h5>
          <h6>
            <i>
              <FaLocationDot />
            </i>
            Perlina,France
          </h6>
          <button className="button1">Connect</button>
          <button className="button2">Message</button>
        </div>
        <div className="women">
          <img
            src="https://images.pexels.com/photos/2113132/pexels-photo-2113132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h5>Tanya Hiremath</h5>
          <h6>
            <i>
              <FaLocationDot />
            </i>
            Chennai,India
          </h6>
          <button className="button1">Connect</button>
          <button className="button2">Message</button>
        </div>
      </div>
      <div id="bestfriends">
        <h1>Best Friends Ever...</h1>
        <p>
          "BlissfulBonds celebrates the joy of true friendship, where every
          moment is filled with laughter, support, and understanding. Best
          friends are the heart of life's happiest memories, always there to
          lift each other up and share in the fun. With BlissfulBonds, cherish
          the unbreakable connection that makes best friends irreplaceable.
          Together, we create a world where friendship blossoms and bonds grow
          stronger every day."
        </p>
        <div className="best">
          <img src={imagebest} alt="" />
        </div>
      </div>
      <div className="best1">
        <h2>User Stories about Blissful Bonds BestFriends</h2>
        <div className="users">
          <div id="first">
          <i><RiDoubleQuotesL/></i> 
          </div>
           
          <i><RiDoubleQuotesR/></i>
          <p>
            <spam>
              <h1>Emma & Sophia</h1>
            </spam>{" "}
            A Friendship Forged in Adventure Emma and Sophia met during a
            college exchange program in Europe. Both were from different
            countries, but their love for travel and adventure brought them
            together. They spent a semester exploring new cities, trying exotic
            foods, and making memories that would last a lifetime. After
            returning home, their friendship only grew stronger. They continue
            to plan trips together and cherish the bond they formed through
            shared experiences. "Sophia is more than a friend; she's my partner
            in crime, and our adventures have created a bond that distance can't
            break," says Emma.
          </p>
        </div>
        <div className="users1">
        <div id="first">
          <i><RiDoubleQuotesL/></i> 
          </div>
           
          <i><RiDoubleQuotesR/></i>
          <p>
            <spam>
              <h1>Jack & Liam</h1>
            </spam>
            The Power of Support Jack and Liam's friendship began in middle
            school when they both joined the school soccer team. Over the years,
            they became each other's biggest supporters, on and off the field.
            When Jack faced a tough time in high school due to family issues,
            Liam was there for him every step of the way, providing a listening
            ear and unwavering support. Today, they continue to stand by each
            other, proving that true friendship means being there through thick
            and thin. "Liam has been my rock during some of the hardest times.
            He's shown me what true friendship really means," shares Jack.
          </p>
        </div>
        <div className="users2">
        <div id="first">
          <i><RiDoubleQuotesL/></i> 
          </div>
           
          <i><RiDoubleQuotesR/></i>
          <p>
            <spam>
              <h1>Maya & Anya</h1>
            </spam>{" "}
            Friendship Beyond Borders Maya and Anya met online
            through a mutual interest in art and creativity. Despite living on
            opposite sides of the world, their shared passion brought them
            closer. They started collaborating on art projects, exchanged ideas,
            and even hosted virtual art sessions together. Over time, their bond
            grew beyond just a shared hobby, turning into a deep and meaningful
            friendship. They now dream of meeting in person someday to create
            art together. "Anya is like the sister I never had. Our friendship
            has shown me that distance doesn't matter when the connection is
            real," says Maya.
          </p>
        </div>
      </div>
    </>
    </motion.div>
  );
};

export default OnlineDate;
