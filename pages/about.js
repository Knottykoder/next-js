import React from 'react'
import styles from '../styles/about.module.css'
import Image from 'next/image'

const about = () => {
  return (
    <>
    <h2 className={styles.container}>About</h2>
    <Image src="/1.jpg" alt='this is a image' width={300} height={300}/>
    </>
  )
}

export default about