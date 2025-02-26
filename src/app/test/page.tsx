import '../styles.css'

import devises from './devices.png'
import routingPlatform from './routingPlatform.png'

const Test = () => {
  return (
    <div>
      <section className="section section--dark">
        <div className="container containerLine">
          <h1 className="title">Looking To Do More with Routing Software?</h1>
          <h2 className="subtitle beforeHidden">
            Look No Further, We Have It All...
          </h2>

          <div className="devicesContent">
            <img className="devices" src={devises.src} alt="Devides" />
            <div className="content__text">
              <p className="futureListTitle">ONE SYSTEM</p>
              <p className="futureListTitle">Does Everything</p>
              <ul className="futureList">
                <li>ROUTE OPTIMIZATION</li>
                <li>FIELD TRIP MANAGEMENT</li>
                <li>GPS TRACKING</li>
                <li>ATTENDANCE TAKING</li>
                <li>PARENTS PORTAL</li>
                <li>TEXT MESSAGING</li>
                <li>EMAIL COMMUNICATION</li>
                <li>DATA INTEGRATION SFTP & API</li>
                <li>AI ROUTE BUILDING</li>
                <li>PARENTS APP for Android / ios</li>
                <li>DRIVER CONSOLE Android / ios</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container container--relative containerLineLeft">
          <h1 className="title titleSecondary">How to Upgrade Your System:</h1>
          <h2 className="subtitle">3 Easy Steps...</h2>

          <div className="steps">
            <article className="step">
              <div className="step__circle">
                <span className="step__number">1.</span>
              </div>
              <h3 className="step__title">Talk to Us</h3>
              <p className="step__subtitle">
                Talk to us about your needs. We will be happy to learn more
                about your transportation operation, what you're looking to
                accomplish and the technology that you wish to employ.
              </p>
            </article>
            <article className="step">
              <div className="step__circle">
                <span className="step__number">2.</span>
              </div>
              <h3 className="step__title">Choose Your Components</h3>
              <p className="step__subtitle">
                We will show you a complete demo of the entire system. This
                helps us guide you to the correct products. We will then put
                together a quote. Choose and pay only tor what you need.
              </p>
            </article>
            <article className="step">
              <div className="step__circle">
                <span className="step__number">3.</span>
              </div>
              <h3 className="step__title">We Handle the Rest</h3>
              <p className="step__subtitle">
                Our experts will migrate everything seamlessly to your new
                platform, transfering all your data and routes. We will help to
                deploy all components that you purchased and train your staff.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-secondary">
        <div className="container">
          <h2 className="titleWhite">Choose and Pay Only for What You Need</h2>
          <h3 className="subtitle afterHidden">Add More at any Time...</h3>
          <img
            className="routingPlatformImg"
            src={routingPlatform.src}
            alt="routing software"
          />
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <h2 className="heading heading--primary">Ready to Learn More?</h2>
          <h3 className="subtitle afterHidden beforeHidden">
            Click the "Help" button in the upper right to contact your SBM Rep.
          </h3>
        </div>
        <div className="contacts container">
          <article>
            <p className="contactTitle">Call Us Toll Free</p>
            <a href="tel:+18886676883" className="contactSubtitle">
              1.888.667.6883
            </a>
          </article>
          <article>
            <p className="contactTitle">Email Us</p>
            <a
              href="mailto:support@schoolbusmanager.com"
              className="contactSubtitle"
            >
              support@schoolbusmanager.com
            </a>
          </article>
          <article>
            <p className="contactTitle">Business Hours</p>
            <p className="contactSubtitle">Mon-Fri 9:00am to 5:00pm EST</p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Test
