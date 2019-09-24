import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'

import RenderItem from '../Components/RenderItem'

import { ApiDataTypes } from '../Redux/ApiDataRedux'

class ShowList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {},
      item: {},
    }
  }

  getDataToFlatlist = ({item}) =>
  {
    return (<RenderItem
      item={item}
      getDataToList={this.getDataToFlatlist}
    />)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
      return {
        data: nextProps.data.payload,
      }
  }

  componentDidMount (): void {
    this.props.getData()
  }

  render () {
    const {data} = this.state
      return (
        <View>
          {(data != null && data.data != null) && <FlatList
            data={data.data}
            renderItem={this.getDataToFlatlist}
            keyExtractor={(item) => item.id}
          />}
        </View>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch({
        type: ApiDataTypes.API_DATA_REQUEST,
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowList)
