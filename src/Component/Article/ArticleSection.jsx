import React from "react";
import child1 from "../../assets/ArticleImage/child1.png";
import child2 from "../../assets/ArticleImage/child2.png";
import child3 from "../../assets/ArticleImage/child3.png";
import ArticleCard from "./ArticleCard";

const ArticleSection = () => {
  const articles = [
    {
      id: 1,
      img: child1,
      title: "The Benefits of Enrolling Kids in Online Courses",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: "Read More",
    },
    {
      id: 2,
      img: child2,
      title: "Unlock Your Child's Potential with Online Courses for Kids",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: "Read More",
    },
    {
      id: 3,
      img: child3,
      title: "Engage and Inspire The Power of Online Courses for Kids",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: "Read More",
    },
  ];
  return (
    <div className="p-20">
      <h2 className="text-[#008Bd8] py  -8 text-4xl font-bold text-center">
        Articles and Insight
      </h2>
      <div className="rounded flex gap-8 p-10">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            img={article.img}
            title={article.title}
            description={article.description}
            button={article.button}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;
