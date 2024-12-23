import css from "./MainAds.module.css";

function MainAds() {
  return (
    <>
      <div className={css.container}>
        <div className={css.salesBlock}>
            <h3 className={css.subtitleSales}>Знижка на всі товари 
            Lenovo</h3>
            <h2 className={css.title}>20%</h2>
        </div>
        <div className={css.actionBlock}>
            <h3 className={css.subtitle}>Акційні пропозиції тижня</h3>
        </div>
      </div>
    </>
  );
}

export default MainAds;
