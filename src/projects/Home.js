import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    Image,
    StatusBar,
    TouchableOpacity,
    TextInput
} from 'react-native'
import React, {Component} from 'react';
import {FontAwesome5} from 'react-native-vector-icons/FontAwesome5';
import {ImageSlider} from 'react-native-image-slider-banner';

export class Home extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
                <StatusBar hidden={true}/>
                <View style={styles.container}>
                    <View styles={styles.topMenu}>
                        <View style={styles.topMenuUser}>
                            <View>
                                <Image
                                    source={{
                                        uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ix' +
                                                'id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=8' +
                                                '0'
                                    }}
                                    resizeMode={'contain'}
                                    style={styles.topMenuUserPhoto}/>
                            </View>
                            <View style={styles.topMenuUserMenuProfile}>
                                <Text style={styles.topMenuUserTitle}>Fullstack Developer</Text>
                                <Text style={styles.topMenuUserProfile}>Abdul Halim</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.topMenuNotification}>
                        <FontAwesome5
                                style={styles.topMenuIconBell}
                                size={10}
                                name={'bell'}
                                solid="solid"/>
                            <FontAwesome5
                                style={styles.topMenuIconCircle}
                                size={10}
                                name={'circle'}
                                solid="solid"/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.searchBox}>
                    <TextInput placeholder='Search Tutorial' style={styles.searchTextInput}/>
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={styles.categoriesBoxScrollView}>
                    <View style={[styles.categoriesBox, styles.categoriesBoxMarginRight]}>
                        <Text style={styles.categoriesTitle}>Design</Text>
                    </View>
                    <View style={[styles.categoriesBox, styles.categoriesBoxMarginRight, styles.categoriesBoxActive]}>
                        <Text style={styles.categoriesTitle}>Multimedia</Text>
                    </View>
                    <View style={[styles.categoriesBox, styles.categoriesBoxMarginRight]}>
                        <Text style={styles.categoriesTitle}>Programming</Text>
                    </View>
                    <View style={[styles.categoriesBox, styles.categoriesBoxMarginRight]}>
                        <Text style={styles.categoriesTitle}>Database</Text>
                    </View>
                    <View style={[styles.categoriesBox, styles.categoriesBoxMarginRight]}>
                        <Text style={styles.categoriesTitle}>Networking</Text>
                    </View>
                </ScrollView>
                <View>
                    <ImageSlider 
                    data={[
                      {img: 'https://www.usnews.com/object/image/00000169-5e07-df95-a57d-7ec72aae0000/2-angkor-wat-getty.jpg?update-time=1552060887681&size=responsive640'},
                      {img: 'https://www.usnews.com/object/image/00000169-5e07-df95-a57d-7ec72aae0000/2-angkor-wat-getty.jpg?update-time=1552060887681&size=responsive640'},
                      {img: 'https://www.usnews.com/object/image/00000169-5e07-df95-a57d-7ec72aae0000/2-angkor-wat-getty.jpg?update-time=1552060887681&size=responsive640'},
                    ]}
                    showHeader 
                    autoPlay={true}
                    caroselImageContainerStyle={{ resizeMode: 'contain' }}
                    onItemChanged={(item) => console.log("item", item)}
                    closeIconColor="#fff"
                    />
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  container : {
    paddingVertical:StatusBar.currentHeight,
    paddingHorizontal: 12,
    backgroundColor: '#fffff',
  },
  topMenu : {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topMenuUser : {
    flexDirection: 'row',
    alignItems : 'center',
  },
  topMenuUserPhoto : {
    width: 30,
    height: 39,
  },
  topMenuUserProfile:  {
    paddingLeft: 10,
  },
  topMenuUserName: {
    fontSize: 15, 
    color : '#444444',
    fontFamily: 'Poppins-Semibold',
    lineHeight : 18,
  }, 
  topMenuUserTitle : {
    fontSize : 14,
    color: "#99999",
    fontFamily: 'Poppins-Regular',
    lineHeight : 18,
  },
  topMenuNotification : {
    backgroundColor: '#DDDDDD',
    paddingTop : 6,
    paddingRight: 9,
    paddingBottom: 6, 
    paddingLeft : 9,
    borderRadius: 8,
    position: 'relative',
  },
  topMenuIconBell: {
    color: '#ffff'
  },
  topMenuIconCircle: {
    color: 'FF0000',
    position: 'absolute',
    top: 3,
    right: 4,
  },
  searchBox: {
    marginVertical: 20,
  },
  searchTextInput: {
    backgroundColor: '#F2F4F8',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#999999',
    fontFamily: 'Poppins-Regular',
  },
  categoriesBoxScrollView: {

  },
  categoriesBox : {
    justifyContent: 'center',
  },
  categoriesBoxMarginRight: {
    marginRight: 16,
  },
  categoriesBoxActive : {
    backgroundColor: '#7CD2E0',
    borderRadius: 12,
    fontSize: 14,
    paddingHorizontal: 16, 
    paddingVertical: 2,
  },
  categoriesTitleActive : {
    color: '#ffff',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  categoriesTitle : {
    color : '#99999',
    fontFamily: 'Poppins-Regular'
  }
})

export default Home;