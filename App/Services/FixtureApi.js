export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      data: require('../Fixtures/root.json')
    }
  },
  getRate: () => {
    return {
      ok: true,
      data: require('../Fixtures/rateLimit.json')
    }
  },
  getData: (data) => {
    // This fixture only supports gantman or else returns skellock
    return {
      ok: true,
      data: data
    }
  }
}
