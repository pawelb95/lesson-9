import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

export const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerContainer>
          <SpinnerOverlay/>
      </SpinnerContainer>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};