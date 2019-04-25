import { AtDrawer } from 'taro-ui'
import { View, Text } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import {hanfan, lol, dytt, bthome} from '../url'
export interface AppMenuProps {
    showDrwaer: (isShow: boolean) => void,
    show: boolean
}

export class AppMenu extends Component<AppMenuProps> {
    onClose() {
        this.props.showDrwaer(false)
    }
    render () {
      return (
        <View className='AppMenu'>
          <AtDrawer 
            show={this.props.show} 
            mask 
            onClose={this.onClose.bind(this)} 
            className="MenuDrawer"
            >
              {
                [hanfan, lol, dytt, bthome].map(item => <View className='DrawerItem'>
                  <Text>{item.name}</Text>
                  <Text className="iconfont icon-createtask_fill"> </Text>
                </View>)
              }
            </AtDrawer>
        </View>
      )
    }
  }

