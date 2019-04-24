
import { View, Text, Image } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import styles from './index.scss'
// import { useCallback } from 'react';

interface MovieProps {
    name: string,
    time: number,
    description: string,
    title: string,
}

export interface MovieSectionState {
    title: string,
    movies: MovieProps[]
}

const MovieItem = (props: MovieProps) => {

    return <View className="movieItem" style={styles.movieItem}>
        <Image  className="movieImage" src="https://wx1.sinaimg.cn/mw690/73243a6dly1fyshcvnx73j20eg07kgon.jpg" />
        <Text className="movieText">{props.title}</Text>
        <Text className="movieTime">{'2019-04-24 21:46'}</Text>
    </View>
}
export class MovieSection extends Component<{}, MovieSectionState> {
    constructor(props) {
        super(props)
        this.state = {
            title: '最新电影',
            movies: [
                {
                    name: 'mv1',
                    time: new Date().getTime(),
                    description: 'hhhhhhhhh',
                    title: '190423 SBS 燃烧的青春 E201 中字'
                },
                {
                    name: 'mv1',
                    time: new Date().getTime(),
                    description: 'hhhhhhhhh',
                    title: '190423 SBS 燃烧的青春 E201 中字'
                },
                {
                    name: 'mv1',
                    time: new Date().getTime(),
                    description: 'hhhhhhhhh',
                    title: '190423 SBS 燃烧的青春 E201 中字'
                },
                {
                    name: 'mv1',
                    time: new Date().getTime(),
                    description: 'hhhhhhhhh',
                    title: '190423 SBS 燃烧的青春 E201 中字'
                }
            ]
        }
    }
    render() {
        return <View className="MovieSection">
            <Text className="title" style={styles.title}>{this.state.title}</Text>
            <View className="moveWrap">
                {
                    this.state.movies.map((movie: MovieProps) => MovieItem(movie))
                }
                
            </View>
        </View>
    }
}