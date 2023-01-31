import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';

import executablePath from './config/executablePath.js';
import args from "./config/args.js";
import defaultViewport from "./config/defaultViewport.js"

const dotenv =
  process.env.NODE_ENV !== 'production' ? await import('dotenv') : null;

if (dotenv) dotenv.config();

export const handler = async t => {
  const browser = await puppeteer.launch({
    args: args,
    defaultViewport: defaultViewport,
    executablePath: await executablePath(),
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });

  const [page] = await browser.pages();
  console.log('1');
  await page.goto('https://google.com');
  console.log('2');
  const pageTitle = await page.title();
  console.log('3');
  await browser.close();
  console.log('4');
  return pageTitle;
};
