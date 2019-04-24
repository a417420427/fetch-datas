import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import {AppHeader} from '../../components/AppHeader';
import { AppBody } from '../../components/AppBody';

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }
  
  render () {
    return (
      <View className='index'>
         <AppHeader  />
         <AppBody />
      </View>
    )
  }
}