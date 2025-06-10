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