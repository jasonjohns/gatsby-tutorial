import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return(
        <Layout pageTitle="About Me!">
            <p>Hi there! I'm the proud creaor of this site, which I built with Gatsby!</p>
            <StaticImage alt="Memetastic"
                         src="../images/huga9h36j6u61.jpeg"
            />
        </Layout>
    )
}

export default AboutPage