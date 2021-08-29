import React from 'react'
import styles from './hero.module.css'

import Image from 'next/image';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image 
                src="/images/site/hero-image.jpg"
                alt="an hero image"
                width={300}
                height={300}
                />
            </div>
            <h1>Hi I am George</h1>
            <p>I blog about web development - especially frontend framework like react and nextJs</p>
        </section>
    )
}

export default Hero
