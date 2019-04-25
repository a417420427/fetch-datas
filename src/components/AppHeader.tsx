import { AtNavBar } from 'taro-ui'
import { View } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import {AppMenu} from './AppMenu';

interface AppHeaderState {
  show: boolean
}

export  class AppHeader extends Component<{}, AppHeaderState> {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }
    private backToPre = () => {
      this.showDrwaer(!this.state.show)
    }
    private showMenu  = () => {
      this.showDrwaer(!this.state.show)
      console.log(this.state.show)
    }
    private showDrwaer = (isShow: boolean) => {
      this.setState({
        show: isShow
      })
    }
    render () {
      return (
        <View className='index'>
           <AtNavBar
              onClickRgIconSt={this.backToPre}
              onClickLeftIcon={this.showMenu}
              color='#ccc'
              title='当前页面'
              leftText='返回'
              rightFirstIconType='bullet-list'
            />
            <AppMenu
              show={this.state.show}
              showDrwaer={this.showDrwaer}
            />
        </View>
      )
    }
  }

