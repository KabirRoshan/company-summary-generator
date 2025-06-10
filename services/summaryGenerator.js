import openai from "../config/openai.js";

const generateSummary = async (content) => {
  const prompt = ` 
  You are summarizing a company based on a one-page tearsheet. 
  Using the information provided, write a few short paragraphs summarizing key 
  details an investment professional would care about. Include: what the company 
  does, where it is based, its target customers, headcount, and any available financial 
  information. 
  
  Website content: ${content}
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that summarises company information for investment professionals.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
  });

  return response.choices[0].message.content;
};

export { generateSummary };