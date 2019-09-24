import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/RenderItemStyle'

export default class RenderItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: {},
    }
  }

  getDataToList = () => {
    this.props.getDataToList(this.props.item)
  }

  render () {
    console.log('item',this.props.item)
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.getDataToList}
      >
        <Text>ID             :{this.props.item.id}</Text>
        <Text>Name           :{this.props.item.name}</Text>
        <Text>Account name   :{this.props.item.account_name}</Text>
        <Text>Account number :{this.props.item.account_number}</Text>
      </TouchableOpacity>
    )
  }
}
