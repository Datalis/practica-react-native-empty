import { Formik } from 'formik';
import React from 'react';
import { View, ToastAndroid } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { newExpenseValidationSchema } from '../validations/newExpenseValidationSchema';
import { saveExpense } from '../redux/actions/expense'
import { connect } from 'react-redux';

const showToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Guardado exitoso!",
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

const ExpenseForm = ({route, saveExpense, navigation}) => {
  const {id, numDoc='', eType='', providerRuc='', totalVal=''} = route.params.item;
  return (
    <>
        <Formik
          validateOnBlur={false}
          validateOnMount={false}
          validationSchema={newExpenseValidationSchema}
          initialValues={{id, numDoc, eType, providerRuc, totalVal}}
          onSubmit={(values, actions) => {
            saveExpense(values);
            navigation.navigate('Expenses')
            showToast();
          }}
        >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View> 
              <Input
                label='Número de Documentos'
                placeholder='001-002-000000123'
                errorStyle={{ color: 'red' }}
                errorMessage={errors.numDoc}
                value={values.numDoc}
                onChangeText={handleChange('numDoc')}
                onBlur={handleBlur('numDoc')}
              />
              <Input
                label='Tipo de Gasto'
                placeholder='Alimentación'
                errorStyle={{ color: 'red' }}
                errorMessage={errors.eType}
                value={values.eType}
                onChangeText={handleChange('eType')}
                onBlur={handleBlur('eType')}
              />
              <Input
                label='Proveedor'
                placeholder='0902451145001'
                errorStyle={{ color: 'red' }}
                errorMessage={errors.providerRuc}
                value={values.providerRuc}
                onChangeText={handleChange('providerRuc')}
                onBlur={handleBlur('providerRuc')}
              />
              <Input
                label='Valor'
                placeholder='35.25'
                errorStyle={{ color: 'red' }}
                errorMessage={errors.totalVal}
                value={values.totalVal}
                onChangeText={handleChange('totalVal')}
                onBlur={handleBlur('totalVal')}
              />
              <Button
                title="Guardar"
                type="solid"
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
    </>
  );
};

const actionsCreators = {
  saveExpense
}

export default connect(null, actionsCreators)(ExpenseForm)
