import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addChildren } from '../actions/childrenActions';

class ChildrenModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newChild = {
            name: this.state.name
        }

        this.props.addChildren(newChild);

        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Tambah Anak Yatim</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Tambahkan ke Daftar Anak Yatim</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="child">Anak Yatim</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="child"
                                    placeholder="Add child"
                                    onChange={this.onChange}>
                                </Input>
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }} block>
                                    Tambah
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    child: state.child
});

export default connect(mapStateToProps, { addChildren })(ChildrenModal);