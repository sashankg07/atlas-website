const OpenAI = require('openai');
const fs = require('fs').promises;
const path = require('path');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function refreshGPTData() {
  try {
    console.log('Starting GPT API data refresh...');
    
    // Define the prompt for generating AI news content
    const prompt = `Generate 5 recent AI news articles with the following structure:
    Each article should have:
    - title: A compelling headline about AI developments
    - description: A 2-3 sentence summary
    - url: A placeholder URL (use "#" for now)
    - source: A credible news source name
    - date: Today's date in "Month DD, YYYY" format
    - category: One of [Research, Technology, Business, Ethics, Tools]
    
    Focus on recent AI developments, breakthroughs, and trends. Make the content engaging and informative.
    
    Return the response as a JSON array of objects.`;
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that generates realistic AI news content. Always respond with valid JSON."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });
    
    const response = completion.choices[0].message.content;
    
    // Parse the JSON response
    let articles;
    try {
      articles = JSON.parse(response);
    } catch (parseError) {
      console.error('Failed to parse GPT response as JSON:', parseError);
      console.log('Raw response:', response);
      return;
    }
    
    // Validate the structure
    if (!Array.isArray(articles)) {
      console.error('Response is not an array');
      return;
    }
    
    // Update the mock data file
    const mockDataPath = path.join(process.cwd(), 'src', 'data', 'mockData.ts');
    
    // Create new featured articles (first 3)
    const featuredArticles = articles.slice(0, 3);
    const latestNews = articles.slice(3);
    
    // Generate new mock data content
    const newMockDataContent = `export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  source: string;
  date: string;
  category: string;
}

export const featuredArticles: NewsArticle[] = ${JSON.stringify(featuredArticles, null, 2)};

export const latestNews: NewsArticle[] = ${JSON.stringify(latestNews, null, 2)};
`;
    
    // Write the updated content
    await fs.writeFile(mockDataPath, newMockDataContent);
    
    console.log('Successfully refreshed GPT data!');
    console.log('Generated articles:', articles.length);
    
  } catch (error) {
    console.error('Error refreshing GPT data:', error);
    process.exit(1);
  }
}

refreshGPTData(); 