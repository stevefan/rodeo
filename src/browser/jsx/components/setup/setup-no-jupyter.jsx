import _ from 'lodash';
import React from 'react';
import FakeTerminal from './fake-terminal.jsx';
import Marked from '../marked/marked.jsx';

export default React.createClass({
  displayName: 'SetupNoJupyter',
  propTypes: {
    className: React.PropTypes.string,
    onTransition: React.PropTypes.func.isRequired,
    terminal: React.PropTypes.object.isRequired,
    text: React.PropTypes.object.isRequired
  },
  render: function () {
    const displayName = this.constructor.displayName,
      props = this.props,
      text = props.text,
      className = [_.kebabCase(displayName)];

    if (props.className) {
      className.push(props.className);
    }

    return (
      <div className={className.join(' ')}>
        <Marked className="explanation">{text.explainMissingDependences}</Marked>
        <FakeTerminal {...props.terminal}/>
        <button className="btn btn-primary" onClick={_.partial(props.onTransition, 'installJupyter')}>{text.installJupyter}</button>
        <div className="secondary-explanation"><Marked>{text.explainJupyter}</Marked></div>
      </div>
    );
  }
});
