import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/App.stories.js');
  require('../src/stories/Editor/Uploader.stories.js');
  require('../src/stories/Editor/Eraser.stories.js');
}

configure(loadStories, module);
