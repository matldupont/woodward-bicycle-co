import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 5rem;
  min-height: calc(100vh - 7rem);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const Wrapper = styled.div`
  padding: 1.2rem;
`

export const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 3px;

  margin: 1.2rem 0;

  ${({ center }) => {
    return center && 'text-align: center;'
  }}
`
