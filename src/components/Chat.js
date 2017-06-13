import React from 'react'

import {
  View,
  Text,
} from 'react-native'

class Chat extends React.Component {
  render() {
    return (
      <View>
        <Text>
          Hello {this.props.name}!
        </Text>
      </View>
    );
  }
}

Chat.defaultProps = {
  name: 'John Snow',
};

Chat.propTypes = {
  name: React.PropTypes.string,
};

export default Chat;
