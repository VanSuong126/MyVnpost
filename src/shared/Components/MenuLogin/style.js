import React from 'react';
import { StyleSheet} from 'react-native';
import {Sizes,Colors, Width} from '../../../themes';

const Styles = StyleSheet.create({
    container :{
        flex:0.3,
        justifyContent:"center",
        alignItems:"center",
    },
    rowMenu:{
        flex:1,
        flexDirection:'row',
        width:Width,
        marginHorizontal:Sizes.margin,
        marginVertical:Sizes.margin,
        backgroundColor:'yellow'
    },
    columnMenu:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'blue',
        justifyContent:"center",
        alignItems:"center",
    }
})
export default Styles