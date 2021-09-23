import React, {useRef} from 'react';
import { 
    View, 
    Text, 
    Image, 
    ScrollView, 
    FlatList,
    Pressable
} from 'react-native';
import BottomSheet, {BottomSheetModalProvider, BottomSheetModal} from '@gorhom/bottom-sheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import video from '../../assets/data/video.json'
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import videos from '../../assets/data/videos.json';
import VideoListItem from '../../components/VideoListItem';
import VideoPlayer from '../../components/VideoPlayer';
import VideoComments from '../../components/VideoComments';
import VideoComment from '../../components/VideoComment';
import comments from '../../assets/data/comments.json'




const VideoScreen = () => {

    /*let viewsString = video.views.toString();
    if(video.views > 1_000_000) {
        viewsString = (video.views / 1_000_000).toFixed(1) + 'm'
    } else if (video.views > 1_000) {
        viewsString = (video.views / 1_000).toFixed(1) + 'k'
    }
    */

    const commentsSheetRef = useRef<BottomSheetModal>(null);

    const openComments = () => {
        commentsSheetRef.current?.present();
    };

    return (
        <View style={{backgroundColor: '#141414', flex: 1}}>
        
            {/* Video Player */}
            <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail}/>

            <View style={{flex: 1}}>
            {/* Video Info */}
                <View style={styles.videoInfoContainer}>
                    <Text style={styles.tags}>{video.tags} </Text>
                    <Text style={styles.title}>{video.title} </Text>
                    <Text style={styles.subtitle}>{video.user.name} {video.views} {video.createdAt}</Text>
                </View>
            

            {/* Action list */}
                <View style={styles.actionListContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.actionListContainer}>
                        <View style={styles.actionListItem}>
                            <AntDesign name="like1" size={30} color="lightgrey" />
                            <Text style={styles.actionText}>{video.likes}</Text>
                        </View>

                        <View style={styles.actionListItem}>
                                <AntDesign name="dislike2" size={30} color="lightgrey" />
                            <Text style={styles.actionText}>{video.dislikes}</Text>
                        </View>

                        <View style={styles.actionListItem}>
                                <AntDesign name="export" size={24} color="lightgrey" />
                            <Text style={styles.actionText}>{video.likes}</Text>
                        </View>

                        <View style={styles.actionListItem}>
                                <AntDesign name="download" size={24} color="lightgrey" />
                            <Text style={styles.actionText}>{video.likes}</Text>
                        </View>

                        <View style={styles.actionListItem}>
                            <AntDesign name="download" size={24} color="lightgrey" />
                            <Text style={styles.actionText}>{video.likes}</Text>
                        </View>

                        <View style={styles.actionListItem}>
                            <AntDesign name="download" size={24} color="lightgrey" />
                            <Text style={styles.actionText}>{video.likes}</Text>
                        </View>
                    </ScrollView>
                </View>


            {/* User Info */}
                <View style={{flexDirection: 'row', alignItems: 'center', borderColor: '#3d3d3d', borderTopWidth: 1, borderBottomWidth: 1,
            padding: 10}}>
                    <Image style ={styles.avatar} source={{ uri: video.user.image }}/>
                    <View style={{ marginHorizontal: 10, flex: 1 }}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{video.user.name}</Text>
                        <Text style={{ color: 'grey', fontSize: 16 }}>{video.user.subscribers} subscribers</Text>
                    </View>
                        <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold', padding: 10 }}>Subscribe</Text>
                </View>
            

            {/* Comments */}
                <Pressable onPress={openComments} style={{padding: 10, marginVertical: 10}}>
                    <Text style={{color: 'white'}}>Comments 333</Text>
                    {/* Comments  component*/}
                    <VideoComment comment={comments[0]}/>
                    
                </Pressable>

            {/* All comments*/ }
                <BottomSheetModal 
                    ref={commentsSheetRef} 
                    snapPoints={['70%']} 
                    index={0}
                    backgroundComponent={({ style }) => (
            <View style={[style, { backgroundColor: "#4d4d4d" }]} />
          )}
                    >
                        <VideoComments />
                </BottomSheetModal>
            </View>
            </View>  
    )
};


const VideoScreenWithRecommendation = () => {
    return (
        <SafeAreaView style={{backgroundColor: '#141414', flex: 1}}>
            <BottomSheetModalProvider>
               <FlatList 
                    data={videos}
                    renderItem={({item}) => <VideoListItem video={item}/>}
                    ListHeaderComponent={VideoScreen}
                />
            </BottomSheetModalProvider>
        </SafeAreaView>
    )
}

    {/* <FlatList 
        data={videos}
        renderItem={({item}) => <VideoListItem video={item}/>}
        ListHeaderComponent={VideoScreen}
        /> */}

export default VideoScreenWithRecommendation;
