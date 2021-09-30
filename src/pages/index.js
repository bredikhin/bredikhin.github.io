import React from 'react'
import Helmet from 'react-helmet'

import Client from '../components/Client'
import Layout from '../components/layout'

import logo1 from '../assets/images/client1.svg'
import logo2 from '../assets/images/client2.svg'
import logo3 from '../assets/images/client3.svg'
import logo4 from '../assets/images/client4.svg'
import logo5 from '../assets/images/client5.svg'
import logo6 from '../assets/images/client6.svg'
import logo7 from '../assets/images/client7.svg'

const clients = [
  {
    name: 'Lookbooks',
    img: logo1,
    url: 'https://www.lookbooks.com/',
  },
  {
    name: 'Ssense',
    img: logo2,
    url: 'https://www.ssense.com/',
  },
  {
    name: 'Waggl',
    img: logo3,
    url: 'https://www.waggl.com/',
  },
  {
    name: 'Clevertech',
    img: logo4,
    url: 'https://www.clevertech.biz/',
  },
  {
    name: 'Automotive Data Solutions',
    img: logo5,
    url: 'https://www.adsdata.ca/',
  },
  {
    name: 'Spiria',
    img: logo6,
    url: 'https://www.spiria.com/',
  },
  {
    name: 'Estalio',
    img: logo7,
    url: 'http://www.estalio.com/',
  },
]

const HomeIndex = () => (
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
            While holding a degree in informatics and mathematics, I admit that
            most of my knowledge comes from the real life experience. I have
            worked with a lot of software stacks and Web technologies, from LAMP
            (Linux, MySQL, Apache, PHP) and Ruby on Rails to MEAN (MongoDB,
            Express.js, Angular.js, Node.js), Golang, Erlang and Elixir. One of
            the main things I believe in is that keeping oneself up-to-date with
            the latest trends is the only way to stay on top in such rapidly
            changing industry as IT.
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
        <li>React.js, React Native, TypeScript, Redux, GraphQL, CSS</li>
        <li>Git, Docker, Kubernetes, AWS, Linux shell, Vim</li>
      </section>
      <section id="three">
        <header className="major">
          <h2>Projects and Clients</h2>
        </header>
        <ul className="clients">
          {clients.map((client) => (
            <li key={client.name}>
              <Client {...client} />
            </li>
          ))}
        </ul>
      </section>
      <section id="four">
        <header className="major">
          <h2>Languages</h2>
        </header>
        <p>English, French, Spanish, Portuguese, Italian, Russian</p>
      </section>
      <section id="five">
        <header className="major">
          <h2>Education</h2>
        </header>
        <h3>Master degree (Hons)</h3>
        <p>
          July 2002, Moscow Power Engineering University / Russia
          <br />
          Major: Applied Mathematics and Informatics
        </p>
      </section>
    </div>
  </Layout>
)

export default HomeIndex
