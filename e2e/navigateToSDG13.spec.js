describe('test sdg app', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should navigate the SDG13 target screen', async () => {
    //  wait for the home screen to load
    await waitFor(element(by.id('SDG13'))).toExist();

    // scroll down to SDG13 tile
    await waitFor(element(by.id('SDG13')))
      .toBeVisible()
      .whileElement(by.id('content'))
      .scroll(100, 'down');

    // tap the tile
    await element(by.id('SDG13')).tap();

    // expect the target list to be exist
    expect(element(by.id('targetList'))).toExist();
  });
});
