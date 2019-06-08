import React, { useReducer, useEffect } from 'react'
import styled from 'styled-components'
import energy from './motifs/energy';
import form from './motifs/form';
import quirk from './motifs/quirk';
import protagonist from './motifs/protagonist';
import plot from './motifs/plot';
import action from './motifs/action';
import conflict from './motifs/conflict';
import Pitch from './Pitch'

const SHUFFLE_ALL = 'shuffle all'

const initialState = {
  energy: '',
  form: '',
  quirk: '',
  protagonist: '',
  plot: '',
  action: '',
  conflict: '',
}

function reducer (state, message) {
  switch (message.type) {
    case SHUFFLE_ALL:
      return {
        energy: energy.next().value,
        form: form.next().value,
        quirk: quirk.next().value,
        protagonist: protagonist.next().value,
        plot: plot.next().value,
        action: action.next().value,
        conflict: conflict.next().value,
      }
    default:
      return state
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
    dispatch({ type: SHUFFLE_ALL })
  }, [])

  return (
    <Container>
      <Pitch pitch={ state } />
      <Reshuffle onClick={ () => dispatch({ type: SHUFFLE_ALL })}>reshuffle</Reshuffle>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-content: center;
`

const Reshuffle = styled.button`
  background-color: #1d581f;
  border: 1px solid black;
  color: white;
  cursor: pointer;
  font-size: 28px;
  font-variant-caps: all-small-caps;
  height: 80px;
  letter-spacing: 12px;
  outline: none;
  text-align: center;
`
