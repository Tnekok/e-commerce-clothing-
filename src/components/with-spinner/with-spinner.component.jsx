import React from 'react';

import './with-spinner.styles.scss';


const WithSpinner = ( WrappedComponent ) => {
    const Spinner = ({ isLoading, ...props }) => {
        return isLoading ? (
            <div className='overlay'>
                <div className='with-spinner'></div>
            </div>
            ) : (
                <WrappedComponent {...props} />
            );
        };
    return Spinner;
};

export default WithSpinner;
