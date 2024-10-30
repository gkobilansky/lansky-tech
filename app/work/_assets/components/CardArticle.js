import Link from "next/link";
import Image from "next/image";
import BadgeCategory from "./BadgeCategory";
import Avatar from "./Avatar";

// This is the article card that appears in the home page, in the category page, and in the author's page
const CardArticle = ({
  article,
  tag = "h2",
  showCategory = true,
  isImagePriority = false,
}) => {
  const TitleTag = tag;

  return (
    <article className="card bg-base-200 rounded-box overflow-hidden hover:shadow-lg transition-all duration-200">
      {article.image?.src && (
        <Link
          href={`/work/${article.slug}`}
          className="link link-hover"
          title={article.title}
          rel="bookmark"
        >
          <figure>
            <Image
              src={article.image.src}
              alt={article.image.alt}
              width={800}
              height={450}
              priority={isImagePriority}
              placeholder="blur"
              className="aspect-[16/9] object-center object-cover hover:scale-[1.02] duration-200 ease-in-out"
            />
          </figure>
        </Link>
      )}
      <div className="card-body p-4">
        {/* TITLE WITH RIGHT TAG */}
        <TitleTag className="text-xl font-bold mb-1">
          <Link
            href={`/work/${article.slug}`}
            className="link link-hover hover:link-primary"
            title={article.title}
          >
            {article.title}
          </Link>
        </TitleTag>

        {/* Simplified meta info */}
        <div className="flex items-center justify-between text-sm text-base-content/70">
          {showCategory && article.categories[0] && (
            <BadgeCategory category={article.categories[0]} />
          )}
          <span>
            {new Date(article.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </article>
  );
};

export default CardArticle;
