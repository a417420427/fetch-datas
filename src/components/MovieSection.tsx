
import { View, Text, Image } from '@tarojs/components';
import { Component, navigateTo } from '@tarojs/taro';
import styles from './index.scss'
// import { useCallback } from 'react';

export interface MovieProps {
    time: string,
    description: string,
    title: string,
    src: string,
    href: string
}

export interface MovieSectionState {
    title: string,
    movies: MovieProps[]
}

interface MovieSectionProps {
    sectionData: MovieProps[]
    siteName: string
}

const MovieItem = (props: MovieProps) => {
    const showDetail = () => {
        // const res = await Axios({
        //     url: '/hanfan/32657'
        // })
        console.log(navigateTo)
        navigateTo({
            url: '/pages/detail?id=32657'
        })

    }
    return <View onClick={showDetail} className="movieItem" style={styles.movieItem}>
        <Image  className="movieImage" src={props.src} />
        <Text className="movieText">{props.title}</Text>
        <Text className="movieTime">{'2019-04-24 21:46'}</Text>
    </View>
}
export class MovieSection extends Component< MovieSectionProps, MovieSectionState> {

    render() {
        return <View className="MovieSection">
            <View className="title"><Text style={styles.title}>{this.props.siteName}</Text></View>
            <View className="moveWrap">
                {
                    this.props.sectionData.map((movie: MovieProps) => MovieItem(movie))
                }
                
            </View>
        </View>
    }
}