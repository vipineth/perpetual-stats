import { gql } from "graphql-request";

export const top5Trader = `{
  positions(first: 5, orderBy: totalPnlAmount, orderDirection: desc) {
    id
    trader
    margin
    openNotional
    leverage
    realizedPnl
    unrealizedPnl
    fundingPayment
    fee
    badDebt
    liquidationPenalty
    totalPnlAmount
    blockNumber
    timestamp
  }
}`;
export const getVolumeQuery = gql`
  query DailyVolume {
    perpetualDayDatas(first: 1000, orderBy: date, orderDirection: asc) {
      feesUSD
      tradeCount
      volumeUSD
      date
    }
  }
`;
export const getAmmDayDetails = gql`
  query AmmDayDetails {
    ammDayDatas(orderBy: date, orderDirection: desc, where: {}) {
      amm
      feesUSD
      tradeCount
      volumeUSD
      date
    }
  }
`;

export const latestTransaction = gql`
  query LatestTransactions {
    transactions(first: 15, orderBy: date, orderDirection: desc) {
      amm
      badDebt
      blockNumber
      date
      exchangedPositionSize
      fee
      fundingPayment
      gasPrice
      gasUsed
      id
      liquidationPenalty
      margin
      positionNotional
      positionSizeAfter
      realizedPnl
      spotPrice
      trader
      transactionHash
      unrealizedPnlAfter
    }
  }
`;

export function getAddressPosition(addr) {
  return `{
    positionChangedEvents(first: 1000, orderBy: timestamp, orderDirection: desc, where: {
      trader: "${addr}"
    }) {
      id
      trader
      amm
      margin
      positionNotional
      exchangedPositionSize
      fee
      positionSizeAfter
      realizedPnl
      unrealizedPnlAfter
      badDebt
      liquidationPenalty
      spotPrice
      fundingPayment
      timestamp
    }
  }`;
}

export function getPositionChanged(limit = 300) {
  return `{
    positionChangedEvents(first: ${limit}, orderBy: blockNumber, orderDirection: desc) {
      id
      trader
      amm
      margin
      positionNotional
      exchangedPositionSize
      fee
      positionSizeAfter
      realizedPnl
      unrealizedPnlAfter
      badDebt
      liquidationPenalty
      spotPrice
      fundingPayment
      timestamp
    }
  }
  `;
}
export function getTopTenTraders(limit = 300) {
  return `{
    positions(first: 10, orderBy: totalPnlAmount, orderDirection: desc) {
      id
      trader
      margin
      openNotional
      leverage
      realizedPnl
      unrealizedPnl
      fundingPayment
      fee
      badDebt
      liquidationPenalty
      totalPnlAmount
      blockNumber
      timestamp
    }
  }
  `;
}
