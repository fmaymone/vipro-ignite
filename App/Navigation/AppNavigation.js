import { StackNavigator } from 'react-navigation'
import ProcessosView from '../Containers/ProcessosView'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ProcessosView: { screen: ProcessosView },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ProcessosView',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
