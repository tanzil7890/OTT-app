import React, {useRef} from 'react'
import { View, Text } from 'react-native'
import { Video } from 'expo-av'

interface VideoPlayerProps {
    videoURI: string,
    thumbnailURI: string;
};

const VideoPlayer = (props: VideoPlayerProps) => {
    const { videoURI, thumbnailURI } = props;

    
    return (
        <View>
            <Video
                source={{ uri: videoURI }}
                posterSource={{uri: thumbnailURI}}
                posterStyle={{resizeMode: 'cover'}}
                usePoster={true}
                resizeMode="contain"
                style={{
                    width: '100%',
                    
                    aspectRatio: 16/9,
                }}
                useNativeControls
            />
        </View>
    )
}

export default VideoPlayer
