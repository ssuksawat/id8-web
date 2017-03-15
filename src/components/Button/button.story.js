import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
  .add('Button sizes', () => (
    <div style={{ 'display': 'flex', 'justify-content': 'space-around', 'align-items': 'center' }}>
      <div><Button small onClick={action('clicked')}>Small Button</Button></div>
      <div><Button onClick={action('clicked')}>Medium Button</Button></div>
      <div><Button large onClick={action('clicked')}>Large Button</Button></div>
      <div><Button xlarge onClick={action('clicked')}>X-Large Button</Button></div>
    </div>
  ));
