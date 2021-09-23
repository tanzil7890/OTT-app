import React from 'react'
import { View, Text, Image } from 'react-native'


interface VideoCommentProps {
    comment: {
        id: string;
        createdAt: string;
        comment: string;
        likes: number;
        dislikes: number;
        replies: number;
        user: {
            name: string;
            image: string;
        }
    }
}



const VideoComment = (props: VideoCommentProps) => {
    const {comment} = props;

    return (
        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
            <Image style ={{width:35, height: 35, borderRadius: 25}} source={{ uri: comment.user.image }}/>       
            <Text style={{ color: 'white',  marginLeft: 10, flex: 1  }}>{comment.comment} </Text> 
        </View>
    )
}

export default VideoComment
