
import { View } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import { MovieSection, MovieProps} from './MovieSection';
import  { getHomeData } from '../request'


interface BodyState {
    sectionData: MovieProps[]
}

export class AppBody extends Component<{}, BodyState> {
    constructor(props) {
        super(props)
        this.state = {
            sectionData: []
        }
    }
    async componentWillMount() {
        const data = await getHomeData('http://localhost:3030/hanfan')
        this.setState({
            sectionData: data
        })
    }
    render() {
        return <View>
            <MovieSection sectionData={this.state.sectionData} siteName={"韩饭"}/>
        </View>
    }
}