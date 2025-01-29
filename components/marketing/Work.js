import { articles } from "@/app/work/articles";
import CardArticle from "@/app/work/_assets/components/CardArticle";
import MuxVideoSlider from "@/app/work/_assets/components/MuxVideoSlider";

const videos = [
  {
    playbackId: "ftLbBsVGtx02Y01juxLlqucVn3Bnu014rxhvrwU9A00T7Bg",
    metadata: {
      video_id: "ftLbBsVGtx02Y01juxLlqucVn3Bnu014rxhvrwU9A00T7Bg",
      video_title: "Lansky Tech Hero Video",
      video_description: "Try-on feature that leads to checkout",
    }
  },
  {
    playbackId: "t4SpPCiyHKVEo2u4mg7jKNgAmPv5FclAW1U02V011Xx1g",
    metadata: {
      video_id: "t4SpPCiyHKVEo2u4mg7jKNgAmPv5FclAW1U02V011Xx1g",
      video_title: "GMB Praxis",
      video_description: "Video driven web app",
    }
  }
];

export default function Work() {
  // Get the latest 3 articles sorted by date
  const latestArticles = articles
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <section className="pt-12 pb-24 bg-base-100 bg-opacity-80 px-4 max-w-full mx-auto" id="work">
      <div className="text-center mb-16">
        <h2 className="font-extrabold text-4xl lg:text-6xl uppercase tracking-tight mb-6">
          Recent Work
        </h2>
        <p className="text-lg opacity-80 max-w-xl mx-auto">
          Check out some of our latest projects and case studies
        </p>
      </div>
      <div className="flex justify-center items-center max-w-2xl mx-auto my-15">
        <MuxVideoSlider videos={videos} />
      </div>


      <div className="grid lg:grid-cols-3 gap-20 lg:gap-34 px-32 mt-20">
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
