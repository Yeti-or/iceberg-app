import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLinkToCollection } from '../../../reducers/link.reducer';

import { Icon, Button } from '../../../blocks';

import './create-link-header.scss';

class AddLinkHeader extends Component {
    handleGoBack = () => {
        this.props.history.goBack();
    };
    addLink = () => {
        this.props.addLinkToCollection(
            this.props.collection._id,
            this.props.link._id,
            this.props.token,
            this.props.history.push('/feed'),
        );
    };

    render() {
        return (
            <header
                className={`create-link-header
                ${this.props.history.location.pathname.indexOf('/load') > -1
                ? 'create-link-header--show-button'
                : ''}`}
            >
                <div className="create-link-header__container">
                    <div className="create-link-header__block">
                        <span onClick={this.handleGoBack}>
                            <Icon iconName={'arrow-back'} iconColor="#000" />
                        </span>
                        <h4 className="create-link-header__title">
                            {this.props.collectionTitle}
                        </h4>
                    </div>
                    <div className="create-link-header__block" onClick={this.addLink}>
                        <Button
                            text="Добавить"
                            size="small"
                            isDisabled={this.props.collectionTitle.length === 0}
                        />
                    </div>
                </div>
            </header>
        );
    }
}

AddLinkHeader.propTypes = {
    collectionTitle: PropTypes.string.isRequired,
    collection: PropTypes.object.isRequired,
    link: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    addLinkToCollection: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired,
};

export default connect(
    state => ({
        token: state.app.token,
        link: state.link.result,
        collection: state.collection,
    }),
    { addLinkToCollection },
)(withRouter(AddLinkHeader));
