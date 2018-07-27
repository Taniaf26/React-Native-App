import { StyleSheet, Platform } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 25,
    alignSelf: 'stretch',

  },
  view: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  blue: {
    color: 'powderblue',
    fontSize:  20,
  },
  red:{
    color: 'darkred',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textInput:{
    width: 150,
    height: 50,
  },

  list:{
    flex: 1,
    marginTop: 10,
    alignSelf: 'stretch',
    backgroundColor: 'powderblue',
  },
  listText:{
    textAlign: 'center',
    fontWeight: 'bold'
  },
  dogImage: {
    width: 55,
    height: 50,
    marginLeft: 3
  },
  header:{
    flexDirection: 'row', 
    alignItems: 'flex-start'
  },
  headerTitle: {
    marginTop: 15, 
    fontWeight: 'bold', 
    fontSize: 20
  },
  viewPager: {
    flex: 1,
    marginBottom: 10
  },
  pageStyle: {
    alignItems: 'center',
    // padding: 20,
  },
 
  subscribeInput: {
    padding: 3,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white'

  },
  subscribeButton: {
    backgroundColor: '#4662f2',
    padding: 5,
    borderRadius: 20,
    width: 80,
    marginTop: 10,
    marginLeft: 10
  },
  subscribeForm: {
    flex:1,
    backgroundColor: '#59b8e0',
    paddingBottom: 30,
    paddingTop: 30
    
  }
});