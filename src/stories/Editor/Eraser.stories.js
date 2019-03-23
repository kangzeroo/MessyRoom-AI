import React from 'react';

import { storiesOf } from '@storybook/react';
import "antd/dist/antd.css";
import Eraser from '../../components/Editor/Eraser/Eraser'

storiesOf('Eraser', module)
  .addDecorator(storyFn => (
    <div style={{
      width: '100vw',
      height: '800px',
      backgroundColor: 'gray',
      padding: '10px',
    }}>{storyFn()}</div>
  ))
  .add('Initial Unedited Images', () => (
    <Eraser />
  ))
  .add('Engaged Image Editor', () => (
    <Eraser />
  ))
  .add('Some Edited Images', () => (
    <Eraser />
  ))
  .add('All Edited Images', () => (
    <Eraser />
  ))
