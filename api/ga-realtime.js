const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

module.exports = (_req, res) => {
  const payload = {
    pageViews: randomBetween(9000, 18000),
    outboundClicks: randomBetween(200, 600),
    bounceRate: Number((Math.random() * 15 + 30).toFixed(1)),
    sessionDuration: randomBetween(150, 360),
    activeUsers: randomBetween(2500, 5200),
    newUsers: randomBetween(800, 2200),
    generatedAt: Date.now()
  }

  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.status(200).json(payload)
}
