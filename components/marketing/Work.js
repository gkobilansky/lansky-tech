import { articles } from "@/app/work/_assets/content";
import CardArticle from "@/app/work/_assets/components/CardArticle";

export default function Work() {
  // Get the latest 3 articles sorted by date
  const latestArticles = articles
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <section className="py-24 md:py-32 px-4 max-w-6xl mx-auto" id="work">
      <div className="text-center mb-16">
        <h2 className="font-extrabold text-3xl lg:text-4xl tracking-tight mb-6">
          Recent Work
        </h2>
        <p className="text-lg opacity-80 max-w-xl mx-auto">
          Check out some of our latest projects and case studies
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-20 lg:gap-34 px-12 lg:px-0">
        {latestArticles.map((article) => (
          <CardArticle
            key={article.slug}
            article={article}
            showCategory={true}
            isImagePriority={true}
          />
        ))}
      </div>
    </section>
  );
}
