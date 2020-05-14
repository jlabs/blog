import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'

import styles from './blog-post.module.css'

function Project (props) {
  const {title, description} = props
  return (
    <article className={styles.root}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </Container>
    </article>
  )
}

export default Project
