
import { View } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import { MovieSection } from './MovieSection';



export class AppBody extends Component {
    render() {
        return <View>
            <MovieSection />
        </View>
    }
}