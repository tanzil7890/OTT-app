import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    videoPlayer: {
        width: '100%',
        aspectRatio: 16/9
    },
    videoInfoContainer: {
        margin: 14,
        
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        marginVertical: 10,
    },

    subtitle: {
        color: 'grey',
        fontSize: 15,
        fontWeight: '500',

    },
    tags: {
        color: '#0094e3',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 3,
    },

    //action list
    actionListContainer: {
        marginVertical: 10
        
    },
    actionListItem: {
        width: 70,
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    actionText: {
        color: 'white'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    }
});

export default styles;