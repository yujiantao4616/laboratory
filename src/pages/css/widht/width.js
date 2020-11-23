import React, { useState } from 'react'
import { Radio, Image, Switch } from 'antd'
import width_attr_jpg from './width_attr.jpg'
import fit_content_png from './fit-content.png'

const WIDTH_ATTR_LIST = [
  'auto',
  'fit-content',
  'inherit',
  'initial',
  'max-content',
  'min-content',
  'revert',
  'unset',
  '-webkit-fill-available',
]

function Width() {
  const [attr, setAttr] = useState({ width: 'inherit', wordBreak: 'no-break' })
  const { width, wordBreak } = attr
  return (
    <div className='laboratory'>
      <div>
        <Image width={200} src={width_attr_jpg} />
        <Image width={200} src={fit_content_png} />
      </div>

      <Radio.Group buttonStyle="solid">
        {WIDTH_ATTR_LIST.map((item) => (
          <Radio.Button
            value={item}
            key={item}
            onClick={() => {
              setAttr({wordBreak,width:item})
            }}
          >
            {item}
          </Radio.Button>
        ))}
      </Radio.Group>
      <div>
        <Switch onChange={(val) => {
          setAttr({wordBreak:val?'break-all':'keep-all ',width})
        }}></Switch>
      <span>word-break:{wordBreak}</span>
      </div>
      {attr === 'min-content' && <span></span>}
      <div className='width'>
        <div style={attr} className='inner'>
          {width}
        </div>
      </div>
    </div>
  )
}

export default Width
