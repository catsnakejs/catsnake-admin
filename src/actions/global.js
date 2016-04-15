// aad80295-7ada-4846-8b0e-fa07078fe15f

export function populateChannels(channels) {
  return {
    type: 'POPULATE_CHANNELS',
    channels,
  };
}

export function setActiveChannel(channel) {
  return {
    type: 'SET_ACTIVE_CHANNEL',
    channel,
  };
}

export function setPackets(packets) {
  return {
    type: 'SET_PACKETS',
    packets,
  };
}

export function addPacket(packet) {
  return {
    type: 'ADD_PACKET',
    packet,
  };
}
