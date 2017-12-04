import React from 'react';
import PropTypes from 'prop-types';

export default function withData(WrappedComponent, dataName) {
  if (typeof dataName === 'undefined') {
    throw new Error('Illegal argument: dataName must be specified.');
  }
  class WithData extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: props.route.data[dataName] };
    }

    componentWillReceiveProps({ route }) {
      if (!route.data[dataName]) {
        return;
      }

      const data = route.data[dataName];
      this.setState({ data });
    }

    render() {
      return (
        <WrappedComponent
          {...{ [dataName]: this.state.data }}
          {...this.props}
        />
      );
    }
  }

  WithData.propTypes = { route: PropTypes.object };

  return WithData;
}
