import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './tab-item.scss';

class TabItem extends Component {
    goTo = () => {
        this.props.history.replace(this.props.linkTo);
    };
    render() {
        return (
            <li className="tab__item">
                <div
                    className={`tab__link
                ${this.props.history.location.pathname === this.props.linkTo
                ? 'tab__link--active'
                : ''}`}
                    onClick={this.goTo}
                >
                    {this.props.title}
                </div>
            </li>
        );
    }
}

TabItem.propTypes = {
    linkTo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
};

export default withRouter(TabItem);
