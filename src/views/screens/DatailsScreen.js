import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../const/colors'

const DetailsScreen = ({ navigation, route }) => {

    const pet = route.params
    

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={ style.background }>
                <ImageBackground 
                source={pet.image} 
                resizeMode='contain' 
                style={{ height: 250, top: 40 }}
                >
                <View style={style.header}>
                    <Icon 
                    name='arrow-left' 
                    size={28}
                    color={COLORS.dark}
                    onPress={navigation.goBack}
                    />
                    <Icon 
                    name='dots-vertical' 
                    size={28}
                    color={COLORS.dark}
                    />
                </View>
                </ImageBackground>
                <View style={style.container}>
                    <View 
                        style={{
                            flexDirection: 'row', 
                            justifyContent: 'space-between'
                    }}>
                    <Text style={{fontSize: 20, color: COLORS.dark, fontWeight: 'bold'}}>
                        {pet.name}
                    </Text>
                    <Icon name='gender-male' size={25} color={COLORS.grey}/>
                </View>
                <View 
                        style={{
                            flexDirection: 'row', 
                            justifyContent: 'space-between',
                            marginTop: 5
                    }}>
                    <Text style={{fontSize: 12, color: COLORS.dark, fontWeight: 'bold'}}>
                        {pet.type}
                    </Text>
                    <Text style={{fontSize: 13, color: COLORS.dark, fontWeight: 'bold'}}>
                        {pet.age}
                    </Text>
                   
                </View>

                <View 
                        style={{
                            flexDirection: 'row', 
                            marginTop: 5
                    }}>
                   <Icon name='map-marker' size={25} color={COLORS.dark}/> 
                   <Text style={{fontSize: 13, color: COLORS.dark, fontWeight: 'bold', marginLeft: 5}}>
                        Sangotedo Ajah, Lagos
                    </Text>
                </View>
                </View>
                <View 
                    style={{ 
                        marginTop: 80, 
                        justifyContent: 'space-between', 
                         }}
                    >
                    <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                        <Image 
                            source={require('../../asset/image/no-image-available.png')}
                            style={{ height: 40, width: 40, borderRadius: 20 }}
                        />
                        <View style={{ flex: 1, paddingLeft: 10, height: 20}}>
                            <Text style={{ color: COLORS.dark, fontSize: 12, fontWeight: 'bold' }}>
                                OTOKINA GREATNESS
                            </Text>
                            <Text style={{ color: COLORS.dark, fontSize: 11, fontWeight: 'bold', marginTop: 2 }}>
                                Owner
                            </Text>
                        </View>
                        <Text style={{ fontWeight: 'bold', fontSize: 11 }}>23 November, 2021</Text>
                    </View>
                        
                    <Text style={style.comment}>
                        My Job requires moving to another country. I dont have the opportunity top
                        take the cat with me, I am looking for good people who will shelter my {pet.name}
                    </Text>
                </View>
                <View style={style.footer}>
                    <View style={style.iconCon}>
                         <Icon name='heart-outline' size={22} color={COLORS.white}/>
                    </View>
                        <View style={style.btn}>
                            <Text style={{color: COLORS.white, fontWeight: 'bold'}}>ADOPTION</Text>
                        </View>
                    
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    btn: {
        backgroundColor: COLORS.primary,
        flex: 1,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginBottom: 20
    },
    iconCon: {
        backgroundColor: COLORS.primary,
        width: 50,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginRight: 15
        
    },
    footer: {
        height: 100,
        backgroundColor: COLORS.light,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    comment: {
        marginTop: 10,
        fontSize: 12,
        fontWeight: 'bold',
        color: COLORS.dark,
        lineHeight: 20,
        marginHorizontal: 20,
        marginBottom: 10
    },
    background: {
        backgroundColor: 'silver',
        height: 380
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    container: {
        height: 130,
        //flex: 1,
        backgroundColor: COLORS.white,
        padding: 20,
        marginHorizontal: 20,
        bottom: -60,
        elevation: 10,
        justifyContent: 'center',
        borderRadius: 18,
        elevation: 10
    },

})

export default DetailsScreen