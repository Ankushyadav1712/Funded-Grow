import React from "react";

const AboutHero = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="mt-5 fs-2 text-center p-2">
          We pioneered the discount broking model in India.<br></br>Now, we are breaking
          ground with our technology.
        </h1>
      </div>
      <div className="row p-5 mt-5 border-top">
        <div className="col-6">
            <p>
            We kick-started operations on the 10th of September, 2024 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Funded <span style={{color:'green'}}>Grow</span>.
            </p>
            <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
            <p>
            Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
            </p>
        </div>
        <div className="col-6">
            <p>
            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
            </p>
            <p>
            And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
