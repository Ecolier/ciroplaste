import { config, list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text } from '@keystone-6/core/fields';

export default config({
  server: {
    cors: { origin: ['http://localhost:5173', 'http://172.20.10.2:5173', 'http://172.20.10.3:5173', 'http://169.254.72.103:5173'], credentials: true },
    options: {host: '0.0.0.0'}
  },
  db: {
    provider: 'sqlite',
    url: 'file:./keystone.db',
  },
  lists: {
    Article: list({
      access: allowAll,
      fields: {
        title: text({ validation: { isRequired: true } }),
        subtitle: text(),
        body: text({ validation: { isRequired: true }, ui: {displayMode: 'textarea' } }),
      },
    }),
  },
});
