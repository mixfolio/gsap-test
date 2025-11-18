const ScrollSections = () => {
  return (
    <>
      <section id="scroll-cards">
        <div className="wrapper">
          <h2>Главный заголовок</h2>
          <ul className="card-list">
            <li className="card bg-white">
              <h2>Заголовок карточки 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium corrupti magni rerum, fugit ex tempora! Eum ipsum
                doloribus maiores unde! Dolor beatae excepturi blanditiis ad
                voluptatem reprehenderit, nihil id praesentium!
              </p>
            </li>
            <li className="card bg-gray-50 top-20">
              <h2>Заголовок карточки 2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium corrupti magni rerum, fugit ex tempora! Eum ipsum
                doloribus maiores unde! Dolor beatae excepturi blanditiis ad
                voluptatem reprehenderit, nihil id praesentium!
              </p>
            </li>
            <li className="card bg-gray-100 top-40">
              <h2>Заголовок карточки 3</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium corrupti magni rerum, fugit ex tempora! Eum ipsum
                doloribus maiores unde! Dolor beatae excepturi blanditiis ad
                voluptatem reprehenderit, nihil id praesentium!
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2>Главный заголовок второго раздела</h2>
      </section>
    </>
  );
};

export default ScrollSections;
