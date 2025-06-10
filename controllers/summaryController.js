import { scrapeAndSummerise } from "../services/scraper.js";

const summeriseWebsite = async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    const summary = await scrapeAndSummerise(url);
    return res.status(200).json({ summary });
  } catch (error) {
    console.error("Error summarising website:", error);
    return res.status(500).json({ error: "Failed to generate summary" });
  }
}

export { summeriseWebsite };