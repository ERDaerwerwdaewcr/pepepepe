import styles from './PizzaCard.module.scss'
import ContentLoader from "react-content-loader"


export const Skeleton = () => (
  <ContentLoader className={styles.pizzaCard}
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <circle cx="125" cy="125" r="125" />
    <rect x="0" y="NaN" rx="0" ry="0" width="220" height="NaN" />
    <rect x="0" y="323" rx="0" ry="0" width="270" height="85" />
    <rect x="0" y="418" rx="20" ry="20" width="88" height="40" />
    <rect x="125" y="418" rx="19" ry="19" width="140" height="40" />
    <rect x="0" y="286" rx="19" ry="19" width="270" height="24" />
  </ContentLoader>
)

