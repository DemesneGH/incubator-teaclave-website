import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Enabling Memory-Safe Secure Computing',
    description: (
      <>
        Teaclave enables secure computing using memory-safe languages like Rust across multiple TEE platforms. 
        Developers can build secure applications without worrying about memory-safety issues.
      </>
    ),
  },
  {
    title: 'Open-Source SDKs for Multiple TEE Platforms',
    description: (
      <>
        Teaclave provides open-source SDKs targeting Intel SGX, Arm TrustZone. 
        Developers can build secure computing use cases across cloud, edge, and embedded systems.
      </>
    ),
  },
  {
    title: 'Modular Components for Confidential Computing',
    description: (
      <>
        Teaclave offers reusable Rust crates designed for composable secure systems. 
        Developers can easily integrate features like secure storage, remote attestation, and key management into their own confidential computing use cases.
      </>
    ),
  },
  {
    title: 'Developer-Friendly Emulation Support',
    description: (
      <>
        Teaclave provides prebuilt Docker images and tools to simplify local development and testing of TEE applications. 
        Developers can prototype and validate Trusted Applications quickly, even without TEE hardware.
      </>
    ),
  },
];


const featureStyle = {
  features: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'stretch',
    justifyContent: 'space-between',
  },
  feature: {
    flexGrow: 1,
    flexBasis: '47%',
    maxWidth: '47%',
  }
}

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')} style={featureStyle.feature}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={featureStyle.features}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
