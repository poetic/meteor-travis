import React from 'react';
import { mount } from 'react-mounter';
// load Layout and Welcome React components
import { Layout } from './app.jsx';
import { Welcome } from './welcome.jsx';

FlowRouter.route('/', {
  action() {
    mount(Layout, {
      content: (<Welcome name="arunoda"/>),
    });
  },
});
