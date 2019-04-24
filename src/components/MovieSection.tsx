
import { View, Text } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import styles from './index.scss'
// import { useCallback } from 'react';

interface MovieProps {
    name: string,
    time: number,
    description: string
}

export interface MovieSectionState {
    title: string,
    movies: MovieProps[]
}

const MovieItem = (props: MovieProps) => {

    return <View className="movieItem" style={styles.movieItem}>
        <Text>{props.name}</Text>
        <Text>{props.time + ''}</Text>
        <Text>{props.description}</Text>
    </View>
}
export class MovieSection extends Component<{}, MovieSectionState> {
    constructor(props) {
        super(props)
        this.state = {
            title: '测22222222222试',
            movies: [
                {
                    name: 'mv1',
                    time: new Date().getTime(),
                    description: 'hhhhhhhhh'
                },
                {
                    name: 'mv1',
                    time: new Date().getTime(),
                    description: 'hhhhhhhhh'
                },
                {
                    name: 'mv1',
                    time: new Date().getTime(),
                    description: 'hhhhhhhhh'
                },
                {
                    name: 'mv1',
                    time: new Date().getTime(),
                    description: 'hhhhhhhhh'
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