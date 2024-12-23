import css from './MainCatalog.module.css'
import sprite from "../../images/svg/stroke.svg"

function MainCatalog() {
    return (
        <div>
        <div>
        <svg stroke='black' fill='black' width="70" height="80">
              <use
                href={`${sprite}#icon-desktop_windows`}
              ></use>
            </svg>
            <p>Нотбуки, ПК та планшети</p>
        </div>
        <div>
        <svg stroke='black' fill='black' width="70" height="80">
              <use
                href={`${sprite}#icon-tv`}
              ></use>
            </svg>
            <p>Телевізори та
            мультимедіа</p>
        </div>
        <div>
        <svg stroke='black' fill='black' width="70" height="80">
              <use
                href={`${sprite}#icon-phone_iphone`}
              ></use>
            </svg>
            <p>Телефони
            смартфони</p>
        </div>
        <div>
        <svg stroke='black' fill='black' width="70" height="80">
              <use
                href={`${sprite}#icon-headphones`}
              ></use>
            </svg>
            <p>Аудіо
            </p>
        </div>
        <div>
        <svg stroke='black' fill='black' width="70" height="80">
              <use
                href={`${sprite}#icon-local_laundry_service`}
              ></use>
            </svg>
            <p>Побутова техніка
            </p>
        </div>
        <div>
        <svg stroke='black' fill='black' width="70" height="80">
              <use
                href={`${sprite}#icon-bike_scooter`}
              ></use>
            </svg>
            <p>Гаджети та 
            електротранспорт</p>
        </div>
        </div>
    )
}

export default MainCatalog;