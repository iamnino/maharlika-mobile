import React, { useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { isOdd } from '../../helpers/utils.helper';
import { align, bg, flex, justify, resizeMode } from '../../styles/global.styles';

// Components
import Text from '../../components/text';
import { SponsoredLabel, StatusLabel } from '../../components/labels';

// Icons
import { LikeButton } from '../buttons';

// Styles
export const styles = StyleSheet.create({ 
    container: {
        ...flex.on,
        ...flex.row,
        ...flex.wrap,
        width: '100%',
    },
    card: {
        ...flex.on,
        flexBasis: '50%',
        width: '50%',
        maxWidth: '50%',
        marginBottom: 18
    },
    cardRight: {
        paddingLeft: 6
    },
    cardLeft: {
        paddingRight: 6
    },
    content: {
        minHeight: 160,
    },
    photo: {
        ...flex.on,
        ...align.center,
        padding: 0,
        height: 136,
        backgroundColor: '#ECECEC',
        overflow: 'hidden',
        // borderTopLeftRadius: 8,
        // borderTopRightRadius: 8,
        borderRadius: 8,
        marginBottom: 8,
        position: 'relative'
    },
    image: {
        ...resizeMode.cover,
        width: '100%'
    },
    metaDescription: {
        ...flex.on,
        ...flex.row,
        ...justify.spaceBetween
        // marginBottom: 3,
    },
    description: {
        marginBottom: 3,
        // borderWidth: 1,
        // minHeight: 45
    },
    meta: {
        fontSize: 12,
        marginRight: 3,
        color: '#636366'
    },
    title: {
        fontSize: 15,
        color: '#2C2C2E',
        marginBottom: 3,
    },
    price: {
        fontSize: 18,
        color: '#1C1C1E',
    },
    heart: {
        ...flex.row,
        ...align.center,
        ...justify.center,
        height: 36,
        width: 36,
        position: 'absolute',
        zIndex: 1,
        bottom: 8,
        right: 8,
        paddingTop: 3,
        borderRadius: 25,
        backgroundColor: '#00000040',
    }
});

const propTypes = {
    data: PropTypes.array,
    onPress: PropTypes.func,
    onPressLike: PropTypes.func,
    containerStyle: PropTypes.any
};

const defaultProps = {
    data: [],
    onPress: null,
    onPressLike: null,
    containerStyle: {}
};

const PostGrid = (props: any) => {
    const { data, onPress, onPressLike, containerStyle } = props;

    return (
        <View style={styles.container}>
            {
                data.map((post: any, index: any) => {
                    const { id, photo, title, price, location, isSponsored } = post;
                    const [liked, setLike] = useState(false);

                    return (
                        <View style={[ styles.card, isOdd(index) ? styles.cardRight : styles.cardLeft, containerStyle]} 
                            key={`post-${id}-grid`}>
                            <Pressable style={styles.content} onPress={() => onPress(post, index)}>
                                
                                <View style={styles.photo}>
                                    { isSponsored && <SponsoredLabel /> }
                                    {/* <StatusLabel type={'active'}/> */}
                                    <Image source={photo} fadeDuration={1} style={styles.image}/>
                                    <LikeButton active={liked} onPress={() => setLike(!liked)}/>
                                </View>
                                
                                <View style={styles.description}>
                                    <Text label={title} type={'semiBold'} style={styles.title} lineLimit={2}/>
                                    <Text label={price} type={'bold'} style={styles.price} lineLimit={1}/>
                                </View>
                                
                                <View style={styles.metaDescription}>
                                    {/* <Text label={'6 mins ago'} style={styles.meta} type={'medium'} /> */}
                                    <Text label={location} style={styles.meta} type={'medium'} lineLimit={1} />
                                </View>

                            </Pressable>
                        </View>
                    )
                })
            }
        </View>
    )
}

PostGrid.propTypes = propTypes;
PostGrid.defaultProps = defaultProps;

export default PostGrid;