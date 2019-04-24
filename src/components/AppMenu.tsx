import { AtDrawer } from 'taro-ui'
import { View } from '@tarojs/components';
import { Component } from '@tarojs/taro';

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
        <View className='index'>
          <AtDrawer 
            show={this.props.show} 
            mask 
            onClose={this.onClose.bind(this)} 
            items={['菜单1', '菜单2', '菜单3']}
            ></AtDrawer>
        </View>
      )
    }
  }

