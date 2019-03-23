import React from 'react';

import { storiesOf } from '@storybook/react';
import "antd/dist/antd.css";
import Uploader from '../../components/Editor/Uploader/Uploader'

storiesOf('Uploader', module)
  .addDecorator(storyFn => (
    <div style={{
      width: '100vw',
      height: '800px',
      backgroundColor: 'gray',
      padding: '10px',
    }}>{storyFn()}</div>
  ))
  .add('Initial No Images', () => (
    <Uploader />
  ))
  .add('After Added Images', () => (
    <Uploader
      initialState={{
        fileList: [
          {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
          {
            uid: '-2',
            name: 'dude.png',
            status: 'dude',
            url: 'https://secure.gravatar.com/avatar/b1dd7b63bd6d61f834a258497dbaa4a6?s=160&d=retro&r=pg',
          },
        ]
      }}
    />
  ))
