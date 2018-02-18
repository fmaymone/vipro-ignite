import { StackNavigator } from 'react-navigation'
import ProcessosView from '../Containers/ProcessosView'
import LaunchScreen from '../Containers/LaunchScreen'
import ViproHomeScreen from '../Containers/ViproHomeScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ProcessosView: { screen: ProcessosView,
     navigationOptions: {title: "Processos"}},
  LaunchScreen: { screen: LaunchScreen },
  ViproHomeScreen: {screen: ViproHomeScreen}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ViproHomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
