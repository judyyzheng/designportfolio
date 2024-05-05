import React, { useEffect } from "react";
import "./TradeBookerPage.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Label from "../../components/Label/Label.tsx";
import Quote from "../../components/Quote/Quote.tsx";
import Slideshow from "../../components/Slideshow/Slideshow.tsx";
import Tag from "../../components/Tag/Tag.tsx";
import FadeImages from "../../components/FadeImages/FadeImages.tsx";
import PageNavbar from "../../components/PageNavbar/PageNavbar.tsx";

// Assets
import Form from "../../assets/projects/TradeBooker/form.svg";
import Form2 from "../../assets/projects/TradeBooker/form2.svg";
import Form3 from "../../assets/projects/TradeBooker/form3.svg";
import HumanError from "../../assets/projects/TradeBooker/humanerror.svg";
import HumanError2 from "../../assets/projects/TradeBooker/humanerror2.svg";
import HumanError3 from "../../assets/projects/TradeBooker/humanerror3.svg";
import TradingPlatforms from "../../assets/projects/TradeBooker/tradingplatforms.svg";
import TradingPlatforms2 from "../../assets/projects/TradeBooker/tradingplatforms2.svg";
import TradingPlatforms3 from "../../assets/projects/TradeBooker/tradingplatforms3.svg";
import TradingPlatforms4 from "../../assets/projects/TradeBooker/tradingplatforms4.svg";
import Result from "../../assets/projects/TradeBooker/result.svg";
import Result2 from "../../assets/projects/TradeBooker/result2.svg";
import BulkUploadFeature from "../../assets/projects/TradeBooker/bulkuploadfeature.svg";
import CentralizeDataEntry from "../../assets/projects/TradeBooker/centralizedataentry.svg";
import EliminateManualError from "../../assets/projects/TradeBooker/eliminatemanualerror.svg";
import EliminateManualError2 from "../../assets/projects/TradeBooker/eliminatemanualerror2.svg";
import Prototype1 from "../../assets/projects/TradeBooker/prototype1.jpg";
import Prototype2 from "../../assets/projects/TradeBooker/prototype2.jpg";
import Prototype3 from "../../assets/projects/TradeBooker/prototype3.jpg";
import Prototype4 from "../../assets/projects/TradeBooker/prototype4.jpg";
import Prototype6 from "../../assets/projects/TradeBooker/prototype6.jpg";
import Prototype7 from "../../assets/projects/TradeBooker/prototype7.jpg";
import Prototype8 from "../../assets/projects/TradeBooker/prototype8.jpg";
import Prototype9 from "../../assets/projects/TradeBooker/prototype9.jpg";
import Prototype10 from "../../assets/projects/TradeBooker/prototype10.jpg";
import Prototype11 from "../../assets/projects/TradeBooker/prototype11.jpg";
import Prototype12 from "../../assets/projects/TradeBooker/prototype12.jpg";
import Prototype13 from "../../assets/projects/TradeBooker/prototype13.jpg";
import Prototype14 from "../../assets/projects/TradeBooker/prototype14.jpg";
import Prototype15 from "../../assets/projects/TradeBooker/prototype15.jpg";
import TradeBookerLogo from "../../assets/projects/TradeBooker/tradebookerlogo.svg";

