const RainbowToken = artifacts.require('RainbowToken')
require('chai').should()

contract('Rainbow token', accounts => {
  const [creator, user, anotherUser] = accounts
  console.log(creator, accounts)
  const creationParams = {
    gas: 7e6,
    gasPrice: 1e9,
    from: creator
  }

  let rainbow = null
  const _name = 'RainbowToken'
  const _symbol = 'RAINBOW'
  const rainbowMapping = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
  ]

  beforeEach(async () => {
    rainbow = await RainbowToken.new(_name, _symbol, creationParams)
  })

  describe('Should make first account an owner', () => {
    it('should math the first account with the contract owner', async () => {
      let owner = await rainbow.owner()
      assert.equal(owner, creator)
    })
  })

  describe('name', () => {
    it('has a name', async () => {
      const name = await rainbow.name()
      name.should.be.equal(_name)
    })
  })

  describe('symbol', () => {
    it('has a symbol', async () => {
      const symbol = await rainbow.symbol()
      symbol.should.be.equal(_symbol)
    })
  })

  describe('color', () => {
    it('should get color by colorId', async () => {
      const color = await rainbow.getColor(1)
      color.should.be.equal(rainbowMapping[0])
    })
    it('should generate rainbow', async () => {
      const totalSupply = await rainbow.totalSupply()
      for (let i = 0; i < totalSupply; i++) {
        const color = await rainbow.getColor(i + 1)
        color.should.be.equal(rainbowMapping[i])
      }
    })
  })
})
