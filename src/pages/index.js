import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Ruslan Bredikhin</title>
          <meta
            name="description"
            content="Ruslan Bredikhin, senior software developer from Montreal, Canada"
          />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Summary</h2>
            </header>
            <p>
              Senior software engineer with over a decade of experience and high
              level of expertise in all aspects of Web-production including
              development, testing, deployment and maintenance.
            </p>
            <p>
              <em>
                While holding a degree in informatics and mathematics, I admit
                that most of my knowledge comes from the real life experience. I
                have worked with a lot of software stacks and Web technologies,
                from LAMP (Linux, MySQL, Apache, PHP) and Ruby on Rails to MEAN
                (MongoDB, Express.js, Angular.js, Node.js), Golang, Erlang and
                Elixir. One of the main things I believe in is that keeping
                oneself up-to-date with the latest trends is the only way to
                stay on top in such rapidly changing industry as IT.
              </em>
            </p>
          </section>
          <section id="two">
            <header className="major">
              <h2>Technologies</h2>
            </header>
            <li>
              Node.js, Ruby & Ruby on Rails, Elixir, Erlang, Golang, Python, PHP
            </li>
            <li>PostgreSQL, MongoDB, Redis</li>
            <li>React.js, Redux, GraphQL, TypeScript, CSS</li>
            <li>Git, Docker, Kubernetes, Linux shell, Vim, AWS</li>
          </section>
          <section id="three">
            <header className="major">
              <h2>Languages</h2>
            </header>
            <p>English, French, Spanish, Portuguese, Russian</p>
          </section>
          <section id="four">
            <header className="major">
              <h2>Education</h2>
            </header>
            <h3>Master degree (Hons)</h3>
            <p>
              July 2002, Moscow Power Engineering University / Russia
              <br />
              Major: Applied Mathematics and Informatics
            </p>
            <h3>Bachelor degree (Hons)</h3>
            <p>
              July 2000, Moscow Power Engineering University / Russia
              <br />
              Major: Applied Mathematics and Informatics
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
