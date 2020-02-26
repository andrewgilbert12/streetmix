import React, { useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import CloseButton from '../ui/CloseButton'
import PaletteTooltips from '../palette/PaletteTooltips'
import './SentimentSurvey.scss'
import IMG_SENTIMENT_1 from './sentiment-1.svg'
import IMG_SENTIMENT_2 from './sentiment-2.svg'
import IMG_SENTIMENT_3 from './sentiment-3.svg'
import IMG_SENTIMENT_4 from './sentiment-4.svg'
import IMG_SENTIMENT_5 from './sentiment-5.svg'

function handleClose () {
  console.log('byeeeee')
}

function SentimentSurvey (props) {
  const intl = useIntl()
  const [tooltip, setTooltip] = useState({
    label: null,
    visible: false,
    position: {}
  })

  /**
   * Each segment in palette calls this function when the pointer hovers over it so we know
   * what to display in the tooltip
   *
   * @param {Object} event - event handler object
   * @param {string} label - text to display inside the tooltip
   */
  function handlePointerOver (event, label) {
    // x is the position right above the middle of the segment element to point at
    const rect = event.target.getBoundingClientRect()
    const x = rect.x + rect.width / 2

    setTooltip({
      label: label,
      visible: true,
      position: { x }
    })
  }

  /**
   * When the pointer leaves the segment area, hide tooltip.
   */
  function handlePointerOut (event) {
    setTooltip({
      ...tooltip,
      visible: false
    })
  }

  /* eslint-disable react/jsx-indent */
  return (
    <div className="sentiment-survey-container">
      <div className="sentiment-survey-dialog">
        <CloseButton onClick={handleClose} />
        <h2>
          <FormattedMessage
            id="sentiment.prompt.joyful"
            defaultMessage="How joyful is this street?"
          />
        </h2>
        <div className="sentiment-survey-buttons">
          <button
            className="sentiment-1"
            onPointerOver={(e) =>
              handlePointerOver(
                e,
                intl.formatMessage({
                  id: 'sentiment.answer.rating-1',
                  defaultMessage: 'Not at all'
                })
              )}
            onPointerOut={handlePointerOut}
          >
            <img src={IMG_SENTIMENT_1} />
          </button>
          <button
            className="sentiment-2"
            onPointerOver={(e) =>
              handlePointerOver(
                e,
                intl.formatMessage({
                  id: 'sentiment.answer.rating-2',
                  defaultMessage: 'Not very much'
                })
              )}
            onPointerOut={handlePointerOut}
          >
            <img src={IMG_SENTIMENT_2} />
          </button>
          <button
            className="sentiment-3"
            onPointerOver={(e) =>
              handlePointerOver(
                e,
                intl.formatMessage({
                  id: 'sentiment.answer.rating-3',
                  defaultMessage: 'It’s so-so'
                })
              )}
            onPointerOut={handlePointerOut}
          >
            <img src={IMG_SENTIMENT_3} />
          </button>
          <button
            className="sentiment-4"
            onPointerOver={(e) =>
              handlePointerOver(
                e,
                intl.formatMessage({
                  id: 'sentiment.answer.rating-4',
                  defaultMessage: 'A little bit'
                })
              )}
            onPointerOut={handlePointerOut}
          >
            <img src={IMG_SENTIMENT_4} />
          </button>
          <button
            className="sentiment-5"
            onPointerOver={(e) =>
              handlePointerOver(
                e,
                intl.formatMessage({
                  id: 'sentiment.answer.rating-5',
                  defaultMessage: 'Quite a lot'
                })
              )}
            onPointerOut={handlePointerOut}
          >
            <img src={IMG_SENTIMENT_5} />
          </button>
        </div>
        <p>
          <FormattedMessage
            id="sentiment.about-text"
            defaultMessage="This helps us learn how people feel about streets."
          />
        </p>
      </div>
      <PaletteTooltips
        label={tooltip.label}
        visible={tooltip.visible}
        pointAt={tooltip.position}
      />
    </div>
  )
}

export default SentimentSurvey
