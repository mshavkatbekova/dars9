import React from "react";
import Link from "next/link";

function ArticlesList({ articles }) {
  return (
    <div className="prose">
      <ol className="p-0 m-0">
        {articles.map((article) => {
          return (
            <li key={article.id}>
              <h4>
                <span className="font-semibold">Title:</span> {article.title}
              </h4>
              <p>
                <span className="font-medium">Author:</span> {article.author}
              </p>
              <Link
                className="no-underline text-white bg-blue-500 py-1 px-2 rounded"
                href={`/articles/${article.id}`}
              >
                Read More
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ArticlesList;
