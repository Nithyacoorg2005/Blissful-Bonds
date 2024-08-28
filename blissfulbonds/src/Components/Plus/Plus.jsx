import React from "react";
import "./Plus.css";
import { motion} from "framer-motion";
const Plus = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    <>
      <div className="plus1">
        <div className="p1">
          <h1
            style={{ color: "#fff", textAlign: "center", paddingTop: "30px" }}
          >
            Free Trail
          </h1>
          <h2
            style={{
              color: "#fff",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "30px",
            }}
          >
            $0
          </h2>
          <p
            style={{
              color: "#fff",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "20px",
            }}
          >
            Get out the following benefits
          </p>
          <ul
            style={{
              color: "#fff",
              listStyleType: "none",
              paddingTop: "40px",
              padding: "25px",
            }}
          >
            <li>Advanced Relationship Guides</li>
            <li>Expert Webinars and Q&A Sessions</li>
            <li>Special Interviews</li>
            <li>One-on-One Coaching</li>
            <li>Personalized Advice</li>
          </ul>
          <button
            style={{
              width: "150px",
              height: "35px",
              backgroundColor: "#fff",
              color: "peru",
              border: "none",
              marginLeft: "80px",
              borderRadius: "10px",
              marginTop: "80px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            BUY NOW
          </button>
        </div>
        <div className="p2">
          <h1
            style={{ color: "#fff", textAlign: "center", paddingTop: "30px" }}
          >
            BASIC
          </h1>
          <h2
            style={{
              color: "#fff",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "30px",
            }}
          >
            $199
          </h2>
          <p
            style={{
              color: "#fff",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "20px",
            }}
          >
            Get out the following benefits
          </p>
          <ul
            style={{
              color: "#fff",
              listStyleType: "none",
              paddingTop: "20px",
              padding: "20px",
            }}
          >
            <li>Advanced Relationship Guides</li>
            <li>Expert Webinars and Q&A Sessions</li>
            <li>Special Interviews</li>
            <li>Advanced Matching Algorithms:</li>
            <li>Exclusive Access</li>
            <li>Ad-Free Experience</li>
          </ul>
          <button
            style={{
              width: "150px",
              height: "35px",
              backgroundColor: "#fff",
              color: "peru",
              border: "none",
              marginLeft: "80px",
              borderRadius: "10px",
              marginTop: "50px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            BUY NOW
          </button>
        </div>
        <div className="p3">
          <h1
            style={{ color: "#fff", textAlign: "center", paddingTop: "30px" }}
          >
            PRO
          </h1>
          <h2
            style={{
              color: "#fff",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "30px",
            }}
          >
            $599
          </h2>
          <p
            style={{
              color: "#fff",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "20px",
            }}
          >
            Get out the following benefits
          </p>
          <ul
            style={{
              color: "#fff",
              listStyleType: "none",
              paddingTop: "40px",
              padding: "25px",
            }}
          >
            <li>Advanced Relationship Guides</li>
            <li>Expert Webinars and Q&A Sessions</li>
            <li>Special Interviews</li>
            <li>Video Chat</li>
            <li>Advanced Matching Algorithms:</li>
            <li>Partnerships</li>
            <li>Data Security</li>
          </ul>
          <button
            style={{
              width: "150px",
              height: "35px",
              backgroundColor: "#fff",
              color: "peru",
              border: "none",
              marginLeft: "80px",
              borderRadius: "10px",
              marginTop: "15px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            BUY NOW
          </button>
        </div>
      </div>
      <div className="feed">
        <h1>User's Feedback</h1>

        <div className="feedback">
          <img
            style={{
              width: "auto",
              height: "500px",
              borderRadius: "10px",
              marginLeft: "100px",
              marginTop: "70px",
              
            }}
            src="https://images.pexels.com/photos/2808658/pexels-photo-2808658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div style={{margin:"50px"}} className="div">
          <h3 style={{fontSize:"30px",color:"black",marginTop:"20px"}}>John and Emily's Experience with Blissful Bonds</h3>
          <p style={{padding:"10px", fontSize:"18px",paddingLeft:"60px",paddingRight:"30px"}}>
            <span><h6 style={{"color":"black",fontSize:"22px",marginTop:"15px"}}>John:</h6></span> "Blissful Bonds has truly transformed our relationship. We
            initially signed up out of curiosity, but it quickly became a staple
            in our lives. The exercises and communication tools they provide
            helped us understand each other on a much deeper level. It's like we
            were given a new language to express our love and concerns, which
            has brought us closer than ever before." <h6 style={{"color":"black",fontSize:"22px",marginTop:"15px"}}>Emily:</h6> "I can't say enough
            good things about Blissful Bonds. The workshops are engaging,
            insightful, and fun. They made us feel like we're not alone in our
            struggles and that there are practical ways to improve our
            relationship. The support from the community and the expert advice
            we received were invaluable. It's not just about fixing problems but
            about building a stronger, more joyful connection. We're so grateful
            for this experience!" <h6 style={{"color":"black",fontSize:"22px",marginTop:"15px"}}>John and Emily:</h6> "Overall, Blissful Bonds has
            been a game-changer for us. We've seen a significant improvement in
            our communication, trust, and intimacy. We highly recommend it to
            any couple looking to deepen their bond and navigate the
            complexities of a relationship with more ease and joy."
          </p>
          </div>
        </div>
        <div className="feedback">
          <img
            style={{
              width: "auto",
              height: "500px",
              borderRadius: "10px",
              marginLeft: "100px",
              marginTop: "70px",
            }}
            src="https://images.pexels.com/photos/4009369/pexels-photo-4009369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className="div">
          <h3 style={{fontSize:"30px",color:"black"}}>John and Emily's Experience with Blissful Bonds</h3>
          <p style={{padding:"10px", fontSize:"18px",paddingLeft:"60px",paddingRight:"30px"}}>
            <span><h6 style={{"color":"black",fontSize:"22px",marginTop:"15px"}}>John:</h6></span> "Blissful Bonds has truly transformed our relationship. We
            initially signed up out of curiosity, but it quickly became a staple
            in our lives. The exercises and communication tools they provide
            helped us understand each other on a much deeper level. It's like we
            were given a new language to express our love and concerns, which
            has brought us closer than ever before." <h6 style={{"color":"black",fontSize:"22px",marginTop:"15px"}}>Emily:</h6> "I can't say enough
            good things about Blissful Bonds. The workshops are engaging,
            insightful, and fun. They made us feel like we're not alone in our
            struggles and that there are practical ways to improve our
            relationship. The support from the community and the expert advice
            we received were invaluable. It's not just about fixing problems but
            about building a stronger, more joyful connection. We're so grateful
            for this experience!" <h6 style={{"color":"black",fontSize:"22px",marginTop:"15px"}}>John and Emily:</h6> "Overall, Blissful Bonds has
            been a game-changer for us. We've seen a significant improvement in
            our communication, trust, and intimacy. We highly recommend it to
            any couple looking to deepen their bond and navigate the
            complexities of a relationship with more ease and joy."
          </p>
          </div>
        </div>
        <div className="feedback">
          <img
            style={{
              width: "auto",
              height: "500px",
              borderRadius: "10px",
              marginLeft: "100px",
              marginTop: "70px",
            }}
            src="https://images.pexels.com/photos/258421/pexels-photo-258421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className="div">
          <h3 style={{fontSize:"30px",color:"black"}}>John and Emily's Experience with Blissful Bonds</h3>
          <p style={{padding:"10px", fontSize:"18px",paddingLeft:"60px",paddingRight:"30px"}}>
            <span><h6 style={{"color":"black",fontSize:"22px",marginTop:"15px"}}>John:</h6></span> "Blissful Bonds has truly transformed our relationship. We
            initially signed up out of curiosity, but it quickly became a staple
            in our lives. The exercises and communication tools they provide
            helped us understand each other on a much deeper level. It's like we
            were given a new language to express our love and concerns, which
            has brought us closer than ever before." <h6 style={{"color":"black",fontSize:"22px",marginTop:"15px"}}>Emily:</h6> "I can't say enough
            good things about Blissful Bonds. The workshops are engaging,
            insightful, and fun. They made us feel like we're not alone in our
            struggles and that there are practical ways to improve our
            relationship. The support from the community and the expert advice
            we received were invaluable. It's not just about fixing problems but
            about building a stronger, more joyful connection. We're so grateful
            for this experience!" <h6 style={{"color":"black",fontSize:"22px",marginTop:"15px"}}>John and Emily:</h6> "Overall, Blissful Bonds has
            been a game-changer for us. We've seen a significant improvement in
            our communication, trust, and intimacy. We highly recommend it to
            any couple looking to deepen their bond and navigate the
            complexities of a relationship with more ease and joy."
          </p>
          </div>
        </div>
        <div className="feedback">
          <img
            style={{
              width: "auto",
              height: "500px",
              borderRadius: "10px",
              marginLeft: "100px",
              marginTop: "70px",
            }}
            src="https://images.pexels.com/photos/2726181/pexels-photo-2726181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className="div">
          <h3 style={{fontSize:"30px",color:"black"}}>John and Emily's Experience with Blissful Bonds</h3>
          <p style={{padding:"10px", fontSize:"18px",paddingLeft:"60px",paddingRight:"30px"}}>
            <span><h6 style={{"color":"black",fontSize:"22px",marginTop:"15px"}}>John:</h6></span> "Blissful Bonds has truly transformed our relationship. We
            initially signed up out of curiosity, but it quickly became a staple
            in our lives. The exercises and communication tools they provide
            helped us understand each other on a much deeper level. It's like we
            were given a new language to express our love and concerns, which
            has brought us closer than ever before." <h6 style={{"color":"black",fontSize:"22px",marginTop:"15px"}}>Emily:</h6> "I can't say enough
            good things about Blissful Bonds. The workshops are engaging,
            insightful, and fun. They made us feel like we're not alone in our
            struggles and that there are practical ways to improve our
            relationship. The support from the community and the expert advice
            we received were invaluable. It's not just about fixing problems but
            about building a stronger, more joyful connection. We're so grateful
            for this experience!" <h6 style={{"color":"black",fontSize:"22px",marginTop:"15px"}}>John and Emily:</h6> "Overall, Blissful Bonds has
            been a game-changer for us. We've seen a significant improvement in
            our communication, trust, and intimacy. We highly recommend it to
            any couple looking to deepen their bond and navigate the
            complexities of a relationship with more ease and joy."
          </p>
          </div>
        </div>
      </div>
     
    </>
    </motion.div>
  );
};

export default Plus;
