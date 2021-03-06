import React from 'react';
import PropTypes from 'prop-types';

import './collection-card.scss';

import { HashTag, CardFooter } from './../../blocks';

const CollectionCard = ({ data }) => {
    const hashes = data.tags;
    const cardStyles = {
        background: `${data.color} url(${data.photo})`,
    };

    const avatarOptions = {
        size: '25',
        photo: data.author.photo,
        iconColor: '#fff',
    };

    const userName = `${data.author.firstName} ${data.author.lastName}`;

    return (
        <div className="collection-card" style={cardStyles}>
            <div className="collection-card__header">
                { hashes.map(hash => (
                    <HashTag
                        name={hash.name}
                        size={'small'}
                        key={hash._id}
                    />)) }
                <h2 className="collection-card__title">{data.name}</h2>
            </div>

            <CardFooter
                avatarOptions={avatarOptions}
                userName={userName}
                linksCount={data.linksCount}
                savedTimesCount={data.savedTimesCount}
            />

            { data.photo ? <div className="collection-card__overlay" /> : null }
        </div>
    );
};

CollectionCard.propTypes = {
    data: PropTypes.object.isRequired,
};


export default CollectionCard;
