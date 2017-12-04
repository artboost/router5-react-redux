import React from 'react';
import PropTypes from 'prop-types';
import withData from '../../components/withData';

const Async = ({ rates }) => (
  <div>
    <h1>Async</h1>

    <div>This route uses a <em>prefetch</em> to fetch async data.</div>

    <div style={{ border: '1px solid black', padding: 5 }}>
      <h4>
        Exchange rates
      </h4>
      <div>
        {
          Object
            .keys(rates)
            .map(currency => (
              <div key={currency}>
                <code>
                  { currency }: { rates[currency] }
                </code>
              </div>
            ))
        }
      </div>
    </div>
  </div>
);

Async.propTypes = { rates: PropTypes.object };

export default withData(Async, 'rates');
