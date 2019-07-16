import React from 'react';
import { Text } from "native-base";

export default props => <Text {...props} style={[{fontFamily: 'Helvetica'}, props.style]}>{props.children}</Text>
