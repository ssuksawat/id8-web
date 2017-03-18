import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { PageDecorator, List, ListItem } from '../story-helpers';

import Input from './Input';

storiesOf('Input', module)
  .addDecorator(PageDecorator)
  .add('Input sizes', () => (
    <List>
      <ListItem>
        <Input type="text" size="small" placeholder="Small input..." onChange={action('changed')} />
        <pre>{'<Input size="small" />'}</pre>
      </ListItem>
      <ListItem>
        <Input type="text" placeholder="Type something..." onChange={action('changed')} />
        <pre>{'<Input />'}</pre>
      </ListItem>
      <ListItem>
        <Input type="text" size="large" placeholder="Type something..." onChange={action('changed')} />
        <pre>{'<Input size="large" />'}</pre>
      </ListItem>
    </List>
  ))
  .add('Input states', () => (
    <List>
      <ListItem>
        <Input disabled placeholder="Disabled input" />
        <pre>{'<Input disabled />'}</pre>
      </ListItem>
      <ListItem>
        <Input error placeholder="Has error" />
        <pre>{'<Input error />'}</pre>
        <pre>{'<Input error="true" />'}</pre>
      </ListItem>
    </List>
  ));
