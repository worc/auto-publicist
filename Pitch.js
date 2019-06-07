import React from 'react'
import styled from 'styled-components'

export default ({ pitch }) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const withIndefinite = phrase => vowels.includes(phrase.slice(0, 1)) ? `an ${phrase}` : `a ${phrase}`
  const energyArticle = Math.random() > 0.5 ? vowels.includes(pitch.energy.slice(0, 1)) ? 'an' : 'a' : 'this'
  const quirkArticle = vowels.includes(pitch.quirk.slice(0, 1)) ? 'an' : 'a'

  const fiftyFifty = Math.random() > 0.5

  return (
    <Pitch>
      <div>
        { fiftyFifty
          ? <React.Fragment><Capitalize>{energyArticle}</Capitalize> {pitch.energy} {pitch.genre} { energyArticle === 'this' ? 'is' : null } about {quirkArticle} {pitch.quirk} {pitch.protagonist}'s {pitch.plot} to {pitch.action} their {pitch.conflict}</React.Fragment>
          : <React.Fragment><Capitalize>{quirkArticle}</Capitalize> {pitch.quirk} {pitch.protagonist}'s {pitch.energy} {pitch.plot} to {pitch.action} their {pitch.conflict}, {withIndefinite(pitch.genre)}</React.Fragment>
        }
      </div>
    </Pitch>
  )
}

const Pitch = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > div {
    text-align: justify;
    padding: 24px;
    line-height: 24px;
  }
`

const Capitalize = styled.span`
  text-transform: capitalize;
`
