# EngageCoin: Dynamic Token Pricing Based on YouTube Channel Engagement
ppt : https://drive.google.com/file/d/1HMW9yFtgRC6Xgpt-yIbzaBqYb-Zd4AIZ/view?usp=drive_link

## Problem Statement

Token prices in the current market typically fluctuate based only on supply and demand. Engagement metrics from platforms like YouTube are not integrated into token pricing, presenting an opportunity to create a token system that reflects both market dynamics and content engagement.

## Idea

Our project, EngageCoin, aims to create an ERC-20 token on Polygon for each YouTube channel, with a price that dynamically adjusts based on demand, supply, and YouTube engagement metrics (likes, comments, views). This approach benefits both content creators, who earn royalties from trading fees, and traders, who profit by investing in tokens associated with high-engagement channels.

## Solution Approach

1. **Token Mapping**: Each token on Polygon represents a specific YouTube channel.
2. **Price Adjustment Mechanism**:
   - **Demand/Supply**: Managed through QuickSwap on Polygon.
   - **Engagement Metrics**: Updated based on YouTube data using a custom Oracle.
3. **Royalty System**: Creators earn a percentage of trading fees as royalties.
4. **Decentralized Storage**: Utilize Filecoin for secure and decentralized storage of engagement data.

## Tech Stack

- **Blockchain Platform**: Polygon (Mumbai Testnet for development)
- **Smart Contracts**: ERC-20 Token with custom functions for price adjustment and royalty distribution.
- **Decentralized Exchange (DEX)**: QuickSwap on Polygon.
- **Oracle**: Custom Oracle to fetch engagement metrics from YouTube.
- **Frontend**: Web application using `web3.js` or `ethers.js` for interaction with smart contracts.
- **APIs**: YouTube Data API to fetch engagement metrics.
- **Storage**: Filecoin for decentralized storage of engagement data and other relevant information.

## Token Contract Design

- **ERC-20 Token on Polygon**:
  - **Standard Functions**: Transfer, balanceOf, etc.
  - **Custom Functions**: Adjust price based on engagement metrics.
  - **Royalty Distribution**: Percentage of trading fees paid to the content creator.

## Engagement Data Integration

- **Data Source**:
  - **YouTube Data API**: Fetch engagement metrics such as likes, comments, and views.
- **Custom Oracle**:
  - Fetch data from APIs and update the token price in the smart contract on Polygon.
- **Filecoin Storage**:
  - Store engagement data and related information securely and decentralized.
- **Implementation**:
  - Regularly fetch engagement data and adjust token prices based on this data.

## Deployment and Trading

1. **Deployment**:
   - **Polygon Mumbai Testnet**: Deploy the ERC-20 token contract.
   - **QuickSwap on Polygon**: Add liquidity for trading.
   - **Filecoin**: Store relevant engagement data.
2. **Trading Process**:
   - **Traders**: Buy and sell tokens based on market demand and YouTube engagement.
   - **Profit Potential**: Traders can earn by investing in tokens linked to high-engagement YouTube channels.

## Royalty System for Creators

- **Overview**:
  - Creators earn royalties from trading fees associated with their channel’s token.
- **Benefits**:
  - **Creators**: Receive passive income from token transactions.
  - **Traders**: Benefit from investing in tokens related to popular channels.
- **Implementation**:
  - **Royalty Distribution**: Managed through the smart contract on Polygon.

## Future Scope and Enhancements

- **Future Enhancements**:
  - **Advanced Pricing Models**: Implement more sophisticated algorithms for dynamic pricing.
  - **Additional Integrations**: Explore integration with other platforms and DEXs.
  - **Scalability**: Optimize for high transaction volumes and extensive datasets.
- **Creator Earnings**:
  - Expand the royalty system to include more engagement metrics and potential partnerships with other platforms.
- **Impact**:
  - **Market Innovation**: Offers a novel way to link content creators with their audience through token economics.

## Conclusion

EngageCoin is a dynamic token system on Polygon that incorporates both market demand, supply, and YouTube engagement metrics. It provides new opportunities for creators and traders alike. Our next steps include deploying on the mainnet, refining engagement integration, and exploring further features.
