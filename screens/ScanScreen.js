import React from 'react';
import {Text, View, TouchableOpacity, Stylesheet,Image } from 'react-native';
import * as Permissions from 'expo-Permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component {
 constructor(){
     super();
     this.state = {
         hasCameraPermissions:null,
         scanned:false,
         scannedData:'',
          buttonState:'normal'
     }
 }

 getCameraPermissions = async ()=>{
     const {status} = await Permissions.askAsync (Permissions.CAMERA) 

     this.SetState({
         hasCameraPermissions: status === "granted" 
                                       
     });
 }

 render(){
     const hasCameraPermissions = this.state.hasCameraPermissions;
     return(
         <View styles={styles.container}>
                
             <Text styles={styles.displayText}>Qr code output</Text>
             <TouchableOpacity
             onPress={this.getCameraPermissions}
             styles={styles.scanButton}>
                 <Text styles={styles.buttonText}>Scan QR code</Text>
             </TouchableOpacity>

         </View>
     );
 }
}

const styles = stylesSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    displayText:{
        fontSize:15,
        textDecorationLine:'underLine'
    },
    scanButton:{
        backgroundColor: 'red',
        padding: 10,
        margin: 10
    },
})

