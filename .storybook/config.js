import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/App.stories.js');
  require('../src/stories/Widget/Editor.stories.js');
}

configure(loadStories, module);
