import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";

export default function signup(){
    return (
        <View style={{flex: 1, backgroundcolor: "#F1ECEC", justifyContent: "center", alignItems: "center"}}>
          <Image
					  style={{
							borderRadius: 20,
							width: 300,
							height: 100,
							marginBottom: 20
						}}
            source={{uri: "https://pngimg.com/uploads/mercedes/mercedes_PNG1888.png"}}
          />
					<Text style={{color: "grey", margineBottom: 10}}>Welcome to</Text>
          <Text style={{fontSize: 40, color: "blue", fontWeight: 800,}}>THE CAR SHOP </Text>
          <Text style={{fontStyle: "italic"}}>See your growth and get consulting support</Text>
					<View 
					  style={{
							flexDirection: "row", 
			  			marginTop: 20,
							marginBottom: 10,
							backgroundColor: "black",
							borderRadius: 20,
							padding: 10,
							paddingHorizontal: 40
						}}
					>
				  <AntDesign name="google" size={24} color="#F62626" />
				  <Text style={{marginLeft: 10, color: "white",}}>SignUp with Google</Text>
					</View>
					<View>
          <Text style={{textAlign: "left"}}>Username*</Text>
					<View 
					  style={{
							flexDirection: "row", 
			  			marginTop: 5, 
							borderBottomWidth: 3,
							padding: 20,
							paddingHorizontal: 40,
							borderRadius: 20,
							backgroundColor: "#F4EAEA"
						}}>
				   <AntDesign name="user" size={24} color="black" />
					    <TextInput
							  style={{marginLeft: 10}}
                  placeholder="Matthew Lukes" 
                  autoCapitalize="none"
					    />
				 	</View>
				  <Text style={{textAlign: "left"}}>Email*</Text>
					<View 
					  style={{
							flexDirection: "row", 
							marginTop: 5, 
							borderBottomWidth: 3,
							padding: 20,
							paddingHorizontal: 40,
							borderRadius: 20,
							backgroundColor: "#F4EAEA"
						}}>
					  <AntDesign name="mail" color="black" size={20} />
				    <TextInput
						  style={{marginLeft: 10}}
                placeholder="mail@website.com" 
                autoCapitalize="none"
				   />
					</View>
					</View>
						<View style={{marginTop: 10, marginBottom: 10}}>
						  <Text style={{textAlign: "left"}}>Password*</Text>
							<View 
							  style={{
									flexDirection: "row", 
									marginTop: 5, 
									borderBottomWidth: 3,
									padding: 20,
									paddingHorizontal: 40,
									borderRadius: 20,
									backgroundColor: "#F4EAEA"
									}}>
							<FontAwesome name="lock" color="#05375a" size={20} />
						    <TextInput
								  style={{marginLeft: 10,}}
								  secureTextEntry={true} 
								  placeholder="Password" 
								  autoCapitalize="none"
						    />
							</View>
						</View>
				  	<TouchableOpacity>
						  <Text 
							style={{
							    marginLeft: 10, 
								color: "black", 
							    padding: 10, 
							    paddingHorizontal: 40,
							    backgroundColor:"#E9E9E9",
							    borderRadius: 20
								}}>Signup</Text>
						</TouchableOpacity>
						
				</View>
    )
}