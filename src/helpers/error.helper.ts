import { Alert } from 'react-native';

export const alertUnexpectedError = (e: any, isFatal: boolean) => {
    if (isFatal) {
      Alert.alert("Error", "Unexpected error occurred",
        [
          { text: "Close"}
        ]
      );
    } else {
      // eslint-disable-next-line no-console
      console.log(e); // So that we can see it in the ADB logs in case of Android if needed
    }
};