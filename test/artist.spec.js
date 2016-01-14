'use strict';

import React from 'react';
import ReactDOM from 'react-dom'
import assert from 'assert';
import TestUtils from 'react-addons-test-utils';
import Artist from '../src/Artist.js';

describe('Artist', () => {
  var component;

  beforeEach(()=> {
    component = TestUtils.renderIntoDocument(<Artist name="Run the Je" />);
  });

  it('should display the correct artist name', () => {
    expect(ReactDOM.findDOMNode(component).textContent).toMatch(/Artist name: Run the Jewels/);
  });
});
