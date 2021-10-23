import React from 'react'
import { creatDrawerNavigator } from '@react-navigation/drawer'
import { Dimensions, 
        ScrollView, 
        SafeAreaView, 
        StyleSheet, 
        Text, 
        View, 
        Image, 
        TextInput,
        TouchableOpacity,
        FlatList
         } from 'react-native'
import COLORS  from '../../const/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const {height} = Dimensions.get('window')


import pets from '../../const/pets'


const petCategory = [
  {name: 'CATS', icon: 'cat'},
  {name: 'DOGS', icon: 'dog'},
  {name: 'BIRDS', icon: 'ladybug'},
  {name: 'BUNNIES', icon: 'rabbit'}
]


const Card = ({ pet, navigation }) => {
  return <TouchableOpacity 
            activeOpacity={0.8}
            onPress={() => navigation.navigate('DetailsScreen', pet)}
         >
      <View style={style.cardContainer}>
          <View style={style.cardImageContainer}>
            <Image source={pet.image} style={{ width: '100%', height: '100%', resizeMode: 'contain' }}/>
          </View>
          <View style={style.cardDetailContainer}>
            <View style={{
              flexDirection: 'row', 
              justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold', color: COLORS.dark, fontSize: 20}}>
                  {pet.name}
                </Text>
                <Icon name='gender-male' size={22} color={COLORS.grey}/>
            </View>
            <Text style={{ fontSize: 12, marginTop: 5, color: COLORS.dark }}>
              {pet.type}
            </Text>
            <Text style={{ fontSize: 10, marginTop: 5, color: COLORS.dark }}>
              {pet.age}
            </Text>
            <View style={{marginTop: 5, flexDirection: 'row'}}>
              <Icon name='map-marker' size={18} color={COLORS.primary}/>  
              <Text style={{ fontSize: 12, marginLeft: 5, color: COLORS.grey }}>
                Distance: 7.5km
            </Text>
            </View>
          </View>
      </View>
  </TouchableOpacity>
}



const HomeScreen = ({navigation}) => {

  const [selectedCategory, setSelectedCategory] = React.useState(0)
  const [filteredPets, setFilteredPets] = React.useState([]) 
  
  const filterpet = index => {
      const currentPet = pets.filter((item) =>item.pet.toLocaleUpperCase() == petCategory[index].name)[0].pets
      setFilteredPets(currentPet)
  }

  React.useEffect(() => {
      filterpet(0)
  }, []);


    return (
        <SafeAreaView style={{flex: 1, color: COLORS.white}}>
          <View style={style.header}>
            <Icon name='sort-variant' size={30} onPress={navigation.toggleDrawer}/>
            <Text style={style.profileName}>OTOKINA GREATNESS</Text>
            <Image 
              source={require('../../asset/image/no-image-available.png')}
              style={style.image}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.mainContainer}>
              <View style={style.searchInputContainer}>
                <Icon 
                  name='magnify' 
                  size={25} 
                  style={{color: COLORS.grey}}
                />
                <TextInput 
                  placeholder='Search pet to adopt'
                  style={{flex: 1}}
                  placeholderTextColor={COLORS.grey}
                />
                <Icon 
                  name='sort-ascending'
                  size={25}
                  style={{color: COLORS.grey}}
                />
              </View>


              <View 
                style={{
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                marginTop: 20 
                 }}>
                {petCategory.map((item, index) => (
                    <View key={'pet' + index} style={{alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {
                            filterpet(index)
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
              </View>
                <View style={{marginTop: 20}}>
                  <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={filteredPets} 
                    renderItem={({item}) => <Card pet={item} navigation={navigation}/>}
                  />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
        
    )
}

const style = StyleSheet.create ({
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profileName: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold'
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  mainContainer: {
    minHeight: height,
    backgroundColor: COLORS.light,
    marginTop: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    
},
cardImageContainer: {
    height: 150,
    width: 140,
    color: COLORS.background,
    borderRadius: 20
},
cardDetailContainer: {
  height: 120,
  backgroundColor: COLORS.white,
  flex: 1,
  borderTopRightRadius: 10,
  borderBottomRightRadius: 10,
  padding: 20,
  justifyContent: 'center'
},
categoryBtn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.primary
},
categoryBtnName: {
    color: COLORS.dark,
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold'   
}
})

export default HomeScreen