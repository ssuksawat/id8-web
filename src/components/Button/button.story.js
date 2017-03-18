import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { PageDecorator, List, ListItem } from '../story-helpers';

import Button from './Button';

storiesOf('Button', module)
  .addDecorator(PageDecorator)
  .add('Button types', () => (
    <List>
      <ListItem>
        <List horizontal>
          <ListItem>
            <Button onClick={action('clicked')}>Normal Button</Button>
          </ListItem>
          <ListItem>
            <Button primary onClick={action('clicked')}>Normal Button</Button>
          </ListItem>
          <ListItem>
            <Button secondary onClick={action('clicked')}>Normal Button</Button>
          </ListItem>
          <ListItem>
            <Button danger onClick={action('clicked')}>Normal Button</Button>
          </ListItem>
        </List>
        <pre>{'<Button>...</Button>'}</pre>
      </ListItem>
      <ListItem>
        <List horizontal>
          <ListItem>
            <Button outlined onClick={action('clicked')}>Outlined Button</Button>
          </ListItem>
          <ListItem>
            <Button outlined primary onClick={action('clicked')}>Outlined Button</Button>
          </ListItem>
          <ListItem>
            <Button outlined secondary onClick={action('clicked')}>Outlined Button</Button>
          </ListItem>
          <ListItem>
            <Button outlined danger onClick={action('clicked')}>Outlined Button</Button>
          </ListItem>
        </List>
        <pre>{'<Button outlined>...</Button>'}</pre>
      </ListItem>
      <ListItem>
        <List horizontal>
          <ListItem>
            <Button link onClick={action('clicked')}>Link Button</Button>
          </ListItem>
          <ListItem>
            <Button link primary onClick={action('clicked')}>Link Button</Button>
          </ListItem>
          <ListItem>
            <Button link secondary onClick={action('clicked')}>Link Button</Button>
          </ListItem>
          <ListItem>
            <Button link danger onClick={action('clicked')}>Link Button</Button>
          </ListItem>
        </List>
        <pre>{'<Button link>...</Button>'}</pre>
      </ListItem>
      <ListItem>
        <List horizontal>
          <ListItem>
            <Button disabled onClick={action('clicked')}>Disabled Button</Button>
          </ListItem>
          <ListItem>
            <Button disabled outlined onClick={action('clicked')}>Disabled Button</Button>
          </ListItem>
          <ListItem>
            <Button disabled link onClick={action('clicked')}>Disabled Button</Button>
          </ListItem>
        </List>
        <pre>{'<Button disabled>...</Button>'}</pre>
      </ListItem>
    </List>
  ))
  .add('Button sizes', () => (
    <List>
      <ListItem>
        <Button small primary onClick={action('clicked')}>Small Button</Button>
        <pre>{'<Button small>...</Button>'}</pre>
      </ListItem>
      <ListItem>
        <Button primary onClick={action('clicked')}>Medium Button</Button>
        <pre>{'<Button>...</Button>'}</pre>
      </ListItem>
      <ListItem>
        <Button large primary onClick={action('clicked')}>Large Button</Button>
        <pre>{'<Button large>...</Button>'}</pre>
      </ListItem>
      <ListItem>
        <Button xlarge primary onClick={action('clicked')}>X-Large Button</Button>
        <pre>{'<Button xlarge>...</Button>'}</pre>
      </ListItem>
    </List>
  ))
  .add('Button colors', () => (
    <List>
      <ListItem>
        <Button onClick={action('clicked')}>Default Button</Button>
        <pre>{'<Button>...</Button>'}</pre>
      </ListItem>
      <ListItem>
        <Button primary onClick={action('clicked')}>Primary Button</Button>
        <pre>{'<Button primary>...</Button>'}</pre>
      </ListItem>
      <ListItem>
        <Button secondary onClick={action('clicked')}>Secondary Button</Button>
        <pre>{'<Button secondary>...</Button>'}</pre>
      </ListItem>
      <ListItem>
        <Button danger onClick={action('clicked')}>Danger Button</Button>
        <pre>{'<Button danger>...</Button>'}</pre>
      </ListItem>
    </List>
  ));
