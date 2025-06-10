# Company Summary Generator

Small backend service that accepts a company’s website URL, scrapes relevant content, and generates a structured summary using a large language model (LLM).

## Getting Started

Install dependancies:

```bash
npm i
npm ci
```

Start Server:

```bash
npm start
```

Send POST request to `http://localhost:3000/api/summarise`:

```bash
{
  "url": "https://example-company.co.uk"
}
```

The API will respond with a summary of the company.

## My Approach

The first thing I started with is searching for libraries useful for web scraping. I decided to use Cheerio with the combination of Axios. Cheerio is great for parsing HTML,
which for this task is what I needed to do. From there I looked up the official documentation for Cheerio and watched a few videos to understand how it can be used for web scraping. Axios allows me to fetch the HTML from company websites. The combination of these two helped me achieve web scraping.

I also decided to split the files up instead of having them all in one file as I find this to be easier to read and update in the future. The next step I took was to start integrating a LLM to generate the summary. I decided to use the OpenAI API with its `gpt-3.5-turbo` model. I have used this in the past and was familiar with how it works and how to integrate it into projects. I then add the prompt to summarise a company from the content fetched (and cleaned). Postman was used to test the endpoint (`http://localhost:3000/api/summarise`).