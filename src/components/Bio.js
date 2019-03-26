import React from 'react'
import styled, {keyframes} from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import {rhythm} from '../utils/typography'

const bioLinks = [
  ['Twitter', 'https://twitter.com/erikaybar_'],
  ['GitHub', 'https://github.com/erikthedeveloper'],
  ['LinkedIn', 'https://www.linkedin.com/in/erikaybar/'],
  // ['egghead.io', 'https://egghead.io/instructors/erik-aybar'],
]

function Bio({isHero}) {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const {author} = data.site.siteMetadata
        const imageSize = isHero ? 200 : 100
        return (
          <Outer isHero={isHero}>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                width: imageSize,
                height: imageSize,
                marginBottom: rhythm(isHero ? 2 : 1),
              }}
              imgStyle={{
                borderRadius: `50%`,
                width: imageSize,
                height: imageSize,
              }}
            />
            <div>
              <BioText isHero={isHero}>
                <Wave onClick={sayHello}>👋🏽</Wave> Hi! I'm Erik Aybar. I'm a
                software person working remotely from St. George, Utah. This is
                my blog.
              </BioText>

              <Links>
                {bioLinks.map(([text, href]) => (
                  <Link key={href} isHero={isHero}>
                    {' '}
                    <a href={href}>{text}</a>{' '}
                  </Link>
                ))}
              </Links>
            </div>
            {isHero && <BottomPointer>👇🏽</BottomPointer>}
          </Outer>
        )
      }}
    />
  )
}

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: rhythm(1);
  height: ${({isHero}) => (isHero ? '95vh' : '30vh')};
  min-height: ${({isHero}) => (isHero ? '500px' : '300px')};
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: ${({isHero}) => (isHero ? '60vh' : '30vh')};
    min-height: ${({isHero}) => (isHero ? '500px' : '300px')};
  }
`

const wave = keyframes`  
  10% {
    transform: rotate(-20deg);
  }
  
  20% {
    transform: rotate(10deg);
  }
  
  30%, 100% {
    transform: rotate(0deg);
  }
`

const Wave = styled.span`
  cursor: pointer;
  display: inline-block;
  animation: ${wave} 2s infinite;
  transform-origin: right bottom;
  animation-play-state: paused;
`

const BioText = styled.p`
  font-size: ${({isHero}) => (isHero ? '36px' : '24px')};
  line-height: ${({isHero}) => (isHero ? '42px' : '28px')};
  @media (max-width: 768px) {
    font-size: ${({isHero}) => (isHero ? '24px' : '16px')};
    line-height: ${({isHero}) => (isHero ? '28px' : '18px')};
  }
  font-weight: 300;

  :hover ${Wave} {
    animation-play-state: running;
  }
`

const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: right;
`

const Link = styled.li`
  display: inline-block;

  font-size: ${({isHero}) => (isHero ? '32px' : '20px')};
  @media (max-width: 768px) {
    font-size: ${({isHero}) => (isHero ? '20px' : '18px')};
  }

  font-weight: 300;
  a {
    font-weight: 300;
  }
  :before {
    content: '/';
    padding: 0 5px;
  }
  :first-child:before {
    display: none;
  }
`

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(2px, 0, 0);
  }
`

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const BottomPointer = styled.div`
  position: absolute;
  opacity: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin-bottom: 15px;
  text-align: center;
  font-size: 36px;
  animation: ${fadeInOut} 5s,
    ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  animation-delay: 1s, 3s;

  @media (max-width: 768px) {
    display: none;
  }
`

function sayHello() {
  alert('Why hello there! 👋🏽 Thank you for clicking me 😀')
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: {regex: "/profile-pic.jpg/"}) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
