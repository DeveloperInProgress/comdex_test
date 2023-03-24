import { Account, DelegatorReward } from "../types";
import { CosmosMessage } from "@subql/types-cosmos";

type SpotLimitOrderMessage = {
  sender: string;
  order: {
    marketId: string;
    orderType: string;
    margin: string;
    triggerPrice;
    orderInfo: {
      subaccountId: string;
      feeRecipient: string;
      price: string;
      quantity: string;
    };
  };
};


export async function handleMessage(msg: CosmosMessage<DelegatorReward>): Promise<void> {
  logger.info(JSON.stringify(msg));
  logger.info(JSON.stringify("BLOCK: " + msg.block.block.header.height));
  //logger.info(JSON.stringify("MARGIN: " + msg.msg.decodedMsg.order.margin));
  //logger.info(JSON.stringify("PRICE: " + msg.msg.decodedMsg.order.orderInfo.price));
  /*logger.info(JSON.stringify("PRICE: " + msg.msg.decodedMsg.order.orderInfo.price));
  logger.info(JSON.stringify("MARGIN: " + msg.msg.decodedMsg.order.margin)); */
/*   const spotLimitOrder = SpotLimitOrder.create({
    id: `${msg.tx.hash}-${msg.idx}`,
    blockHeight: BigInt(msg.block.block.header.height),
    txHash: msg.tx.hash,
    from: msg.msg.decodedMsg.sender,
    marketID: msg.msg.decodedMsg.order.marketId,
    orderType: msg.msg.decodedMsg.order.orderType,
    subAccountID: msg.msg.decodedMsg.order.orderInfo.subaccountId,
    feeRecipient: msg.msg.decodedMsg.order.orderInfo.feeRecipient,
    price: BigInt(msg.msg.decodedMsg.order.orderInfo.price),
    quantity: BigInt(msg.msg.decodedMsg.order.orderInfo.quantity),
    amount:
      BigInt(msg.msg.decodedMsg.order.orderInfo.price) *
      BigInt(msg.msg.decodedMsg.order.orderInfo.quantity),
  });
  await spotLimitOrder.save(); */
}
