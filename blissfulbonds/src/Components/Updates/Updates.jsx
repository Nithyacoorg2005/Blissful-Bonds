import React from "react";
import "./Updates.css";
import imagelove from "../../images/image copy 3.png";

const Updates = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "053fe42b-e1db-4bc7-b51d-1f1a31475799");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="update">
        <div className="img">
          <img src={imagelove} alt="" />
        </div>
        <div className="words">
          <h1>Join our Blissful Bonds Community...!</h1>
          <p>
            At Blissful Bonds, we believe in the magic of connections. Whether
            you're seeking inspiration, exclusive offers, or the latest updates
            on our events, we've got you covered. Sign up to be part of our
            vibrant community and make every moment count.
          </p>
        </div>
      </div>
      <div className="getU">
        <h2>Unlock Exclusive Offers and Inspiring Content</h2>
        <div className="U1">
          <video controls autoPlay with muted width="500" height="500">
            <source
              src="https://videos.pexels.com/video-files/4326788/4326788-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
            cannot play this video
          </video>
          <p>
            By joining the Blissful Bonds community, you gain access to an
            exclusive collection of free e-books designed to enrich your
            personal and professional relationships. Dive into premium blog
            posts filled with expert insights and practical tips to enhance your
            connections. Explore a wealth of resources tailored to inspire and
            guide you on your journey to meaningful bonds. Stay updated with the
            latest trends and advice in the realm of relationships and personal
            growth. Visit Blissful Bonds today to start your journey towards
            deeper, more fulfilling connections.
          </p>
        </div>
        <div className="U2">
          <p>
            By subscribing to Blissful Bonds, you'll gain access to our premium
            blog posts, meticulously crafted to provide you with expert insights
            and practical advice on building and nurturing meaningful
            relationships. Each post is designed to inspire and empower you,
            offering valuable knowledge that you can apply to enhance your
            personal and professional connections. Whether you're looking to
            deepen existing relationships or form new ones, our premium content
            will guide you every step of the way. Visit Blissful Bonds to unlock
            this exclusive resource and take your relationships to the next
            level.
          </p>
          <video controls autoPlay with muted width="500" height="500">
            <source
              src="https://videos.pexels.com/video-files/4912885/4912885-uhd_2560_1440_24fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="U1">
          <video controls autoPlay with muted width="500" height="500">
            <source
              src="https://videos.pexels.com/video-files/7842404/7842404-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
            cannot play this video
          </video>
          <p>
            By joining the Blissful Bonds community, you'll receive exclusive
            invitations to free webinars hosted by industry experts, covering
            essential topics on relationships and personal growth. These
            interactive sessions provide you with valuable insights, practical
            tips, and the opportunity to ask questions directly to the experts.
            Additionally, you'll get early bird access to our highly
            sought-after workshops, ensuring you secure your spot before they
            fill up. Our workshops offer hands-on experiences and in-depth
            learning to help you build and nurture meaningful connections. Stay
            ahead of the curve with Blissful Bonds and enhance your journey
            towards stronger, more fulfilling relationships.
          </p>
        </div>
        <div className="U2">
          <p>
            Joining the Blissful Bonds community gives you the chance to
            participate in our exciting monthly giveaways and contests. Every
            month, you can win exclusive products and services designed to
            enrich your relationships and personal growth journey. Our contests
            are not only fun but also offer opportunities to engage with our
            community and share your experiences. From unique gifts to special
            discounts, these giveaways add a touch of excitement to your journey
            with Blissful Bonds. Don't miss out on the chance to win big and
            enhance your connections—sign up today!
          </p>
          <video controls autoPlay with muted width="500" height="500">
            <source
              src="https://videos.pexels.com/video-files/7914866/7914866-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="touch">
        <h1>Subscribe to get Notifications</h1>
        <div className="touch1">
          <form onSubmit={onSubmit}>
          <input type="text" placeholder="Enter your name:" name="name" required/>
          <br/>
          <input type="text" placeholder="Enter your Email" name="email" required/>
          <br/>
          <textarea name="message" required cols="33" rows="11">
            
            
          </textarea>
          <br/>
         <button type="submit">Subscribe</button>
         </form> 
         <spam>{result}</spam>
          </div> 
             
      </div>
         </>
  );
};

export default Updates;
