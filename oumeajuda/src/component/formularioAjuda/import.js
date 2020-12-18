import { Panel } from "../../components/panel";
import React from "react";
import { RelatedSubjects } from "../../components/relatedSubjects";
import { Title } from "../../components/title";
import { Topic } from "../../components/topic";
import styles from "./../../styles/FaqPage.module.css";

const FaqPage = ({ category, topics }) => {
  // console.log(topics[0]);
  return (
    <div className={styles.pageContainer}>
      <div className={styles.menu}></div>
      <div className={styles.faqPage}>
        <div className={styles.faqTitle}>
          <Title title={category[0].title} />
        </div>
        <div className={styles.faqContent}>
          <div className={styles.faqContentLeft}>
            <Panel itens={topics} />
          </div>
          <div className={styles.faqContentRight}>
            <Topic title={topics[0].title} body={topics[0].content} />

            <RelatedSubjects
              relatedCategories={category[0].related_categories}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FaqPage.getInitialProps = async ({ req, query }) => {
  const resCategory = await fetch(
    `http://cms-partner.ifood-devel.com.br/faq-categories?slug=${query.slug}`
  );
  let jsonCategory = await resCategory.json();

  jsonCategory.sort((a, b) => a.priority - b.priority);

  const resTopic = await fetch(
    `http://cms-partner.ifood-devel.com.br/faq-topics?faq_category.slug=${query.slug}`
  );
  const jsonTopic = await resTopic.json();

  return { category: jsonCategory, topics: jsonTopic };
};

export default FaqPage;