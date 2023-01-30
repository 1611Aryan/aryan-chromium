import chromium from '@sparticuz/chromium';

const executablePath = async () => {
  if (process.env.NODE_ENV === 'DEV') return process.env.CHROMIUM_PATH;
  return await chromium.executablePath();
};

export default executablePath;
