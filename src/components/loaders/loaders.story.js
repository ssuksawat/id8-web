import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { PageDecorator, List, ListItem } from '../story-helpers';

import Dots from './Dots';

storiesOf('Loaders', module)
  .addDecorator(PageDecorator)
  .add('Loading Dots', () => (
    <List>
      <ListItem>
        <h5>Small dots</h5>
        <Dots small dark />
        <pre>{'<Dots small dark />'}</pre>
      </ListItem>
      <ListItem>
        <h5>Medium dots</h5>
        <Dots dark />
        <pre>{'<Dots dark />'}</pre>
      </ListItem>
      <ListItem>
        <h5>Large dots</h5>
        <Dots large dark />
        <pre>{'<Dots small dark />'}</pre>
      </ListItem>
    </List>
  ));
