import boilers from "../assets/1.jpg";

const Gallery = () => {
  return (
    <section>
      <h2>Архитектурная визуализация</h2>
      <img src="/fahwerk.jpg" alt="Дом" />
      <img src={boilers} alt="Котельная" />
    </section>
  );
};

export default Gallery;
