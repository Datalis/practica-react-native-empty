import React from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import { Button, ButtonGroup, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { deleteExpense } from '../redux/actions/expense'
import { Alert } from 'react-native';
import { ToastAndroid } from 'react-native';

const showToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Se eliminó el gasto",
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

const confirmDelete = (item, navigation, deleteExpense) =>(
  Alert.alert(
    "Eliminar Gasto "+item.numDoc,
    "Seguro desea eliminar el gasto?",
    [
      {
        text: "No",
        style: "cancel"
      },
      { text: "Sí", onPress: () => {
        deleteExpense(item);
        navigation.navigate('Expenses');
        showToast();
      }}
    ]
  )
)

const BtnEdit = ({navigation, item}) =>(
  <Button
    icon={
      <Icon
        name="pencil"
        size={30}
        color="white"
      />
    }
    onPress={()=>{
      navigation.navigate('ExpensesForm', {item})
    }}
  ></Button>
);
const BtnDelete = ({navigation, item, deleteExpense}) =>(
  <Button buttonStyle={{backgroundColor: "red"}}
    icon={
      <Icon
        name="trash"
        size={30}
        color="white"
      />
    }
    onPress={()=>{ confirmDelete(item, navigation, deleteExpense)
    }}
  ></Button>
);

const ExpenseDetail = ({navigation, route, deleteExpense}) => {
  const {numDoc, eType, providerRuc, totalVal} = route.params.item;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <ButtonGroup buttons={[
        {element: ()=><BtnEdit item={route.params.item} navigation={navigation}></BtnEdit>},
        {element: ()=><BtnDelete item={route.params.item} navigation={navigation} deleteExpense={deleteExpense}></BtnDelete>},
      ]}/>
    });
  }, [navigation]);

  return (
    <>
      <View> 
        <ListItem title="Número de Documento" subtitle={numDoc}/>
        <ListItem title="Tipo de Gasto"       subtitle={eType}/>
        <ListItem title="Proveedor"           subtitle={providerRuc}/>
        <ListItem title="Valor"               subtitle={totalVal}/>
      </View>
    </>
  );
};


const actionsCreators = {
  deleteExpense
}

export default connect(null, actionsCreators)(ExpenseDetail)
