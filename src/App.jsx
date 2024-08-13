import './App.css'
import Header from './components/header'
import Footer from './components/footer'

function App() {

  return (
    <>
      <body>
        <div className="wrapper">
          <Header />

          <main className="site-main">
            <section className="hero">
              <img src="resources/hero-mobile.png" />
              <article>
                <strong id="discover">Discover the Perfect Fireplace ...</strong><br /><strong>Book consultation: </strong><span id="phone-number">0121 345 6789</span>
              </article>
            </section>

            <section className="how-it-works">
              <h2>How it works.</h2>

              <section id="how-it-works-1">
                <img src="resources/how-it-works-1.png" alt="" />
                <h3>Give us a call ...</h3>
                <p>
                  Call us and book in a "Design Consultation" on a date and time to
                  suit you.
                </p>
              </section>

              <section id="how-it-works-2">
                <img src="resources/how-it-works-2.png" alt="" />
                <h3>We come to you ...</h3>
                <p>
                  We come to your home to do an assessment of the space and to your
                  style preference.
                </p>
              </section>

              <section id="how-it-works-3">
                <img src="resources/how-it-works-3.png" alt="" />
                <h3>We recommend ...</h3>
                <p>We send you a bespoke set of fireplace recommendations.</p>
              </section>
            </section>
          </main>

          <Footer />
        </div>
      </body>
    </>
  )
}

export default App
