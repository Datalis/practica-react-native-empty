import React from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import { Button, ListItem } from 'react-native-elements';


const ExpenseDetail = ({navigation, route}) => {
  const {numDoc, eType, providerRuc, totalVal} = route.params.item;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate('ExpensesForm', {item: route.params.item})} title="Editar" />
      ),
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


export default ExpenseDetail;
