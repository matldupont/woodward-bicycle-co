import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { Wrapper, Heading } from '../components/Page'
import MainImage from '../components/MainImage'

const AboutParagraph = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin: 0 1rem;

  &:not(:last-child) {
    margin-bottom: 5rem;
  }
`
const CircleImageWrapper = styled.figure`
  width: 18rem;
  height: 18rem;
  float: left;
  margin-right: 2rem;

  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    clip-path: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
  }
`

const BannerImageWrapper = styled.figure`
  height: 10rem;
  overflow: hidden;
  margin: 3rem 0;
`

const AboutPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Heading>Why WBco?</Heading>
        <AboutParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a erat
          pharetra, egestas augue ac, venenatis nibh. Morbi aliquam mollis
          imperdiet. Nunc maximus risus id ex hendrerit, eget rhoncus nisl
          facilisis. Sed ornare ligula eu eros suscipit, vitae ultrices arcu
          accumsan. Etiam enim elit, volutpat non laoreet ut, vestibulum nec
          orci.{' '}
        </AboutParagraph>
        <CircleImageWrapper>
          <MainImage />
        </CircleImageWrapper>

        <AboutParagraph>
          Phasellus bibendum, arcu ac pharetra dignissim, sapien neque facilisis
          libero, et vestibulum mi ipsum at mi. Sed ultricies eu massa in
          lacinia. Maecenas placerat felis a interdum aliquam. Mauris accumsan
          arcu sapien, vel mollis enim vehicula non. Fusce tempus vulputate
          nisl, quis rhoncus sapien sollicitudin vel. Donec metus elit,
          ullamcorper quis lorem in, finibus blandit nunc. Curabitur rutrum
          egestas tempor. Sed orci sapien, suscipit at elit quis, tempus
          vestibulum mauris. Mauris non faucibus tortor, a hendrerit odio. Ut
          bibendum, felis quis ullamcorper porttitor, lacus sem rhoncus felis,
          sit amet lobortis elit leo laoreet ligula.
        </AboutParagraph>
      </Wrapper>

      <BannerImageWrapper>
        <MainImage />
      </BannerImageWrapper>
      <Wrapper>
        <AboutParagraph>
          Pellentesque a ante vel magna consectetur maximus. Nulla suscipit sem
          felis, vitae auctor ligula lobortis a. Etiam elit sem, dapibus sed
          sapien id, accumsan pretium nulla. Proin eget lacinia nibh. Fusce
          volutpat quis felis eu feugiat. Aliquam erat volutpat. Curabitur
          scelerisque, risus sit amet semper dictum, tortor nunc vulputate orci,
          quis ultricies orci ligula et purus. Etiam sodales ullamcorper arcu
          eget vulputate. Donec arcu lorem, finibus ac tempus et, cursus rhoncus
          risus. Curabitur tincidunt risus enim, et porttitor mauris cursus
          quis. Aliquam erat volutpat.
        </AboutParagraph>

        <AboutParagraph>
          Phasellus nunc purus, pretium sed est a, pulvinar finibus ligula.
          Nullam id accumsan dui, sed vestibulum sapien. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Praesent aliquam sem metus, et
          maximus ipsum hendrerit vehicula. Donec pellentesque est est, nec
          iaculis ante feugiat nec. Cras eu eros fermentum, commodo tellus id,
          accumsan sapien. Aliquam consectetur varius purus, nec ultricies augue
          gravida ac. Aliquam erat volutpat. Interdum et malesuada fames ac.
        </AboutParagraph>
        <MainImage />
      </Wrapper>
    </Layout>
  )
}

export default AboutPage
