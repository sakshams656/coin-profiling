const dummyArticles = [
  {
      title: "Bitcoin Hits New Highs in Market Rally randomsadaswqwewdew" ,
      url: "https://example.com/article1",
      urlToImage: "https://www.tastycrypto.com/wp-content/uploads/2023/11/DALL%C2%B7E-2023-11-30-09.54.54-A-vibrant-colorful-montage-showcasing-a-variety-of-cryptocurrencies.-The-image-features-symbolic-representations-of-various-well-known-digital-curren-1536x878.png",
      publishedAt: "2024-02-01T10:30:00Z",
      content: "Bitcoin has surged to an all-time high as investors pour into the crypto market. Experts predict further gains as institutional interest grows.",
      category: "Crypto",
      totalViews: "1500",
  },
  {
      title: "Ethereum 2.0 Upgrade: What You Need to Know",
      url: "https://example.com/article2",
      urlToImage: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F4087184%2Fcover_image%2Fregular_1708x683%2FUntitled-c7f4c86ddb44556b00a31a37e4219c3d.png",
      publishedAt: "2024-02-05T12:00:00Z",
      content: "The long-awaited Ethereum 2.0 upgrade is finally here, bringing major changes like lower gas fees, faster transactions, and enhanced security.",
      category: "Crypto",
      totalViews: "2300",
  },
  {
      title: "Crypto Market Analysis: Bull or Bear?",
      url: "https://example.com/article3",
      urlToImage: "https://i0.wp.com/blogs.cfainstitute.org/investor/files/2022/04/Crypto-Tokens-and-Crypto-Coins-What-Drives-Performance.png?resize=940%2C575&ssl=1",
      publishedAt: "2025-02-08T09:15:00Z",
      content: "With recent price fluctuations, analysts debate whether the crypto market is entering a bull run or preparing for another correction.",
      category: "Market Analysis",
      totalViews: "1800",
  },
  {
      title: "Top 5 Altcoins Poised for Massive Growth",
      url: "https://example.com/article6",
      urlToImage: "https://pixelplex.io/wp-content/uploads/2024/02/ai-and-crypto-main.jpg",
      publishedAt: "2025-02-15T11:20:00Z",
      content: "These five altcoins are gaining momentum in the market and could potentially outperform Bitcoin and Ethereum in the coming months.",
      category: "Coin Prediction",
      totalViews: "1700",
  },
  {
      title: "Breaking: New Crypto Regulations Announced",
      url: "https://example.com/article5",
      urlToImage: "https://www.tastycrypto.com/wp-content/uploads/2023/11/DALL%C2%B7E-2023-11-30-09.54.54-A-vibrant-colorful-montage-showcasing-a-variety-of-cryptocurrencies.-The-image-features-symbolic-representations-of-various-well-known-digital-curren-1536x878.png",
      publishedAt: "2025-02-12T08:30:00Z",
      content: "Governments worldwide are implementing stricter regulations on cryptocurrency trading and taxation, impacting investors and exchanges alike.",
      category: "Announcement",
      totalViews: "1900",
  },
  {
      title: "Bitcoin vs. Gold: Which is the Better Investment?",
      url: "https://example.com/article11",
      urlToImage: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F4087184%2Fcover_image%2Fregular_1708x683%2FUntitled-c7f4c86ddb44556b00a31a37e4219c3d.png",
      publishedAt: "2025-02-26T14:40:00Z",
      content: "As inflation rises, investors are debating whether Bitcoin or gold is the superior store of value for long-term wealth preservation.",
      category: "Market Analysis",
      totalViews: "2200",
  },
  {
      title: "Major Crypto Hack Exposes Security Flaws",
      url: "https://example.com/article14",
      urlToImage: "https://pixelplex.io/wp-content/uploads/2024/02/ai-and-crypto-main.jpg",
      publishedAt: "2025-03-05T09:45:00Z",
      content: "A recent crypto exchange hack has exposed major vulnerabilities in security protocols, affecting thousands of users.",
      category: "Announcement",
      totalViews: "2600",
  },
  {
      title: "Top Crypto Wallets for Secure Investments",
      url: "https://example.com/article12",
      urlToImage: "https://i0.wp.com/blogs.cfainstitute.org/investor/files/2022/04/Crypto-Tokens-and-Crypto-Coins-What-Drives-Performance.png?resize=940%2C575&ssl=1",
      publishedAt: "2025-02-28T15:30:00Z",
      content: "Choosing the right crypto wallet is crucial for security. Here’s a list of the best hardware and software wallets in 2025.",
      category: "Crypto",
      totalViews: "2100",
  },
  {
      title: "How Blockchain is Revolutionizing Finance",
      url: "https://example.com/article7",
      urlToImage: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F4087184%2Fcover_image%2Fregular_1708x683%2FUntitled-c7f4c86ddb44556b00a31a37e4219c3d.png",
      publishedAt: "2025-02-17T16:00:00Z",
      content: "From decentralized finance (DeFi) to smart contracts, blockchain technology is reshaping traditional banking and financial systems.",
      category: "Crypto",
      totalViews: "2500",
  },
  {
      title: "Ethereum Staking: Is It Worth It?",
      url: "https://example.com/article13",
      urlToImage: "https://pixelplex.io/wp-content/uploads/2024/02/ai-and-crypto-main.jpg",
      publishedAt: "2025-03-02T08:00:00Z",
      content: "Staking Ethereum can be a profitable way to earn passive income, but is it the right choice for you? Here’s what you need to know.",
      category: "Crypto",
      totalViews: "1700",
  },
  {
    title: "Bitcoin Hits New Highs in Market Rally",
    url: "https://example.com/article1",
    urlToImage: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F4087184%2Fcover_image%2Fregular_1708x683%2FUntitled-c7f4c86ddb44556b00a31a37e4219c3d.png",
    publishedAt: "2024-02-01T10:30:00Z",
    content: "Bitcoin has surged to an all-time high as investors pour into the crypto market. Experts predict further gains as institutional interest grows.",
    category: "Crypto",
    totalViews: "1500",
},
{
    title: "Ethereum 2.0 Upgrade: What You Need to Know",
    url: "https://example.com/article2",
    urlToImage: "https://pixelplex.io/wp-content/uploads/2024/02/ai-and-crypto-main.jpg",
    publishedAt: "2024-02-05T12:00:00Z",
    content: "The long-awaited Ethereum 2.0 upgrade is finally here, bringing major changes like lower gas fees, faster transactions, and enhanced security.",
    category: "Crypto",
    totalViews: "2300",
},
{
    title: "Crypto Market Analysis: Bull or Bear?",
    url: "https://example.com/article3",
    urlToImage: "https://i0.wp.com/blogs.cfainstitute.org/investor/files/2022/04/Crypto-Tokens-and-Crypto-Coins-What-Drives-Performance.png?resize=940%2C575&ssl=1",
    publishedAt: "2025-02-08T09:15:00Z",
    content: "With recent price fluctuations, analysts debate whether the crypto market is entering a bull run or preparing for another correction.",
    category: "Market Analysis",
    totalViews: "1800",
},
{
    title: "Top 5 Altcoins Poised for Massive Growth",
    url: "https://example.com/article6",
    urlToImage: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F4087184%2Fcover_image%2Fregular_1708x683%2FUntitled-c7f4c86ddb44556b00a31a37e4219c3d.png",
    publishedAt: "2025-02-15T11:20:00Z",
    content: "These five altcoins are gaining momentum in the market and could potentially outperform Bitcoin and Ethereum in the coming months.",
    category: "Coin Prediction",
    totalViews: "1700",
},
{
    title: "Breaking: New Crypto Regulations Announced",
    url: "https://example.com/article5",
    urlToImage: "https://i0.wp.com/blogs.cfainstitute.org/investor/files/2022/04/Crypto-Tokens-and-Crypto-Coins-What-Drives-Performance.png?resize=940%2C575&ssl=1",
    publishedAt: "2025-02-12T08:30:00Z",
    content: "Governments worldwide are implementing stricter regulations on cryptocurrency trading and taxation, impacting investors and exchanges alike.",
    category: "Announcement",
    totalViews: "1900",
},
{
    title: "Bitcoin vs. Gold: Which is the Better Investment?",
    url: "https://example.com/article11",
    urlToImage: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F4087184%2Fcover_image%2Fregular_1708x683%2FUntitled-c7f4c86ddb44556b00a31a37e4219c3d.png",
    publishedAt: "2025-02-26T14:40:00Z",
    content: "As inflation rises, investors are debating whether Bitcoin or gold is the superior store of value for long-term wealth preservation.",
    category: "Market Analysis",
    totalViews: "2200",
},
{
    title: "Major Crypto Hack Exposes Security Flaws",
    url: "https://example.com/article14",
    urlToImage: "https://i0.wp.com/blogs.cfainstitute.org/investor/files/2022/04/Crypto-Tokens-and-Crypto-Coins-What-Drives-Performance.png?resize=940%2C575&ssl=1",
    publishedAt: "2025-03-05T09:45:00Z",
    content: "A recent crypto exchange hack has exposed major vulnerabilities in security protocols, affecting thousands of users.",
    category: "Announcement",
    totalViews: "2600",
},
{
    title: "Top Crypto Wallets for Secure Investments",
    url: "https://example.com/article12",
    urlToImage: "https://www.tastycrypto.com/wp-content/uploads/2023/11/DALL%C2%B7E-2023-11-30-09.54.54-A-vibrant-colorful-montage-showcasing-a-variety-of-cryptocurrencies.-The-image-features-symbolic-representations-of-various-well-known-digital-curren-1536x878.png",
    publishedAt: "2025-02-28T15:30:00Z",
    content: "Choosing the right crypto wallet is crucial for security. Here’s a list of the best hardware and software wallets in 2025.",
    category: "Crypto",
    totalViews: "2100",
},
{
    title: "How Blockchain is Revolutionizing Finance",
    url: "https://example.com/article7",
    urlToImage: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F4087184%2Fcover_image%2Fregular_1708x683%2FUntitled-c7f4c86ddb44556b00a31a37e4219c3d.png",
    publishedAt: "2025-02-17T16:00:00Z",
    content: "From decentralized finance (DeFi) to smart contracts, blockchain technology is reshaping traditional banking and financial systems.",
    category: "Crypto",
    totalViews: "2500",
},
{
    title: "Ethereum Staking: Is It Worth It?",
    url: "https://example.com/article13",
    urlToImage: "https://www.tastycrypto.com/wp-content/uploads/2023/11/DALL%C2%B7E-2023-11-30-09.54.54-A-vibrant-colorful-montage-showcasing-a-variety-of-cryptocurrencies.-The-image-features-symbolic-representations-of-various-well-known-digital-curren-1536x878.png",
    publishedAt: "2025-03-02T08:00:00Z",
    content: "Staking Ethereum can be a profitable way to earn passive income, but is it the right choice for you? Here’s what you need to know.",
    category: "Crypto",
    totalViews: "1700",
}
];

export default dummyArticles;
