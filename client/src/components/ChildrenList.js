import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getChildren } from '../actions/childrenActions';
import PropTypes from 'prop-types';

class ChildrenList extends Component {

    componentDidMount() {
        this.props.getChildren();
    }

    render() {
        const {children} = this.props.child;
        return (
            <Container>
                <Button
                    color="dark"
                    style={{
                    marginBottom: '2em'
                }}
                    onClick={() => {
                    const name = prompt('Masukan Nama Anak');
                    if (name) {
                        this.setState(state => ({
                            children: [
                                ...state.children, {
                                    id: uuid(),
                                    name
                                }
                            ]
                        }));
                    }
                }}>
                    Tambah Anak Yatim
                </Button>

                <ListGroup>
                    <TransitionGroup className="children-list">
                        {children.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                children: state.children.filter(child => child.id !== id)
                                            }));
                                        }}
                                    >&times;
                                    </Button>
                                    {name}
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
    child: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    child: state.child
});

export default connect(mapStateToProps, { getChildren })(ChildrenList);