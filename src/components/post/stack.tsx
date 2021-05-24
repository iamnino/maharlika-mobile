import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { isOdd } from '../../helpers/utils.helper';
import { align, flex, justify, resizeMode } from '../../styles/global.styles';

// Components
import Text from '../../components/text';
import { SponsoredLabel } from '../../components/labels';

// Styles
export const styles = StyleSheet.create({ 
    container: {
        ...flex.on,
        ...flex.column,
        width: '100%'
    },
    card: {
        marginBottom: 18
    },
    wrapper: {
        ...flex.row,
        ...justify.start,
        width: '100%'
    },
    photo: {
        ...flex.row,
        ...justify.center,
        ...align.center,
        width: 110,
        height: 115,
        backgroundColor: '#ECECEC',
        overflow: 'hidden',
        borderRadius: 5
    },
    image: {
        ...resizeMode.cover,
        width: '100%'
    },
    content: {
        ...flex.on,
        ...flex.row,
        paddingTop: 8,
        paddingLeft: 12,
    },
    context: {
        width: '100%',
    },
    title: {
        fontSize: 15,
        marginBottom: 4
    },
    price: {
        fontSize: 18,
        marginBottom: 5
    },
    metaContainer: {
        ...flex.row,
        ...align.center
    },
    meta: {
        fontSize: 12,
        marginRight: 4
    },
    circle: { 
        height: 3, 
        width: 3, 
        backgroundColor: '#636366',
        marginRight: 4,
        borderRadius: 15
    },
    sponsoredLabel: {
        ...flex.wrap,
        alignSelf: 'flex-start',
        position: 'relative',
        top: 0,
        left: 0,
        marginBottom: 3
    }
});

const propTypes = {
    data: PropTypes.array,
    onPress: PropTypes.any,
    containerStyle: PropTypes.any
};

const defaultProps = {
    data: [],
    onPress: null,
    containerStyle: {}
};

const PostStack = (props: any) => {
    const { data, onPress, containerStyle } = props;
    return (
        <View style={[styles.container, containerStyle]}>
            {
                data.map((post: any, index: any) => {
                    const { id, photo, title, price, location, isSponsored } = post;

                    return (
                        <View style={styles.card}
                            key={`post-${id}-stack`}>
                            <Pressable style={styles.wrapper} onPress={() => onPress()}>
                                <View style={styles.photo}>
                                    <Image source={photo} fadeDuration={1} style={styles.image}/>
                                </View>
                                <View style={styles.content}>
                                    <View style={styles.context}>
                                        { isSponsored && <SponsoredLabel containerStyles={styles.sponsoredLabel} /> }

                                        <Text label={title} type={'semiBold'} 
                                            style={styles.title} lineLimit={2}/>

                                        <Text label={price} type={'bold'} 
                                            style={styles.price}/>
                                            
                                        <View style={styles.metaContainer}>
                                            <Text label={location} type={'medium'} 
                                                style={styles.meta}/>
                                            <View style={styles.circle}/>
                                            <Text label={'4 mins ago'} type={'medium'} 
                                                style={styles.meta}/>
                                        </View>
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                    )
                })
            }
        </View>
    )
}

PostStack.propTypes = propTypes;
PostStack.defaultProps = defaultProps;

export default PostStack;