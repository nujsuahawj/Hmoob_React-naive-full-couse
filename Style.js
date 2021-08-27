import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    viewWrapper:{
        flex:1
    },
    viewForm:{
        flex:2, 
        padding:10
    },
    viewData:{
        flex:4
    },
    textInput:{
        padding:10,
        fontSize:15,
        borderRadius:15, 
        borderWidth:1,
        borderColor:'#CCCCCC',
        marginBottom:10,
        backgroundColor:'#dedede'
    },
    viewList:{
        flexDirection:'row',
        padding:5, 
        borderBottomWidth:5,
        borderBottomColor:'#dedede',
        backgroundColor:'#4ae1fa'
    },
    textListNama:{
        flex:2,
        fontSize:15,
        fontWeight:'bold'
    },
    textListEmail:{
        flex:2,
        fontSize:15,
        fontWeight:'bold'
    },
    textalmat:{
        flex:2,
        fontSize:15,
        fontWeight:'bold'
    },
    textListEdit:{
        color:'blue',
        marginRight:20,
        fontSize:15,
    },
    textListDelete:{
        color:'red',
        fontSize:15,
    },
    container: {
        flex: 1,
        backgroundColor: '#191A1A',
        alignItems: 'center',
        justifyContent: 'center',
      },
      trackInfo: {
        padding: 40,
        backgroundColor: '#191A1A',
      },
      buffer: {
        color: '#fff'
      },
      trackInfoText: {
        textAlign: 'center',
        flexWrap: 'wrap',
        color: '#fff'
      },
      largeText: {
        fontSize: 22
      },
      smallText: {
        fontSize: 16
      },
      control: {
        margin: 20
      },
      controls: {
        flexDirection: 'row'
      }
})