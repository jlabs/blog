import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj, cn, getProjectUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

import styles from './blog-post-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function ProjectPreview (props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getProjectUrl(props._createdAt, props.slug.current)}
    >
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </Link>
  )
}

export default ProjectPreview
