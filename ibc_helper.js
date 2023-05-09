const { 
  MsgRecvPacket,
  MsgAcknowledgement,
  MsgTimeout,
  MsgChannelOpenTry,
  MsgChannelOpenInit,
  MsgChannelOpenAck,
  MsgChannelOpenConfirm,
  MsgChannelCloseInit,
  MsgChannelCloseConfirm,
  MsgTimeoutOnClose
} = require('cosmjs-types/ibc/core/channel/v1/tx');
const { 
  MsgConnectionOpenTry,
  MsgConnectionOpenInit,
  MsgConnectionOpenAck,
  MsgConnectionOpenConfirm
} = require('cosmjs-types/ibc/core/connection/v1/tx');
const { 
  MsgCreateClient,
  MsgUpdateClient,
  MsgUpgradeClient,
  MsgSubmitMisbehaviour
} = require('cosmjs-types/ibc/core/client/v1/tx');
const {
  MsgTransfer
} = require('cosmjs-types/ibc/applications/transfer/v1/tx.js');
const {
  MsgPayPacketFee,
  MsgPayPacketFeeAsync,
  MsgRegisterCounterpartyPayee,
  MsgRegisterPayee
} = require('cosmjs-types/ibc/applications/fee/v1/tx.js');

function deserializeMessage(msg) {
  msg.result = `Handled message type: ${msg.typeUrl}`;
  switch (msg.typeUrl) {

    // Channel messages
    case '/ibc.core.channel.v1.MsgRecvPacket':
      msg.value = MsgRecvPacket.decode(msg.value);
      break;
    case '/ibc.core.channel.v1.MsgAcknowledgement':
      msg.value = MsgAcknowledgement.decode(msg.value);
      break;
    case '/ibc.core.channel.v1.MsgTimeout':
      msg.value = MsgTimeout.decode(msg.value);
      break;
    case '/ibc.core.channel.v1.MsgChannelOpenTry':
      msg.value = MsgChannelOpenTry.decode(msg.value);
      break;
    case '/ibc.core.channel.v1.MsgChannelOpenInit':
      msg.value = MsgChannelOpenInit.decode(msg.value);
      break;
    case '/ibc.core.channel.v1.MsgChannelOpenAck':
      msg.value = MsgChannelOpenAck.decode(msg.value);
      break;
    case '/ibc.core.channel.v1.MsgChannelOpenConfirm':
      msg.value = MsgChannelOpenConfirm.decode(msg.value);
      break;
    case '/ibc.core.channel.v1.MsgChannelCloseInit':
      msg.value = MsgChannelCloseInit.decode(msg.value);
      break;
    case '/ibc.core.channel.v1.MsgChannelCloseConfirm':
      msg.value = MsgChannelCloseConfirm.decode(msg.value);
      break;
    case '/ibc.core.channel.v1.MsgTimeoutOnClose':
      msg.value = MsgTimeoutOnClose.decode(msg.value);
      break;

    // Client messages
    case '/ibc.core.client.v1.MsgCreateClient':
      msg.value = MsgCreateClient.decode(msg.value);
      break;
    case '/ibc.core.client.v1.MsgUpdateClient':
      msg.value = MsgUpdateClient.decode(msg.value);
      break;
    case '/ibc.core.client.v1.MsgUpgradeClient':
      msg.value = MsgUpgradeClient.decode(msg.value);
      break;
    case '/ibc.core.client.v1.MsgSubmitMisbehaviour':
      msg.value = MsgSubmitMisbehaviour.decode(msg.value);
      break;

    // Connection messages
    case '/ibc.core.connection.v1.MsgConnectionOpenTry':
      msg.value = MsgConnectionOpenTry.decode(msg.value);
      break;
    case '/ibc.core.connection.v1.MsgConnectionOpenInit':
      msg.value = MsgConnectionOpenInit.decode(msg.value);
      break;
    case '/ibc.core.connection.v1.MsgConnectionOpenAck':
      msg.value = MsgConnectionOpenAck.decode(msg.value);
      break;
    case '/ibc.core.connection.v1.MsgConnectionOpenConfirm':
      msg.value = MsgConnectionOpenConfirm.decode(msg.value);
      break;

    // Transfer message
    case '/ibc.applications.transfer.v1.MsgTransfer':
      msg.value = MsgTransfer.decode(msg.value);
      break;

    // Fee messages
    case '/ibc.applications.fee.v1.MsgPayPacketFee':
      msg.value = MsgPayPacketFee.decode(msg.value);
      break;
    case '/ibc.applications.fee.v1.MsgPayPacketFeeAsync':
      msg.value = MsgPayPacketFeeAsync.decode(msg.value);
      break;
    case '/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee':
      msg.value = MsgRegisterCounterpartyPayee.decode(msg.value);
      break;
    case '/ibc.applications.fee.v1.MsgRegisterPayee':
      msg.value = MsgRegisterPayee.decode(msg.value);
      break;

    default:
      msg.result = `Unhandled message type: ${msg.typeUrl}`;
  }
  return msg;
}

module.exports = {
  deserializeMessage
}