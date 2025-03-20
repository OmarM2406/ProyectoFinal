let valueMonde = "COP";
const tasaCOPaEUR = 0.000223877;
const tasaCOPaUSD = 0.000243989;
let moneda = document.getElementById("moneda");

function formatearMoneda(valor, moneda) {
  return valor.toLocaleString("es-CO", {
    style: "currency",
    currency: moneda,
  });
}

function convertirPrecios(data, moneda) {
  return data.map((item) => {
    if (
      item.pricerange &&
      item.pricerange.length === 2 &&
      typeof item.pricerange[0] === "number" &&
      typeof item.pricerange[1] === "number"
    ) {
      const [minCOP, maxCOP] = item.pricerange;
      if ((moneda = "COP")) {
        return {
          ...item,
          pricerange: [
            formatearMoneda(minCOP, moneda),
            formatearMoneda(maxCOP, moneda),
          ],
        };
      }
      let monedaConvert = moneda == "EUR" ? tasaCOPaEUR : tasaCOPaUSD;
      const min = minCOP * monedaConvert;
      const max = maxCOP * monedaConvert;

      return {
        ...item,
        pricerange: [
          formatearMoneda(min, moneda),
          formatearMoneda(max, moneda),
        ],
      };
    }

    if (item.price && typeof item.price !== "string") {
      if (moneda == "COP") {
        return {
          ...item,
          price: formatearMoneda(item.price, moneda),
        };
      }
      let newMoneda = moneda == "EUR" ? tasaCOPaEUR : tasaCOPaUSD;
      let newprice = item.price * newMoneda;
      return {
        ...item,
        price: formatearMoneda(newprice, moneda),
      };
    }

    return {
      ...item,
      price: item.price,
    };
  });
}
let data = [];

function createHTML(data) {
  let cards = ``;
  for (let i = 0; i < data.length; i++) {
    const cardhtml = `<div class="swiper-slide">
            <div class="iconos">
                <i class="fa-solid fa-circle-arrow-left"></i>
                <i class="fa-regular"
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="act-cali">
            <div class="act-txt">
                <span>${
                  data[i].price
                    ? data[i].price
                    : `${data[i].pricerange[0]} hasta ${data[i].pricerange[1]}`
                }</span>
                <h3>${data[i].place}</h3>
                <p>${data[i].description}</p>
                </div>
                <div class="act-img">
                    <img src=${
                      data[i].srcPlace
                    } alt="" width= 500px; higth=300px;>
                </div>
            </div>    
                <a href="#" class="btn-1">programar</a>
        </div>
                `;
    cards += cardhtml;
  }
  return cards;
}

moneda.addEventListener("change", () => {
  let seleccion = moneda.value;
  let newData = convertirPrecios(data, seleccion);
  ContainerCards.innerHTML = "";
  let newhtml = createHTML(newData);
  ContainerCards.innerHTML = newhtml;
});

let ContainerCards = document.getElementById("ContainerCards");
