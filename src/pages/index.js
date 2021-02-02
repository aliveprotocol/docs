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
      message: 'Stream the way you want'
    }),
    imageUrl: 'img/undraw_choose.svg',
    description: translate({
      id: 'homepage.highlight.1.desc',
      description: 'Description for homepage highlight #1',
      message: 'Alive is built as a live streaming protocol that is actually decentralized which any video DApp can take advantage of. Choose your favorite DApp and file sharing protocol to stream to.'
    })
  },
  {
    title: translate({
      id: 'homepage.highlight.2.title',
      description: 'Title for homepage highlight #2',
      message: 'Communicate freely'
    }),
    imageUrl: 'img/undraw_video_influencer.svg',
    description: translate({
      id: 'homepage.highlight.2.desc',
      description: 'Description for homepage highlight #2',
      message: 'Stream your content and interact with your viewers without worrying about arbitrary censorship as Alive does not the authority to ban anyone on the immutable blockchains.'
    })
  },
  {
    title: translate({
      id: 'homepage.highlight.3.title',
      description: 'Title for homepage highlight #3',
      message: 'Highly scalable'
    }),
    imageUrl: 'img/undraw_connected_world.svg',
    description: translate({
      id: 'homepage.highlight.3.desc',
      description: 'Description for homepage highlight #3',
      message: 'Alive is not limited to the scalability of a single blockchain as it is designed to be built on multiple blockchains. Your video streams are spread out across different IPFS/Skynet nodes around the world too.'
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
      message: 'Just missed a stream from your favourite streamers? Stream archives of ended on-chain Alive streams are made available instantly so that you can watch it immediately.'
    })
  },
  {
    title: translate({
      id: 'homepage.highlight.5.title',
      description: 'Title for homepage highlight #5',
      message: 'Moderate your own chat'
    }),
    imageUrl: 'img/undraw_manage_chats.svg',
    description: translate({
      id: 'homepage.highlight.5.desc',
      description: 'Description for homepage highlight #5',
      message: 'The decentralization of Alive extends to live chat such that streamers and streamer-approved moderators are the ones that have moderation powers to keep the chat clean.'
    })
  },
  {
    title: translate({
      id: 'homepage.highlight.6.title',
      description: 'Title for homepage highlight #6',
      message: 'Developer friendly'
    }),
    imageUrl: 'img/undraw_code_inspection.svg',
    description: translate({
      id: 'homepage.highlight.6.desc',
      description: 'Description for homepage highlight #6',
      message: 'Alive uses HLS to deliver streams, the industry leading communication protocol used by many video players. All it takes to deliver Alive streams is just using m3u8 playlists provided by Alive-enabled API nodes.'
    })
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
