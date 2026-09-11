const feed = require('../static/games/timetorogue/version.json')

describe('Time to Rogue release advice', () => {
  test('reverses use charges instead of the retired per-run cap', () => {
    const tip = feed.tips.find(text => text.includes('each reverse rewinds'))
    expect(tip).toContain('no per-run limit')
    expect(tip).toContain('hold up to 14')
    expect(tip).toContain("run's deadline")
    expect(feed.tips.join(' ')).not.toContain('at most three times per run')
  })

  test('the shared feed identifies the version with the new deadline rules', () => {
    const changedRules = feed.tips.filter(text =>
      text.includes('no per-run limit') || text.includes('24 hours'))
    expect(changedRules).toHaveLength(2)
    changedRules.forEach(text => expect(text).toContain('In version 1.2.0 and later'))
    const deadline = changedRules.find(text => text.includes('24 hours'))
    expect(deadline).toContain('maximum Focus (140%)')
    expect(deadline).toContain('even on a cleared floor')
    expect(deadline).toContain('Opening the app, using items, and reversing do not extend')
  })

  test('the release announcement is dated and targets the iOS news reader', () => {
    const release = feed.news.find(item => item.title === 'Time to Rogue 1.2.0 is here')
    expect(release.platform).toBe('ios')
    expect(Number.isNaN(Date.parse(release.date))).toBe(false)
    expect(release.link_url).toBe('https://apps.apple.com/us/app/time-to-rogue/id6786902468')
  })
})
