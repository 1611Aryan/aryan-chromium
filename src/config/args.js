const disablesArgs = [
    '--window-size=1920,1080',
    '--start-maximized',
    '--hide-scrollbars',
  ];

  const args = chromium.args.filter(arg => !disablesArgs.includes(arg));

  export default args