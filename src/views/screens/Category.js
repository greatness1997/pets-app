// import React from "react"
// import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
// import Icon  from "react-native-vector-icons/MaterialCommunityIcons"
// import COLORS from "../../const/colors"
// import pets from '../../const/pets'


// const petCategory = [
//     {name: 'CATS', icon: 'cat'},
//     {name: 'DOGS', icon: 'dog'},
//     {name: 'BIRDS', icon: 'ladybug'},
//     {name: 'BUNNIES', icon: 'rabbit'}
// ]


// const Card = ({ Card }) => {
//     return <TouchableOpacity activeOpacity={0.8}>
//         <View style={style.cardContainer}>
//             <View style={style.cardImageContainer}></View>
//         </View>
//     </TouchableOpacity>
// }



// const CategoryView = () => {
    // const [selectedCategory, setSelectedCategory] = React.useState(0)
    // const [filteredPets, setFilteredPets] = React.useState([]) 
    
    // const filterpet = index => {
    //     const currentPet = pets.filter((item) =>item.pet.toLocaleUpperCase() == petCategory[index].name)[0].pets
    //     setFilteredPets(currentPet)
    // }

    // React.useEffect(() => {
    //     filterpet(0)
    // }, []);

    // return (
    //     <View>
        {/* <View 
            style={{
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                marginTop: 20 
            }}>
                {petCategory.map((item, index) => (
                    <View key={'pet' + index} style={{alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {
                            setSelectedCategory(index)
                        }} 
                        style={[
                            style.categoryBtn, 
                            {backgroundColor: 
                            selectedCategory === index ? COLORS.primary : COLORS.white}]
                        }>
                            <Icon name={item.icon} size={30} color={selectedCategory === index ? COLORS.white : COLORS.primary}/>
                        </TouchableOpacity>
                        <Text style={style.categoryBtnName}>{item.name}</Text>
                    </View>
                ))}
        </View> */}
            {/* <View style={{marginTop: 20}}>
                <FlatList 
                    data={filteredPets} 
                    renderItem={({item}) => <Card pet={item} />}/>
            </View> */}
        {/* </View>
        
       
        
          
    )
} 

const style = StyleSheet.create({ */}
    // cardContainer: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginBottom: 20
    // },
    // cardImageContainer: {
    //     height: 150,
    //     width: 140,
    //     color: COLORS.background,
    //     borderRadius: 20
    // },
    // categoryBtn: {
    //     height: 50,
    //     width: 50,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderRadius: 10,
    //     backgroundColor: COLORS.primary
    // },
    // categoryBtnName: {
    //     color: COLORS.dark,
    //     fontSize: 10,
    //     marginTop: 5,
    //     fontWeight: 'bold'   
    // }
// })

// export default CategoryView