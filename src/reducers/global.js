const initialState = {
  channels: {},
  activeChannel: '',
  packets: [],
};

export function global(state = initialState, action) {
  switch (action.type) {
    case 'POPULATE_CHANNELS':
      return {
        ...state,
        channels: action.channels,
      };

    case 'SET_ACTIVE_CHANNEL':
      return {
        ...state,
        activeChannel: action.channel,
      };

    case 'SET_PACKETS':
      return {
        ...state,
        packets: action.packets,
      };

    default:
      return state;
  }
}
