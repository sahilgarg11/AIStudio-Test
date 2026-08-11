import { leapwork } from "./leapwork";

// ai-studio-step-id: 3XVsB8eZ
await leapwork.step("Click the Search apple.com button on the Apple homepage", async () => {
    const searchButton = page.getByRole('button', { name: 'Search apple.com', exact: true });
    await expect(searchButton).toHaveCount(1);
    await searchButton.click({ force: true });
}, { relativeXpath: "//*[@id=\"globalnav-menubutton-link-search\"]" });

// ai-studio-step-id: XrIRv7RH
await leapwork.step("Fill the Search apple.com field with \"17 pro\"", async () => {
    const searchBox = page.getByRole('textbox', { name: 'Search apple.com', exact: true });
    await expect(searchBox).toHaveCount(1);
    await searchBox.fill('17 pro');
}, { action: "input", relativeXpath: "//*[@id=\"globalnav-submenu-search\"]/div/div/form/div[1]/input[@aria-label=\"Search apple.com\"]" });

// ai-studio-step-id: qajnjFlP
await leapwork.step("Click the Submit search button for '17 pro' on Apple", async () => {
    const searchBox = page.getByRole('textbox', { name: 'Search apple.com', exact: true });
    await searchBox.press('Enter');
});

// ai-studio-step-id: dpIdVxTG
await leapwork.step("Click the Buy iPhone 17 Pro and iPhone 17 Pro Max link in Apple search results", async () => {
    const target = page.getByRole('link', { name: 'Buy iPhone 17 Pro and iPhone 17 Pro Max - Apple', exact: true });
    await expect(target).toHaveCount(1);
    await target.click({ force: true });
}, { action: "click", relativeXpath: "//*[@id=\"exploreOrganic\"]/div[3]/div[1]/h2/a" });

// ai-studio-step-id: wdbnJSBM
await leapwork.step("Click the iPhone 17 Pro 6.3-inch model radio button", async () => {
    // [Leapwork Play self-heal preserved previous code]
    // const modelRadio = page.getByRole('radio', {
    //   name: 'iPhone 17 Pro 6.3-inch display Footnote 2 From $1099 or $45.79 per month for 24 months Footnote ※',
    //   exact: true
    // });
    // await expect(modelRadio).toHaveCount(1);
    // await modelRadio.click({ force: true });
    // [/Leapwork Play self-heal preserved previous code]
    
    const modelRadio = page.getByRole('radio', { name: /iPhone\s*17\s*Pro 6\.3-inch display/i });
    await expect(modelRadio).toHaveCount(1);
    await modelRadio.click({ force: true });
}, { action: "click", relativeXpath: "//*[@id=\"_r_a_\"]" });

// ai-studio-step-id: fLZ2TwX5
await leapwork.step("Click the 256GB storage option for the iPhone 17 Pro", async () => {
    // [Leapwork Play self-heal preserved previous code]
    // const storage256GB = page.getByRole('radio', {
    //   name: '256GB Footnote  1 From $1099 or $45.79 per month for 24 months  Footnote  ‡',
    //   exact: true
    // });
    // await expect(storage256GB).toHaveCount(1);
    // await storage256GB.click({ force: true });
    // [/Leapwork Play self-heal preserved previous code]
    
    const storageGroup = page.getByRole('group', {
      name: 'Storage. How much space do you need?',
      exact: true,
    });
    await expect(storageGroup).toHaveCount(1);
    
    const storage256GB = storageGroup.getByRole('radio', { name: /^256GB/ });
    await expect(storage256GB).toHaveCount(1);
    await storage256GB.click({ force: true });
}, { action: "click", relativeXpath: "//*[@id=\"_r_g_\"]" });

// ai-studio-step-id: VLxp8kGn
await leapwork.step("Click the No trade-in radio button in the Apple Trade In section", async () => {
    // [Leapwork Play self-heal preserved previous code]
    // const noTradeIn = page
    //   .getByRole('group', {
    //     name: 'Apple Trade In.Get $35–$695 credit toward your new iPhone. Footnote #',
    //     exact: true,
    //   })
    //   .getByRole('radio', { name: 'No trade-in', exact: true });
    //
    // await expect(noTradeIn).toHaveCount(1);
    // await noTradeIn.click({ force: true });
    // [/Leapwork Play self-heal preserved previous code]
    
    const noTradeIn = page.getByRole('radio', { name: 'No trade-in', exact: true });
    await expect(noTradeIn).toHaveCount(1);
    await noTradeIn.click({ force: true });
}, { action: "click", relativeXpath: "//*[@id=\"noTradeIn\"]" });

// ai-studio-step-id: 8VoJbGV_
await leapwork.step("Click the Buy payment option radio button", async () => {
    const paymentOption = page.getByRole('radio', {
      name: 'Buy Pay with Apple Pay or other payment methods.',
      exact: true,
    });
    await expect(paymentOption).toHaveCount(1);
    await paymentOption.click({ force: true });
}, { action: "click", relativeXpath: "//*[@id=\"_r_28_\"]" });

// ai-studio-step-id: JlNYe4Zy
await leapwork.step("Click the \"Connect to any carrier later\" radio button under Connectivity", async () => {
    const carrierLaterRadio = page.getByRole('radio', { name: 'Connect to any carrier later', exact: true });
    await expect(carrierLaterRadio).toHaveCount(1);
    await carrierLaterRadio.click({ force: true });
}, { action: "click", relativeXpath: "//*[@id=\"_r_p_\"]" });

// ai-studio-step-id: 7lS8CUad
await leapwork.step("Click the No AppleCare coverage radio button in the AppleCare coverage section", async () => {
    // [Leapwork Play self-heal preserved previous code]
    // const noAppleCareCoverage = page.getByRole('radio', { name: 'No AppleCare coverage', exact: true });
    // await expect(noAppleCareCoverage).toHaveCount(1);
    // await noAppleCareCoverage.click({ force: true });
    // [/Leapwork Play self-heal preserved previous code]
    
    const noAppleCare = page.getByRole('radio', {
      name: 'No AppleCare coverage Return your device in good condition to avoid a damage fee',
      exact: true,
    });
    await expect(noAppleCare).toHaveCount(1);
    await noAppleCare.click({ force: true });
}, { action: "click", relativeXpath: "//*[@id=\"_r_1f_\"]" });

// ai-studio-step-id: jXCBJFgY
await leapwork.step("Click the Continue button to proceed with the iPhone 17 Pro purchase", async () => {
    const continueButton = page.getByRole('button', { name: 'Continue', exact: true });
    await expect(continueButton).toHaveCount(1);
    await continueButton.click({ force: true });
}, { action: "click", relativeXpath: ".//div/div/div/div[2]/div/button" });
