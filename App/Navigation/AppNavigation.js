import { createStackNavigator, createAppContainer } from 'react-navigation'
import ShowList from '../Containers/ShowList'
import DetailScreen from '../Containers/DetailScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  ShowList: { screen: ShowList },
  DetailScreen: { screen: DetailScreen },
  //LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ShowList',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
