/**
 *
 * Copyright 2016-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import React, { PropTypes } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,

} from 'react-native';

const propTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    style: Text.propTypes.style,
    containerStyle: View.propTypes.style,
    text: PropTypes.string
};

const TextButton = ({ onPress, disabled, style, text, upText, upTextStyle }) => (
    <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.75}
        style={{alignItems:'center'}}

        >
            <Text style={upTextStyle}>
                {upText}
            </Text>
            <Text style={style}>
                {text}
            </Text>
    </TouchableOpacity>
);

TextButton.propTypes = propTypes;

TextButton.defaultProps = {
    onPress() { },
    disabled: false
};

export default TextButton;
