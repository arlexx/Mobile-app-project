import React from 'react';
import { Text, View, StyleSheet, TextInput, Dimensions, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import cars from '../const/cars';
const width = Dimensions.get("screen").width/2-30;


export default function homepage({navigation}){

    const Card = ({car}) => {
        return (
            <TouchableOpacity 
                onPress={() => navigation.navigate('Carts', car)}>
                <View style={style.card}>
                    <View style={{alignItems: "flex-end"}}>
                        <View 
                            style={{
                                borderRadius: 15, 
                                width: 30, 
                                height: 30,
                                alignItems: "center",
                                justifyContent: "center",                                }}>
                            <MaterialIcons 
                                name="favorite" 
                                size={30} 
                                color={car.like ?  "red" : "black"} />
                        </View>
                    </View>
                    <View style={{height: 180, alighItems: "center"}}>
                        <Image source={car.image} style={{flex: 1, resizeMode: "contain"}} />
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 30, marginTop: 15}}>
                            {car.name}
                        </Text>
                    </View>
                    
                    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10,  marginLeft: 20, marginRight: 20}}>
                        <Text 
                            style={{fontWeight: "bold", fontSize: 26 }}>
                            Price: {car.price}
                        </Text>
                        <View 
                            style={{backgroundColor: "grey", width: 25, height: 25, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <AntDesign name="plus" size={24} color="white" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            
        )
    }
    
    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
                paddingHorizontal: 10,
                
            }}>
            <View> 
                <View style={{alignItems: "center"}}>
                    <Text style={{fontSize: 40, fontWeight: 800, color: "grey"}}> THE CAR SHOP 
                    <AntDesign name="shoppingcart" size={40} color="grey" style={{marginLeft: 20}} />    
                    </Text>
                </View>
            </View>
            <View style={{marginTop: 30, flexDirection: "row"}}>
                <View style={{
                        height: 50,
                        backgroundColor: "black",
                        borderRadius: 10,
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                    <Feather name="search" size={24} color="white" style={{marginLeft: 25, marginRight: 7}} />
                    <TextInput 
                    placeholder="Search" 
                    placeholderTextColor="white"
                    style={{
                        color: "white",
                        fontSize: 20,
                        fontWeight: "bold",
                        flex: 0.9,
                    }}/>
                </View>
            </View>
            <FlatList 
                columnWrapperStyle={{justifyContent: "space-between"}}
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{
                    marginTop: 20,
                    margintBottom: 30
                }}
                numColumns={2}
                data={cars}
                renderItem={({item}) => {
                    return <Card car={item}/>;
                }}
                />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({ 
    card: {
        height: 350,
        backgroundColor: "white",
        width,
        marginHorizontal: 3,
        borderRadius: 100,
        marginBottom: 30,    
    }


});