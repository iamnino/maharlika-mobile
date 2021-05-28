import * as ImagePicker from 'expo-image-picker';

const ImageServices = {
    getLocalImage : async () => {
        return ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            // allowsEditing: true,
            // aspect: [9, 16],
            quality: 0.1,
            // base64: true,
            exif: false
        });
    },
}
export default ImageServices;