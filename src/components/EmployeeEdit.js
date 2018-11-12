import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import Communications from 'react-native-communications'; 
import { connect } from 'react-redux';
import _ from 'lodash';

class EmployeeEdit extends Component {

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value: value[0] });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
       
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }

    onTextPress() {
        const { phone, shift } = this.props; 
         
        let phoneNumber = phone[0]; 
        let shiftTime = shift[0]; 

        Communications.text(phoneNumber, `Your shift is on ${shiftTime}`)
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {

    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeUpdate, employeeSave
})(EmployeeEdit); 