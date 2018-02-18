import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import RoundedButton from '../Components/RoundedButton'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class ViproHomeScreen extends Component {
  
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.vipro} style={styles.logo} />
          </View>

          <View style={styles.section} >
            {/* <Image source={Images.ready} /> */}
            <Text style={styles.sectionText}>
            Vipro Home Screen            
            </Text>
          </View>

          <RoundedButton onPress={() => navigate("ProcessosView")} text='Ir para o Portal'/>
        </ScrollView>
      </View>
    )
  }
}
