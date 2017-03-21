import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { PageDecorator, List, ListItem } from '../story-helpers';

import Link from './Link';

storiesOf('Link', module)
  .addDecorator(PageDecorator)
  .add('Link style', () => (
    <List>
      <ListItem>
        <Link primary href="#">Primary Link</Link>
        <pre>{'<Link primary>...</Link>'}</pre>
      </ListItem>
      <ListItem>
        <Link light href="#">Light Link</Link>
        <pre>{'<Link light>...</Link>'}</pre>
      </ListItem>
      <ListItem>
        <Link dark href="#">Dark Link</Link>
        <pre>{'<Link dark>...</Link>'}</pre>
      </ListItem>
    </List>
  ));
