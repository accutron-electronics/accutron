import React from 'react'
import { Helmet } from 'react-helmet-async'

const externalLinks = [
  { title: 'Anello Photonics - Fiber Optic Gyroscope Technology', url: 'https://www.anellophotonics.com' },
  { title: 'Elcoflex', url: 'https://www.elcoflex.com' },
  { title: 'Soundmix', url: 'https://www.soundmix.fi' }
]

export default function Links(){
  return (
    <section>
      <Helmet>
        <title>Links — Accutron — accutron.eu</title>
        <meta name="description" content="Accutron curated links. accutron.eu" />
      </Helmet>
      <h1>Links</h1>
      <p>Selected resources and partners relevant to guidance, control systems, and precision hardware.</p>
      <ul>
        {externalLinks.map(l => (
          <li key={l.url}><a href={l.url} target="_blank" rel="noopener noreferrer">{l.title}</a></li>
        ))}
      </ul>
    </section>
  )
}
