import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div
        key={alert.id}
        style={{ borderRadius: '5px', border: '1px solid' }}
        className={`alert alert-${alert.type}`}
      >
        <i className="fas fa-exclamation-triangle">
          {' '}
          <span style={{ fontFamily: 'Roboto' }}>{alert.msg}</span>
        </i>
      </div>
    ))
  );
};

export default Alerts;
