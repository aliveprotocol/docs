import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Stream the way you want',
    imageUrl: 'img/undraw_choose.svg',
    description: (
      <>
        Alive is built as a live streaming protocol that is actually decentralized which
        any video DApp can take advantage of. Choose your favorite DApp and file sharing
        protocol to stream to.
      </>
    )
  },
  {
    title: 'Communicate freely',
    imageUrl: 'img/undraw_video_influencer.svg',
    description: (
      <>
        Stream your content and interact with your viewers without worrying about
        arbitrary censorship as Alive does not the authority to ban anyone on the
        immutable blockchains.
      </>
    )
  },
  {
    title: 'Highly scalable',
    imageUrl: 'img/undraw_connected_world.svg',
    description: (
      <>
        Alive is not limited to the scalability of a single blockchain as it is designed
        to be built on multiple blockchains. Your video streams are spread out across
        different IPFS/Skynet nodes around the world too.
      </>
    )
  },
  {
    title: 'Instant stream archive availability',
    imageUrl: 'img/undraw_video_streaming.svg',
    description: (
      <>
        Just missed a stream from your favourite streamers? Stream archives of ended on-chain
        Alive streams are made available instantly so that you can watch it immediately.
      </>
    )
  },
  {
    title: 'Moderate your own chat',
    imageUrl: 'img/undraw_manage_chats.svg',
    description: (
      <>
        The decentralization of Alive extends to live chat such that streamers and
        streamer-approved moderators are the ones that have moderation powers to keep
        the chat clean.
      </>
    )
  },
  {
    title: 'Developer friendly',
    imageUrl: 'img/undraw_code_inspection.svg',
    description: (
      <>
        Alive uses HLS to deliver streams, the industry leading communication protocol
        used by many video players. All it takes to deliver Alive streams is just using
        m3u8 playlists provided by Alive-enabled API nodes.
      </>
    )
  }
]

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
