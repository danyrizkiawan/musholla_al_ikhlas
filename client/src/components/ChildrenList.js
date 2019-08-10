import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux';
import { getChildren, deleteChildren } from '../actions/childrenActions';
import PropTypes from 'prop-types';

class ChildrenList extends Component {
    componentDidMount() {
        this.props.getChildren();
    }

    onDeleteClick = (id) => {
        this.props.deleteChildren(id);
    }

    render() {
        const {children} = this.props.child;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="children-list">
                        {children.map(({ _id, name }) => (
                            <CSSTransition key={ _id } timeout={ 500 } classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times;
                                    </Button>
                                    { name }
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ChildrenList.propTypes = {
    getChildren: PropTypes.func.isRequired,
    dispatch: PropTypes.func,
    child: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    child: state.child
});

export default connect(mapStateToProps, { getChildren, deleteChildren })(ChildrenList);