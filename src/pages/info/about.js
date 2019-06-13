import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import trentImage from "../../images/User_1.jpg"
import styled from 'styled-components'

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0, auto, 12px, auto;
`
const Avatar = styled.img`
    flex: 0 0 96px;
    width: 96px;
    margin: 0;
`

const Description = styled.div`
    flex: 1;
    margin-left: 18px;
    padding: 12px;
`

const Username = styled.div`
    margin: 0 0 12px 0;
`

const Excerpt = styled.p`
    margin: 0;
`

const User = props => (
    <UserWrapper>
        <Avatar src={props.avatar} alt="" />
        <Description>
            <Username>{props.username}</Username>
            <Excerpt>{props.excerpt}</Excerpt>
        </Description>
    </UserWrapper>
)

const AboutPage = () => (
  <Layout>
    <SEO title="About Page" />
    <h1>About Page</h1>
    <User
        username="Trent Davis"
        avatar={trentImage}
        excerpt="Full Stack Web Developer"
        />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
