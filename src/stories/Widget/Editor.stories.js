import React from 'react';

import { storiesOf } from '@storybook/react';
import "antd/dist/antd.css"
import Editor from '../../components/Widget/Editor'

storiesOf('Editor', module)
      .addDecorator(storyFn => (
        <div style={{
          width: '600px',
          height: '1200px',
          backgroundColor: 'gray',
          padding: '10px',
        }}>{storyFn()}</div>
      ))
      .add('No Images', () => (
        <Editor />
      ))
    .add('Uploading Images', () => (
        <Editor
            initialState={{
                fileList: [
                    {
                        uid: '-1',
                        name: 'xxx.png',
                        status: 'uploading',
                        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    },
                    {
                        uid: '-2',
                        name: 'dude.png',
                        status: 'uploading',
                        url: 'https://secure.gravatar.com/avatar/b1dd7b63bd6d61f834a258497dbaa4a6?s=160&d=retro&r=pg',
                    },
                    {
                        uid: '-3',
                        name: 'dog.png',
                        status: 'uploading',
                        url: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
                    },
                ]
            }}
        />
    ))
    .add('New Images', () => (
        <Editor
            initialState={{
                fileList: [
                    {
                        uid: '-1',
                        name: 'xxx.png',
                        status: 'new',
                        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    },
                    {
                        uid: '-2',
                        name: 'dude.png',
                        status: 'new',
                        url: 'https://secure.gravatar.com/avatar/b1dd7b63bd6d61f834a258497dbaa4a6?s=160&d=retro&r=pg',
                    },
                    {
                        uid: '-3',
                        name: 'dog.png',
                        status: 'new',
                        url: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
                    },
                ]
            }}
        />
    ))
    .add('1 Selected, 1 Unedited', () => (
        <Editor
            initialState={{
                currentFile: {
                    uid: '-1',
                    name: 'xxx.png',
                    status: 'new',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
                fileList: [
                    {
                        uid: '-1',
                        name: 'xxx.png',
                        status: 'new',
                        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    },
                    {
                        uid: '-2',
                        name: 'dude.png',
                        status: 'new',
                        url: 'https://secure.gravatar.com/avatar/b1dd7b63bd6d61f834a258497dbaa4a6?s=160&d=retro&r=pg',
                    },
                    {
                        uid: '-3',
                        name: 'dog.png',
                        status: 'new',
                        url: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
                    },
                ]
            }}
        />
    ))
    .add('1 Predicting Selected, 1 Unedited', () => (
        <Editor
            initialState={{
                fileList: [
                    {
                        uid: '-1',
                        name: 'xxx.png',
                        status: 'loading',
                        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    },
                    {
                        uid: '-2',
                        name: 'dude.png',
                        status: 'new',
                        url: 'https://secure.gravatar.com/avatar/b1dd7b63bd6d61f834a258497dbaa4a6?s=160&d=retro&r=pg',
                    },
                    {
                        uid: '-3',
                        name: 'dog.png',
                        status: 'new',
                        url: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
                    },
                ]
            }}
        />
    ))
    .add('1 Complete Selected, 1 Unedited', () => (
        <Editor
            initialState={{
                fileList: [
                    {
                        uid: '-1',
                        name: 'xxx.png',
                        status: 'complete',
                        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    },
                    {
                        uid: '-2',
                        name: 'dude.png',
                        status: 'new',
                        url: 'https://secure.gravatar.com/avatar/b1dd7b63bd6d61f834a258497dbaa4a6?s=160&d=retro&r=pg',
                    },
                    {
                        uid: '-3',
                        name: 'dog.png',
                        status: 'new',
                        url: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
                    },
                ]
            }}
        />
    ))
    .add('1 Error Selected, 1 Unedited', () => (
        <Editor
            initialState={{
                fileList: [
                    {
                        uid: '-1',
                        name: 'xxx.png',
                        status: 'error',
                        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    },
                    {
                        uid: '-2',
                        name: 'dude.png',
                        status: 'new',
                        url: 'https://secure.gravatar.com/avatar/b1dd7b63bd6d61f834a258497dbaa4a6?s=160&d=retro&r=pg',
                    },
                    {
                        uid: '-3',
                        name: 'dog.png',
                        status: 'new',
                        url: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
                    },
                ]
            }}
        />
    ))
    .add('1 Predicting Selected, 1 Unedited', () => (
        <Editor
            initialState={{
                fileList: [
                    {
                        uid: '-1',
                        name: 'xxx.png',
                        status: 'loading',
                        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    },
                    {
                        uid: '-2',
                        name: 'dude.png',
                        status: 'new',
                        url: 'https://secure.gravatar.com/avatar/b1dd7b63bd6d61f834a258497dbaa4a6?s=160&d=retro&r=pg',
                    },
                    {
                        uid: '-3',
                        name: 'dog.png',
                        status: 'new',
                        url: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
                    },
                ]
            }}
        />
    ))
    .add('1 Complete Selected, 1 Unedited', () => (
        <Editor
            initialState={{
                fileList: [
                    {
                        uid: '-1',
                        name: 'xxx.png',
                        status: 'complete',
                        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    },
                    {
                        uid: '-2',
                        name: 'dude.png',
                        status: 'new',
                        url: 'https://secure.gravatar.com/avatar/b1dd7b63bd6d61f834a258497dbaa4a6?s=160&d=retro&r=pg',
                    },
                    {
                        uid: '-3',
                        name: 'dog.png',
                        status: 'new',
                        url: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
                    },
                ]
            }}
        />
    ))
