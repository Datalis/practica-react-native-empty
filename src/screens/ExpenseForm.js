import React from 'react';
import {Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {Formik} from 'formik';
import {object, string, number} from 'yup';
import {addExpense} from '../redux/actions/expenseActions';
import {connect} from 'react-redux';

const ExpenseForm = props => {
  const _addExpense = values => {
    props.addExpense(values);
    props.navigation.navigate('Expenses');
  };
  return (
    <View>
      <Formik
        initialValues={{
          numDoc: '',
          eType: '',
          totalVal: 10,
          providerRuc: '',
        }}
        validationSchema={valSchema}
        onSubmit={values => {
          _addExpense(values);
        }}>
        {({handleSubmit, isValid, values, errors, setFieldValue}) => (
          <View>
            <Input
              placeholder="Numero del Documento"
              onChangeText={value => setFieldValue('numDoc', value)}
              errorMessage={errors.numDoc}
            />
            <Input
              placeholder="Tipo"
              onChangeText={value => setFieldValue('eType', value)}
              errorMessage={errors.eType}
            />
            <Input
              placeholder="Valor Total"
              onChangeText={value => setFieldValue('totalVal', value)}
              errorMessage={errors.totalVal}
            />
            <Input
              placeholder="Proveedor"
              onChangeText={value => setFieldValue('providerRuc', value)}
              errorMessage={errors.providerRuc}
            />

            <Button title="Añadir gasto" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const valSchema = object().shape({
  numDoc: string().required('Este campo es requerido'),
  eType: string().required('Este campo es requerido'),
  totalVal: number('Deber ser un numero').typeError('Deber ser un numero').required('Este campo es requerido'),
  providerRuc: string().required('Este campo es requerido'),
});

const mapDispatchtoProps = {
  addExpense,
};

export default connect(
  null,
  mapDispatchtoProps,
)(ExpenseForm);
