import React, { useCallback, useState } from 'react'
import { UndoOutlined } from '@ant-design/icons'
import { Input, Select } from 'antd'

const { Option } = Select

const COMMONSELECTION = ['inherit', 'initial', 'unset','revert']
const DELAY = ['normal']
const DIRECTION = [
  'normal',
  'reverse',
  'alternate',
  'alternate-reverse',
  'revert',
]
const DURATION = ['revert']
const FILLMODE = ['none', 'forwards', 'backwards', 'both','revert']
const ITERATIONCOUNT = ['infinite']

function Animation() {
  const [animationProps, setAnimationProps] = useState({})
  const SelectCompontent = useCallback(
    (propsName, enumOption) => {
      return (
        <Select
          onSelect={(val) => {
            setAnimationProps({ ...animationProps, [propsName]: val })
          }}
        >
          {enumOption.map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
          {COMMONSELECTION.map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      )
    },
    [animationProps]
  )
  const InputComponent = useCallback((propsName) => {
      return <Input onChange={(e) => {
          console.log(propsName,e.target.value)
          setAnimationProps({...animationProps,[propsName]:e.target.value})
      }}/>
  },[animationProps])
  return (
    <div className='animation-container'>
      <div className='animation-props'>
        <div>
          animation-delay:
          {SelectCompontent('animationDelay', DELAY)}
        </div>
        <div>
          animation-direction:
          {SelectCompontent('animationDirection', DIRECTION)}
        </div>
        <div>
          animation-duration:
          {InputComponent('animationDuration')}
        </div>
        <div>
          animation-fill-mode:
          {SelectCompontent('animationFillMode', FILLMODE)}
        </div>
        <div>
          animation-timing-function:
          {InputComponent('animationTimingFunction')}
        </div>
        <div>
          animation-play-state:
          {InputComponent('animationPlayState')}
        </div>
        <div>
          animation-iteration-count:
          {SelectCompontent('animationIterationCount',ITERATIONCOUNT)}
        </div>
      </div>
      <div className='animation'>
        <span style={animationProps} className='animation-item'>
          <UndoOutlined />
        </span>
      </div>
    </div>
  )
}

export default Animation
