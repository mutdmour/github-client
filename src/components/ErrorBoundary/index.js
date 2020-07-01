import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error: true
    };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return <div>Oops something went wrong... </div>
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any.isRequired
};

export default ErrorBoundary;