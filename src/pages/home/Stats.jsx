import React from "react";

const Stats = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-5">
          <section className="trust-section">
            <div className="text-container pt-2 text-green-400">
              <h1>Trust with confidence</h1>
              <div className="text-block pt-4 text-black">
                <h3>Customer-first always</h3>
                <p>
                  That's why 1.5+ crore customers trust Funded Grow with ₹4.5+ lakh
                  crores of equity investments and contribute to 15% of daily
                  retail exchange volumes in India.
                </p>
              </div>

              <div className="text-block text-black">
                <h3>No spam or gimmicks</h3>
                <p>
                  No gimmicks, spam, "gamification", or annoying push
                  notifications. High quality apps that you use at your pace,
                  the way you like.
                </p>
              </div>

              <div className="text-block text-black">
                <h3>The Funded universe</h3>
                <p>
                  Not just an app, but a whole ecosystem. Our investments in 30+
                  fintech startups offer you tailored services specific to your
                  needs.
                </p>
              </div>

              <div className="text-block text-black">
                <h3>Do better with money</h3>
                <p>
                  With initiatives like Nudge and Grow, we don't just facilitate
                  transactions, but actively help you do better with your money.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default Stats;
