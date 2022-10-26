import React from "react";
import TitleAndDescription from "../components/titleAndDescription/TitleAndDescription";
import Statistics from "../components/statistics/Statistics";

const About = () => {
  return (
    <div>

      
      <TitleAndDescription
        title="About Us"
        description="Headquartered in NYC, Shapeways makes world-class 3D printing more accessible to everyone through automation, innovation and digitization, and also provides outsourced additive manufacturing services for OTTO. Developed as proprietary software by Shapeways engineers, OTTO is a comprehensive ordering system that manages the entire production process from secure uploading of 3D models to expedited delivery in customized packaging."
      />
      <img width="800" height="478" src="https://www.shapeways.com/cdn-cgi/image/quality=85,gravity=auto,format=auto,fit=scale-down,width=800/wp-content/uploads/2021/02/basf-features-forwardam-@2x.jpg" class="attachment-large size-large" alt="" loading="lazy" lazyload="1"></img>

      <TitleAndDescription
        title="Quality Products"
        description="Shapeways has developed purpose-built software and maintains a wide selection of materials and technologies to streamline the supply chain, lowering manufacturing barriers and expediting delivery of quality 3D printed products. Find out more about OTTO at ottosoftware.com."
      />
      <img
        width="800"
        height="533"
        src="https://www.shapeways.com/cdn-cgi/image/quality=85,gravity=auto,format=auto,fit=scale-down,width=800/wp-content/uploads/2021/03/about-features-20millionparts-@2x.jpg"
        class="attachment-large size-large"
        alt=""
        loading="lazy"
        lazyload="1"
      ></img>

<Statistics />
      <TitleAndDescription
        title="Certifications"
        description="ISO 9001 Certified
        
        Headquartered in NYC, Shapeways has ISO 9001-compliant manufacturing facilities in Long Island City, NY, Eindhoven, the Netherlands, and Livonia, MI.
        
        IATF 16949 Certified​​
        
        Shapeways is one of a very few AM companies to receive IATF 16949 certification, meeting the requirements for quality management systems in automotive part manufacturing at our Eindhoven and Livonia facilities.
        
        ITAR Certified​​"
      />
      <img width="800" height="533" src="https://www.shapeways.com/cdn-cgi/image/quality=85,gravity=auto,format=auto,fit=scale-down,width=800/wp-content/uploads/2021/03/about-features-isocertified-@2x.jpg" class="attachment-large size-large" alt="" loading="lazy" lazyload="1"></img>
    </div>
  );
};

export default About;
