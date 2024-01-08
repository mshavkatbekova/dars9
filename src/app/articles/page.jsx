import ArticlesList from "@/components/ArticlesList";

async function getData() {
  const req = await fetch("http://localhost:3000/api/articles");
  const data = await req.json();

  return data;
}

async function Article() {
  const articles = await getData();
  return (
    <div>
      <h1 className="text-2xl mb-8 font-semibold">Article</h1>
      <ArticlesList articles={articles} />
    </div>
  );
}

export default Article;
