import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,  View, Text, Button } from 'react-native';
import { Map, Modal,Panel, Input, List } from './components';
export default function App() {
  const  [puntos, setPuntos] = useState([]);
  const  [puntoTemp, setPuntoTemp] = useState({});
  const  [ nombre, setNombre ] = useState('');
  const  [ visibilityFilter, setVisibilityFilter ] = useState('new_punto') // new_punto, all_puntos 
  const  [visibility, setVisibility] = useState(false)
  const  [pointsFilter, setPointsFilter] = useState(false)

  const togglePointsFilter = () => setPointsFilter(!pointsFilter);

  const handleLongPress = ({nativeEvent}) => {
    setVisibilityFilter('new_Punto');
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }
  const handleChangeText = text => {
    setNombre(text)
  }
  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto));
    setVisibility(false);
    setNombre(''); 

  }

  const handleLista = () => {
    setVisibilityFilter('all_puntos');
    setVisibility(true)
  }



  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos= {puntos} pointsFilter={pointsFilter}/>
      <Panel onPressLeft = { handleLista } textLeft='Lista' togglePointsFilter={ togglePointsFilter }/>
      <Modal visibility = {visibility}>
        {visibilityFilter === 'new_Punto'
        ?
          <View style={styles.form}>
            <Input title= "Nombre" placeholder="Nombre del punto" onChangeText= {handleChangeText} />
            <View style= {styles.buttons}>
              <Button  title= "Aceptar" onPress = { handleSubmit } />
              <Button  title= "Cancelar" onPress = { () => setVisibility(false) } />
            </View>
          </View>
          : <List puntos={puntos} closeModal= { () => setVisibility(false) } />
        }
        
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({

  form: {
    padding: 20,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
