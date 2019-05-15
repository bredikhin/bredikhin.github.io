import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://ca.linkedin.com/in/ruslanbredikhin/en"
                className="icon fa-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/bredikhin"
                className="icon fa-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ruslanbredikhin"
                className="icon fa-twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@ruslanbredikhin"
                className="icon fa-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Medium</span>
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/1330470/bredikhin"
                className="icon fa-stack-overflow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">StackOverflow</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; 2019 Ruslan Bredikhin</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
