import "./Home.css";

import { Categories } from "../../components/Categories/Categories";
import { InfoSection } from "../../components/InfoSection/InfoSection";

export const Home = () => {
  return (
    <>
      <Categories />
      <InfoSection className="home__about-us">
        <h2>Sobre Nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
          voluptas, vero animi illum beatae, debitis eveniet tempora odio
          molestias repellendus, dolore recusandae ipsum at. Repellendus atque
          quibusdam fuga hic temporibus.
        </p>
        <a href="">Seguir Leyendo...</a>
      </InfoSection>

      <div className="home__products text-center">
        <h2>Nuestros Productos</h2>

        <div className="home__product-list">
          <div className="product-card">
            <img src="/images/products/comedor_lisboa_wood.jpg" alt="" />
            <div>
              <h3>Comedor Lisboa Wood</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                adipisci nihil distinctio enim atque modi ex. Est temporibus
                atque corrupti? Lorem ipsum dolor sit amet consectetur.
              </p>
              <a href="">Ver</a>
            </div>
          </div>

          <div className="product-card product-card--horizontal">
            <img src="/images/products/comedor_lisboa_wood.jpg" alt="" />
            <div>
              <h3>Comedor Lisboa Wood</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                adipisci nihil distinctio enim atque modi ex. Est temporibus
                atque corrupti? Lorem ipsum dolor sit amet consectetur.
              </p>
              <a href="">Ver</a>
            </div>
          </div>
          <div className="product-card product-card--horizontal">
            <img src="/images/products/comedor_lisboa_wood.jpg" alt="" />
            <div>
              <h3>Comedor Lisboa Wood</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                adipisci nihil distinctio enim atque modi ex. Est temporibus
                atque corrupti? Lorem ipsum dolor sit amet consectetur.
              </p>
              <a href="">Ver</a>
            </div>
          </div>
          <div className="product-card product-card--horizontal">
            <img src="/images/products/comedor_lisboa_wood.jpg" alt="" />
            <div>
              <h3>Comedor Lisboa Wood</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                adipisci nihil distinctio enim atque modi ex. Est temporibus
                atque corrupti? Lorem ipsum dolor sit amet consectetur.
              </p>
              <a href="">Ver</a>
            </div>
          </div>
          <div className="product-card product-card--horizontal">
            <img src="/images/products/comedor_lisboa_wood.jpg" alt="" />
            <div>
              <h3>Comedor Lisboa Wood</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                adipisci nihil distinctio enim atque modi ex. Est temporibus
                atque corrupti? Lorem ipsum dolor sit amet consectetur.
              </p>
              <a href="">Ver</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
