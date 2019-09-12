import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsFormPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';


const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map( ({ id, ...collectionProps }) => (
                <CollectionPreview key={id} {...collectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsFormPreview
});

export default connect(mapStateToProps)(CollectionsOverview);