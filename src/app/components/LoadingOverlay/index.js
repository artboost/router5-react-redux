import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const LoadingOverlay = ({ loading = false }) => {
  if (!loading) {
    return <span />;
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        textAlign: 'center',
        background: 'rgba(0, 0, 0, 0.4)',
      }}
    >
      <h2
        style={{
          display: 'inline-block',
          background: '#fff',
          padding: 25,
          border: '1px solid black',
          borderRadius: 5,
        }}
      >
        Loading.
      </h2>
    </div>
  );
};

LoadingOverlay.propTypes = { loading: PropTypes.bool };

export default connect(store => ({ loading: store.loading }))(LoadingOverlay);
