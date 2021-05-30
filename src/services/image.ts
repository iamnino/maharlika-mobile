import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

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
    upload: async (params: any) => {
        return axios({
            method: 'POST',
            url: `${process.env.API_URL}/upload`,
            headers: {
                'Content-Type' :'multipart/form-data'
            },
            data: params
        });
    },
    uploadEventCover: async (params: any) => {
        return axios({
            method: 'POST',
            url: `${process.env.API_URL}/event/upload`,
            headers: {
                'Content-Type' :'multipart/form-data'
            },
            data: params
        });
    }
}
export default ImageServices;