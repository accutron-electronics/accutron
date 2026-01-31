import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Contact(){
  return (
    <section>
      <Helmet>
        <title>Contact — Accutron — accutron.eu</title>
        <meta name="description" content="Contact Accutron Electronics — accutron.eu" />
      </Helmet>
      <h1>Contact</h1>
      <p>Please direct inquiries to the following contact for Accutron Electronics.</p>

      <h2>Primary Contact</h2>
      <ul>
        <li><strong>Name:</strong> Timo Tarvainen, MSEE</li>
        <li><strong>Email:</strong> <a href="mailto:info@accutron.eu">info@accutron.eu</a></li>
        <li><strong>Phone:</strong> +358 400587345</li>
        <li><strong>Domain:</strong> accutron.eu</li>
      </ul>
    </section>
  )
}
