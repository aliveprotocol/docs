import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const features = [
  {
    title: translate({
      id: 'homepage.highlight.1.title',
      description: 'Title for homepage highlight #1',
      message: 'Developer Friendly'
    }),
    imageUrl: 'img/undraw_code_inspection.svg',
    description: translate({
      id: 'homepage.highlight.1.desc',
      description: 'Description for homepage highlight #1',
      message: 'Alive Protocol uses HLS to deliver live streams, the industry leading streaming protocol used by many video players. All it takes to deliver Alive Protocol streams is just using m3u8 playlists provided by HAlive API nodes.'
    })
  },
  {
    title: translate({
      id: 'homepage.highlight.2.title',
      description: 'Title for homepage highlight #2',
      message: 'Censorship Resistance'
    }),
    imageUrl: 'img/undraw_video_influencer.svg',
    description: translate({
      id: 'homepage.highlight.2.desc',
      description: 'Description for homepage highlight #2',
      message: 'Neither the creators nor developers of Alive Protocol or its dependencies can prevent anyone from streaming through Alive Protocol. You own the private keys that enables you to publish HLS segments of your stream on-chain.'
    })
  },
  {
    title: translate({
      id: 'homepage.highlight.3.title',
      description: 'Title for homepage highlight #3',
      message: 'Live Immutability'
    }),
    imageUrl: 'img/undraw_push_stream.svg',
    description: translate({
      id: 'homepage.highlight.3.desc',
      description: 'Description for homepage highlight #3',
      message: 'HLS segments are continously pushed on-chain during the live stream. Useful for important live events that you may want to ensure that it cannot be tampered or removed at the very moment the event is recorded live.'
    })
  },
  {
    title: translate({
      id: 'homepage.highlight.4.title',
      description: 'Title for homepage highlight #4',
      message: 'Instant stream archive availability'
    }),
    imageUrl: 'img/undraw_video_streaming.svg',
    description: translate({
      id: 'homepage.highlight.4.desc',
      description: 'Description for homepage highlight #4',
      message: 'Just missed a stream? Stream archives are made available instantly so that you can watch it immediately. No waiting for additional encoding to take place.'
    }),
    colOffset: 2
  },
  {
    title: translate({
      id: 'homepage.highlight.5.title',
      description: 'Title for homepage highlight #5',
      message: 'Horizontally scalable'
    }),
    imageUrl: 'img/undraw_connected_world.svg',
    description: translate({
      id: 'homepage.highlight.5.desc',
      description: 'Description for homepage highlight #5',
      message: 'Alive Protocol streams are accessible through multiple IPFS gateways as well as multiple HAlive API nodes run by different operators.'
    })
  },
]

function Feature({imageUrl, title, description, colOffset}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx(`col col--4 ${colOffset ? 'col--offset-'+colOffset : ''}`, styles.feature)}>
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
      description={siteConfig.tagline}>
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
              <Translate id="homepage.button.getstarted" description="Get started button text on homepage">
                Get Started
              </Translate>
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
