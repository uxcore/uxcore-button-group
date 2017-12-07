/**
 * ButtonGroup Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
const React = require('react');
class ButtonGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>uxcore-button-group component</div>
    );
  }
}

ButtonGroup.defaultProps = {
};


// http://facebook.github.io/react/docs/reusable-components.html
ButtonGroup.propTypes = {
};

ButtonGroup.displayName = 'ButtonGroup';

module.exports = ButtonGroup;
