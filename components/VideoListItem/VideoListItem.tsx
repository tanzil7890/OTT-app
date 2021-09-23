import React from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './style';

import { useNavigation } from '@react-navigation/native';

type VideListItemProps = {
    video: {
        id: string;
        createdAt: string;
        title: string;
        thumbnail: string;
        videoUrl: string;
        duration: number;
        views: number;
        user: {
            name: string;
            image?: string;
        },
    }
}

const VideoListItem = (props: VideListItemProps) => {

    const { video } = props;

    const navigation = useNavigation();

    const minutes = Math.floor(video.duration / 60);
    const seconds = video.duration %60;
    
    /*let viewsString = video.views.toString();
    if(video.views > 1_000_000) {
        viewsString = (video.views / 1_000_000).toFixed(1) + 'm'
    } else if (video.views > 1_000) {
        viewsString = (video.views / 1_000).toFixed(1) + 'k'
    }
    */


    const openVideoPage = () => {
        navigation.navigate("VideoScreen", { id: video.id });
    }

    return (
        <Pressable onPress={openVideoPage} style={styles.videoCard} >
            <View>
                <Image style={styles.thumbnail} source={{ uri: video.thumbnail }} />
                <View style={styles.timeContainer} >
                    <Text style={styles.time} >{minutes}:{seconds < 10 ? '0' : ''}{seconds}</Text>
                </View>
            </View>

            {/* Title row */}
            <View style={styles.titleRow}>
                {/* Avatar */}
                <Image style={styles.avatar} source={{ uri: video.user.image }} />

                {/* Middle Container: Title, subtitle, etc. */}
                <View style={styles.middleContainer}>
                    <Text style={styles.title}>{video.title} </Text>
                    <Text style={styles.subtitle}>{video.user.name} {video.views} {video.createdAt}</Text>
                </View>

                {/* Icon */}
                <Entypo name="dots-three-vertical" size={16} color="white" />

            </View>

        </Pressable>

    );
};


export default VideoListItem;