/**
 * Add a unique test id for iOS and Android
 *
 * @param {string} id
 *
 * @return {object}
 */

// import {Platform} from 'react-native';

// export const IS_IOS = Platform.OS === 'ios';

export function testProperties(id) {
    return {testID: id, accessibilityLabel: id};
}
  