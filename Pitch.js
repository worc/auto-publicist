import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Bamboozle from 'bamboozle'
import form from './motifs/form'

const Reveal = ({reveal}) => {
    const [currentReveal, setCurrentReveal] = useState()

    useEffect(() => {
      const confuser = new Bamboozle(status => {
        // debugger
        setCurrentReveal(status.message)
      }, reveal, {
        // todo let Confuse handle arrays of characters
        // todo fix Confuse memory leak?
        // use bamboozle npm package directly
        characters: [
          '▀▁▂▃▄▅▆▇█▉▊▋▌▍▎', // U+258x
          '▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟', // U+259x
        ].join(''),
        exclude: '. ',
        speed: 50,
      })

      confuser.start()
      confuser.reveal(1100)

      return () => {
        confuser.stop()
      }

    }, [reveal])

    return <Capitalize>{ currentReveal }</Capitalize>
}

export default ({ pitch }) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const withIndefinite = phrase => vowels.includes(phrase.slice(0, 1)) ? `an ${phrase}` : `a ${phrase}`
  const energyArticle = Math.random() > 0.5 ? vowels.includes(pitch.energy.slice(0, 1)) ? 'an' : 'a' : 'this'
  const quirkArticle = vowels.includes(pitch.quirk.slice(0, 1)) ? 'an' : 'a'

  const fiftyFifty = Math.random() > 0.5

  const pitchString = fiftyFifty
    ? `${energyArticle} ${pitch.energy} ${pitch.form} ${ energyArticle === 'this' ? 'is' : '' } about ${quirkArticle} ${pitch.quirk} ${pitch.protagonist}'s ${pitch.plot} to ${pitch.action} their ${pitch.conflict}`
    : `${quirkArticle} ${pitch.quirk} ${pitch.protagonist}'s ${pitch.energy} ${pitch.plot} to ${pitch.action} their ${pitch.conflict}, ${withIndefinite(pitch.form)}`

  return (
    <Pitch>
      <div>
        <Reveal reveal={ pitchString }/>
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

const Capitalize = styled.div`
  &::first-letter {
    text-transform: uppercase;
  }
`
