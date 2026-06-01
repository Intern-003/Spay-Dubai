// components/usecases/WantToLearnMore.jsx
import styles from "./WantToLearnMore.module.css";

export default function WantToLearnMore() {
  const blogPosts = [
    {
      title: "White-Label Payment Gateways vs. Custom-Built Payment Solutions: Pros and Cons",
      author: "Anastasiia Brener",
      date: "May 13, 2025",
      readTime: "5 min",
    },
    {
      title: "How Payment Processors Make Money – Complete Financial Model",
      author: "Alexandra Dolia",
      date: "May 28, 2025",
      readTime: "6 min",
    },
    {
      title: "The Strategic Advantage of White-Label Payment Platforms",
      author: "Alexandra Dolia",
      date: "May 10, 2025",
      readTime: "3 min",
    },
  ];

  return (
    <section className={styles.learnMore}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Want to Learn More?</h2>
        
        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <div key={index} className={styles.blogCard}>
              <h3 className={styles.blogTitle}>{post.title}</h3>
              <div className={styles.blogMeta}>
                <span className={styles.author}>{post.author}</span>
                <span className={styles.date}>{post.date}</span>
                <span className={styles.readTime}>{post.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}