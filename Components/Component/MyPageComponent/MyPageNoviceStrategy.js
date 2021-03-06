/**
 * Sample
 * React
 * Native
 * App
 * https://github.com/facebook/react-native
 * @flow
 * Created
 *     by
 *     Administrator
 *     on
 *     2018/3/12.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  TouchableOpacity,
  Image,
} from 'react-native';


export default class NoviceStrategy extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
        <View
            style={styles.View}>
            <TouchableOpacity
                onPress={()=>navigate('LandingPage')}
            >
                <Image
                source={require('../../../Icons/Book.png')}
                style={styles.Img}
                />
            </TouchableOpacity>
            <Text style={styles.Text}>新手攻略</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        width:100,
        height:90,
        alignItems:'center',
        paddingTop:20,
        backgroundColor:'#FFF'
    },
    Img:{
        width:30,
        height:30
    },
    Text:{
        fontSize:14,
        color:'black',
        marginTop:10,
    }
});
