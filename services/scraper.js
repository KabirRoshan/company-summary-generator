import axios from "axios";
import * as cheerio from "cheerio";
import { generateSummary } from "./summaryGenerator.js";

const fetchWebsiteContent = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const cleanContent = (html) => {
  const $ = cheerio.load(html);
  $("header", "footer", "nav", "script", "img", "svg").remove();
  $('[class*="cookie"], [id*="cookie"], [class*="banner"]').remove();

  let text = $("body").text();
  return text.replace(/\s+/g, " ").trim().substring(0, 10000);
};

const scrapeAndSummerise = async (url) => {
  const websiteContent = await fetchWebsiteContent(url);
  const cleanContentText = cleanContent(websiteContent);
  return await generateSummary(cleanContentText);
};

export { fetchWebsiteContent, cleanContent, scrapeAndSummerise };