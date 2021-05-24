import React, { Component } from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: '#2F3132'
    }
});

interface TextProps {
    lineLimit: number,
    label: string,
    type: string,
    style: any
}

class Text extends Component<TextProps> {
    constructor(props: any) {
        super(props);
    }

    static defaultProps = {
        lineLimit: undefined,
        label: "",
        type: "regular",
        style: {}
    }

    public render() {
        const { lineLimit, label, type, style }: any = this.props;
        let fontFamily: string = "inter-regular";

        switch (type) {
            case "light":
                fontFamily = 'inter-light';
                break;
            case "regular":
                fontFamily = 'inter-regular';
                break;
            case "medium":
                fontFamily = 'inter-medium';
                break;
            case "semiBold":
                fontFamily = 'inter-semibold';
                break;
            case "bold":
                fontFamily = 'inter-bold';
                break;
            default:
                fontFamily = 'inter-regular';
                break;
        }

        return (
            <RNText numberOfLines={lineLimit} style={{ fontFamily: fontFamily, ...styles.text, ...style }}>{label}</RNText>
        )
    }
}

export default Text;