import { device, element, by } from 'detox';

describe('zodiac-sign-list', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should navigate to 2nd page when Libra was selected', async () => {
    await expect(element(by.text('Zodiac Sign List'))).toBeVisible();
    await expect(element(by.id('zodiac-sign-list'))).toBeVisible();
    const libraListItem = await element(by.text('Libra'));
    await expect(libraListItem).toBeVisible();
    await libraListItem.tap();
    await expect(element(by.text('Horoscope Card'))).toBeVisible();
  });

  it('should navigate to 2nd page when Cancer was selected', async () => {
    const libraListItem = await element(by.text('Cancer'));
    await expect(libraListItem).toBeVisible();
    await libraListItem.tap();
    await expect(element(by.text('Horoscope Card'))).toBeVisible();
  });
});
