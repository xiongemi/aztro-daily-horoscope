import { device, element, by } from 'detox';

describe('zodiac-sign-list', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display header', async () => {
    await expect(element(by.text('Zodiac Sign List'))).toBeVisible();
  });

  it('should display list', async () => {
    await expect(element(by.id('zodiac-sign-list'))).toBeVisible();
  });

  it('should display libra', async () => {
    const libraListItem = await element(by.text('Libra'));
    await expect(libraListItem).toBeVisible();
    await libraListItem.tap();
    await expect(element(by.text('Horoscope Card'))).toBeVisible();
  });
});