function TradeBookerPage() {

  useEffect(() => {
    AOS.init({
      duration: 200, // Animation duration in milliseconds
      easing: 'ease-out', // Easing function for the animation
      once: false, // Whether to only animate elements once
    });
  }, []);

  return (
    <>
      <PageNavbar
        project="tradebooker"
        links={[
          "Background",
          "Problem",
          "Design",
          "Application",
          "Prototypes",
          "Results",
          "Reflection",
        ]}
      />
      {/* Background */}
      <div
        id="background"
        className="section-tb"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <div className="p3-tb" style={{ color: "#1e1e1e" }}>
          Global Banking and Markets
          <br />
          Trade Booker API
        </div>
        <div className="header-tags">
          <Tag tags={["Scotiabank", "Global Banking and Markets"]}/>
          <Tag tags={["Flask", "Python", "SQL"]}/>
        </div>
        <div className="white-gradient-bg">
          <div
            className="p4"
            style={{ paddingLeft: "10%", paddingRight: "10%" }}
          >
            <div className="p5">my trading internship</div>
            <p>
              To give a bit of a background, I had zero capital market
              experience when I first joined Scotiabank as a Sales and Trading
              intern on the Global Equity Derivatives team.{" "}
            </p>
            <p>
              The learning curve was super steep for me, and I struggled a lot
              in the first few weeks with grasping all the financial models,
              trading platforms and trader lingo.
            </p>
            <p>
              However, coming from a tech and CS background, I realized that a
              lot of this logic that I found so hard to understand was stored
              within our backend scripts. This meant I could actually get a ton
              of answers by digging through the Python code base.{" "}
            </p>
            <p>
            <div className="p5">The turning point </div>
            </p>
            <p>
              Once I built up an understanding of our pricing strategies and
              trade processes at the base level, I ended up finding a ton of
              inefficiencies in our tech and opportunities to improve the
              workflow of our team!{" "}
            </p>
            <p>A few projects I completed during the four months were:</p>
            <ol>
              <li>
                <b>
                  Automating our end-of-day MOC booking process through a
                  Python-Selenium GUI script.
                </b>
              </li>
              <li>
                <b>
                  Implementing an Outlook trigger attached to our BBG vols data.
                </b>
              </li>
              <li>
                <b>
                  Data-scraping legal PDFs to enable auto imports into our note
                  pricers.
                </b>
              </li>
              <li>
                <b>... and the Trade Booker API!</b>
              </li>
            </ol>
            <img id="tb-logo" src={TradeBookerLogo} data-aos="fade-up"/>
          </div>
        </div>
      </div>

      {/* Problem */}
      {/* <div
        id="problem"
        className="section-tb"
        style={{ backgroundColor: "transparent", backdropFilter: "blur(20px)" }}
      >
        <Label label="Problem" />
        <div className="p2-tb" style={{ padding: "10vh" }}>
          How do we <b>steamline</b> the tradebooking process?
        </div>
      </div> */}

      <div
        id="problem"
        className="section-tb"
        style={{ backgroundColor: "#1e1e1e" }}
      >
        <div
          className="p5"
          style={{
            textAlign: "center",
            color: "white",
            backgroundColor: "#1e1e1e",
          }}
        >
          there were three root issues we faced in the trade booking process.
        </div>
        <div className="p4" style={{ textAlign: "center", color: "white" }}>
          the slideshows below provide an overview of these pain points and
          their causes!
        </div>
      </div>

      <div className="section-tb" style={{ backgroundColor: "whitesmoke" }}>
        <div className="white-gradient-bg">
          <Label label="the first issue" />
          <div className="p5" style={{ textAlign: "center" }}>
            1. a lack of data standardization
          </div>
          <Slideshow
            images={[
              {
                src: TradingPlatforms,
                text: "Within the Equity Derivatives team, we were broken up into various smaller teams that all used several different third-party platforms to make market transactions.",
              },
              {
                src: TradingPlatforms2,
                text: "The data formats had no consistency either, oftentimes the names of securities would be represented with different abbreviations or dates would refer to different things. ",
              },
              {
                src: TradingPlatforms3,
                text: "Because of this lack of standardization, we couldn’t build any direct integration into our own database.",
              },
              {
                src: TradingPlatforms4,
                text: " So at the end of the day, all the transactions we made on these different platforms would need to be manually booked into our internal records.",
              },
            ]}
            duration={50000}
          />
        </div>
      </div>

      <div className="section-tb" style={{ backgroundColor: "whitesmoke" }}>
        <div className="white-gradient-bg">
          <Label label="the second issue" />
          <div className="p5" style={{ textAlign: "center" }}>
            2. a static booking form
          </div>
          <Slideshow
            images={[
              {
                src: Form,
                text: "We used a single form template to log every product we dealt with.",
              },
              {
                src: Form2,
                text: "If we entered into a swap we’d want to specify every single payment date. However for futures, even though it was a standardized product, we’d still need to input every one of those fixed fields manually. ",
              },
              {
                src: Form3,
                text: "Batch orders were not always filled at the same price. One order could be split into several partial fills that would need to be booked as individual tickets (even though all the details were the same).",
              },
            ]}
            duration={50000}
          />
        </div>
      </div>

      <div className="section-tb" style={{ backgroundColor: "whitesmoke" }}>
        <div className="white-gradient-bg">
          <Label label="the third issue" />
          <div className="p5" style={{ textAlign: "center" }}>
            3. prone to human error
          </div>
          <Slideshow
            images={[
              {
                src: HumanError,
                text: "Traders get help to book trades from the team. Often, this request would be made through a Teams message, or a video call, and a lot of the details would get misconstrued and lost in translation.",
              },
              {
                src: HumanError2,
                text: "Because everything was booked manually, if someone had typed in an extra cent, we’d be chased to reconcile our records.",
              },
              {
                src: HumanError3,
                text: "So even after the market closed, the traders often spent another hour trying to comb through every single record just to find that missing penny.",
              },
            ]}
            duration={50000}
          />
        </div>
      </div>

      {/* Design */}
      <div id="design" className="section-tb">
        <Label label="Design" />
        <div className="p5" style={{ textAlign: "center" }}>
          a brief note on my motivations
        </div>
        <div className="p4">
          A big part of my job was to help the traders book these trades
          whenever they were too busy. So I really <b>firsthand</b> felt all of
          these pains.{" "}
        </div>
        <div className="p4">
          I made a ton of booking mistakes when I first started. I didn’t have a
          good sense yet of how much everything should be priced. After
          realizing this, I decided to take on building the Trade Booker API
          which was a trade booking application that could{" "}
          <b>catch my errors</b>.
        </div>
        <div style={{ padding: "50px", alignSelf: "right" }}>
          <Quote
            quote="Even if the price of a contract had been floating at around 100 dollars for
              years, I wasn’t able to catch that it had been accidentally booked at
              10 dollars."
            name="my errors pushed me to build this project"
            description="(i didn't know what I was doing)"
          />
        </div>
        <div className="p4">
          To summarize, the main issues with our current workflow was a{" "}
          <b>lack of data standardization</b> due to the variety of platforms we
          were using, a <b>static booking form</b> for all our products, and a
          manual process that was very <b>prone to human error</b>.
        </div>
      </div>

      {/* Solution */}
      <div
        id="solution"
        className="section-tb"
        style={{ backgroundColor: "#1e1e1e" }}
      >
        <div className="p5-tb">
          My solution took a <b>three-pronged approach:</b>
        </div>
        <div className="three-step">
          <div data-aos="fade-up">
            <div className="p5-white">
              1. <br />
              centralize data entry
            </div>
            <div className="p1">
              To tackle lack of data standardization by centralizing the data
              entry from multiple sources.
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="p5-white">
              2.
              <br />
              bulk upload feature
            </div>
            <div className="p1">
              To create a dynamic booking form by providing some sort of a bulk
              upload feature.
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="p5-white">
              3.
              <br />
              eliminate manual input errors
            </div>
            <div className="p1">
              To eliminate human error by reducing the layers of intermediaries
              as much as possible.
            </div>
          </div>
        </div>
      </div>

      {/* Application */}
      <div
        id="application"
        className="section-tb"
        style={{ backgroundColor: "transparent" }}
      >
        <Label label="Application" />
        <div className="application">
          <div>
            <div className="p5" style={{ textAlign: "center" }}>
              centralizing data entry
            </div>
            <img src={CentralizeDataEntry} data-aos="fade-left" />
            <div className="gray-gradient-bg">
              <div className="p4">
                <strong>explanation:</strong>
                On the back-end, the input from each of the platforms was parsed
                into a consistent JSON object, and then displayed back to the
                user. I implemented an initial layer of validation in this step
                to catch any errors in the file formats or unrecognized input
                text.
              </div>
            </div>
          </div>
          <div>
            <div className="p5" style={{ textAlign: "center" }}>
              eliminating manual input errors
            </div>
            <img src={EliminateManualError} data-aos="fade-down"/>
            <img src={EliminateManualError2} data-aos="fade-up"/>
            <div className="gray-gradient-bg">
              <div className="p4">
                <strong>explanation:</strong>
                To add another layer of validation, the API also mapped each of
                the securities and trader id fields to what we currently had in
                our records. So for example, if a security name hadn’t been
                created yet, this would be logged as an invalid security.
              </div>
            </div>
          </div>
          <div>
            <div className="p5" style={{ textAlign: "center" }}>
              bulk upload feature
            </div>
            <img src={BulkUploadFeature}  data-aos="fade-left"/>
            <div className="gray-gradient-bg">
              <div className="p4">
                <strong>explanation:</strong>
                To actually update the data, I used Flask and Python to set up a
                route from the client to the server and implemented the
                connection access into the targeted SQL collection. Multiple
                trades could be parsed in a single upload, and the application
                determined what type of instrument was inputted on the backend.
                So this basically created a bulk upload feature.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prototypes */}
      <div
        id="prototypes"
        className="section-tb"
        style={{ backgroundColor: "transparent" }}
      >
        <Label label="Prototype" />
        <div className="prototypes">
          <div className="p5" style={{ textAlign: "center" }}>
            Trader Booker API: The Front-end
          </div>
          <div className="p4" style={{ textAlign: "center" }}>
            The Trader Booker API took in several options for upload. Once you
            pasted in trades, you could see the mapped fields in a table and
            re-verify that everything was uploaded correctly. Similarly, you
            could also upload a CSV and it would map those fields into the
            table. You could also see a history of the trades you’d booked, so
            you could keep track of your activity and this prevented you from
            double booking anything. If there was an error in either input, it
            would throw a message onto the screen but otherwise you can submit
            the trades directly and they would be inserted into our database.
          </div>
          <Slideshow
            images={[
              { src: Prototype1 },
              { src: Prototype2 },
              { src: Prototype3 },
              { src: Prototype4 },
              { src: Prototype6 },
              { src: Prototype7 },
              { src: Prototype8 },
              { src: Prototype9 },
              { src: Prototype10 },
              { src: Prototype11 },
              { src: Prototype12 },
              { src: Prototype13 },
              { src: Prototype14 },
              { src: Prototype15 },
            ]}
            duration={800}
          />
        </div>
      </div>

      {/* Results */}
      <div id="results" className="section-tb">
        <div
          className="gray-gradient-bg"
          style={{ paddingLeft: "10%", paddingRight: "10%" }}
        >
          <Label label="Results" />
          <div className="p5" style={{ textAlign: "center" }}>
            the impact:
          </div>
          <div className="p4">
            The Trade Booker simplified the booking process and was able to
            merge multiple points of contact and manual processes into a single
            pipeline.
          </div>
          <div className="p4">
            What it allowed us to do was make 10 trades on the market and bulk
            upload all of them with a paste and click. And all those 10 trades
            would have the exact quantity and price at which they were traded
            because all the data came directly from the trading platform. This
            also meant we got a lot fewer messages from our Middle Office
            because if you’d accidentally mistyped your trader id, the
            application caught that before it ever was sent out.
          </div>
          <FadeImages images={[Result, Result2]} />
        </div>
      </div>

      {/* Summary of Results */}
      <div
        id="summary"
        className="section-tb"
        style={{ backgroundColor: "#1e1e1e" }}
      >
        <div className="p5-tb">
          A summary of achievements:
        </div>
        <div className="impact-points">
          <div>
            <div className="impact-p">✅ A single pipeline</div>
            <div className="p4">
              The application was able to centralize our trade entry from
              several third-party platforms, with the versatility to accomodate
              several data formats.
            </div>
          </div>
          <div>
            <div className="impact-p">
              ✅ Minimize the involvement of intermediaries
            </div>
            <div className="p4">
              With a single pipeline, traders no longer needed to turn to
              middlemen for help - this significantly reduced the time and
              effort for each trade booked.
            </div>
          </div>
          <div>
            <div className="impact-p">
              ✅ Eliminated upwards of 90% of reconciliation errors
            </div>
            <div className="p4">
              As the data was directly imported from the market, there was
              little manual interception. This meant nearly all of our
              post-trade reconciliation errors were prevented, and made for a
              much more robust process!
            </div>
          </div>
        </div>
      </div>

      {/* Reflection */}
      <div
        id="reflection"
        className="section-tb"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="gray-gradient-bg">
          <Label label="Reflection" />
          <div
            className="p4"
            style={{ paddingLeft: "10%", paddingRight: "10%" }}
          >
            <div className="p5">what was the biggest impact you saw?</div>
            <p>
              So I’d caught the problem kind of early into my term, when we were
              maybe performing 20 or 30 future trades in a day and it was still
              a small bottleneck that was annoying but manageable. In the
              beginning, I definitely built the project pretty much on the side,
              kind of as a creative outlet in between the other work I was
              doing. It wasn’t too clear how big of an impact it would have on
              our actual day-to-day.
            </p>
            <p>
              If you remember the Silicon Valley Bank collapse earlier this
              year... once that happened the market was so volatile so instead
              of those 20 or 30 trades, we’d actually be booking nearly 100 per
              trader every single day just to keep up with how quickly the
              prices were flying around. On top of that, because everything was
              blowing up, the rush caused our booking errors to triple, and we
              ended up spending a majority of the after market hours racing to
              fix the reconciliation errors. So what used to be kind of an
              “annoying” task exploded into a really big problem for the whole
              team and yeah everything was on fire. I actually completed the
              project the week before all this occurred, and once the SVB
              collapse happened we were almost forced to test it out in
              “production”.
            </p>
            <div className="p5">what's a piece of advice you'd take away?</div>
            <p>
              Don't be nervous about your weaknesses in a new role. They can
              lead to really creative solutions!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default TradeBookerPage;
