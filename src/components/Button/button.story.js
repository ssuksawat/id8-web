import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';

const PageDecorator = (story) => (
  <div style={{
    padding: '10px 20px',
    textAlign: 'center'
  }}>
    { story() }
  </div>
);
const listStyles = {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'flex-start',
  listStyle: 'none'
};
const itemStyles = {
  marginBottom: 10
};

storiesOf('Button', module)
  .addDecorator(PageDecorator)
  .add('Button types', () => (
    <ul style={listStyles}>
      <li style={itemStyles}>
        <Button primary onClick={action('clicked')}>Normal Button</Button>
      </li>
      <li style={itemStyles}>
        <Button primary outlined onClick={action('clicked')}>Outlined Button</Button>
      </li>
      <li style={itemStyles}>
        <Button primary link onClick={action('clicked')}>Link Button</Button>
      </li>
      <li style={itemStyles}>
        <Button disabled onClick={action('clicked')}>Disabled Button</Button>
      </li>
    </ul>
  ))
  .add('Button sizes', () => (
    <ul style={listStyles}>
      <li style={itemStyles}>
        <Button small primary onClick={action('clicked')}>Small Button</Button>
      </li>
      <li style={itemStyles}>
        <Button primary onClick={action('clicked')}>Medium Button</Button>
      </li>
      <li style={itemStyles}>
        <Button large primary onClick={action('clicked')}>Large Button</Button>
      </li>
      <li style={itemStyles}>
        <Button xlarge primary onClick={action('clicked')}>X-Large Button</Button>
      </li>
    </ul>
  ))
  .add('Button colors', () => (
    <ul style={listStyles}>
      <li style={itemStyles}>
        <Button onClick={action('clicked')}>Default Button</Button>
      </li>
      <li style={itemStyles}>
        <Button primary onClick={action('clicked')}>Primary Button</Button>
      </li>
      <li style={itemStyles}>
        <Button secondary onClick={action('clicked')}>Secondary Button</Button>
      </li>
      <li style={itemStyles}>
        <Button danger onClick={action('clicked')}>Danger Button</Button>
      </li>
    </ul>
  ));
