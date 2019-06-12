import React from 'react'

const Client = ({ name, img, url }) => (
  <a href={url} target="_blank" rel="noreferrer noopener nofollow">
    <img src={img} alt={name} className="logo" />
  </a>
)

export default Client
