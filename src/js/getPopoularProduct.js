import { getPopularNewsAPI } from './api/news-api.js';
import { getMarkupWeather } from './markups/weatherMarkup.js';
import { weatherData } from './markups/weatherMarkup.js';
import {
  ref,
  valuePage,
  pagination,
  handleButtonRight,
  handleButtonLeft,
  handleButton,
  goToTop,
} from './pagination.js';
import { markup } from './markups/newsCard.js';
import { checkFavCards } from './addAndRemoveFromFavorite.js';

const popularNewsGallery = document.querySelector('.news-gallery');
const notFoundPage = document.querySelector('.not-found');
const loader = document.querySelector('.loader');

async function getPopularProduct() {
  try {
    loader.classList.remove('visually-hidden');
    const getNews = await getPopularNewsAPI();
    // console.log('Arr objects with mostpopular News', getNews.results);
    const newsArr = getNews.results;
    getAmountCards(newsArr);
    // console.log('valuePage', valuePage);
    let markupNews = '';
    const markupWeather = getMarkupWeather({ data: weatherData });
    // console.log(markupWeather);
    // console.log({ data: weatherData });
    const itemWeather = `<li class="weather__card">${markupWeather.markup}</li>`;
    // console.log(itemWeather);

    if (window.innerWidth < 768) {
      for (let i = 0; i < 5; i += 1) {
        if (i === 0) {
          markupNews += itemWeather;
        } else {
          markupNews += markup(newsArr[i]);
        }
      }
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      for (let i = 0; i < 8; i += 1) {
        if (i === 1) {
          markupNews += itemWeather;
        } else {
          markupNews += markup(newsArr[i]);
        }
      }
    }
    if (window.innerWidth >= 1280) {
      for (let i = 0; i < 9; i += 1) {
        if (i === 2) {
          markupNews += itemWeather;
        } else {
          markupNews += markup(newsArr[i]);
        }
      }
    }
    popularNewsGallery.innerHTML = markupNews;
    checkFavCards();
    // console.log(markupNews);
    pagination(valuePage);
  } catch (error) {
    notFoundPage.classList.toggle('visually-hidden');
  }
  finally {
    loader.classList.add('visually-hidden');
  }
}

// getPopularProduct();
window.addEventListener('resize', getPopularProduct);

function getAmountCards(array) {
  if (window.innerWidth < 768) {
    valuePage.amountCards = 5;
    valuePage.totalPages = Math.ceil(array.length / valuePage.amountCards);
  }

  if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    valuePage.amountCards = 8;
    valuePage.totalPages = Math.ceil(array.length / valuePage.amountCards);
  }

  if (window.innerWidth >= 1280) {
    valuePage.amountCards = 9;
    valuePage.totalPages = Math.ceil(array.length / valuePage.amountCards);
  }
}

let chunkNewsArr = [];

ref.paginationContainerEl.addEventListener('click', onPaginationContainerEl);
ref.paginationEl.addEventListener('click', onPaginationEl);

export function onPaginationContainerEl(e) {
  handleButton(e.target);

  getPopularProductData()
    .then(array => {
      console.log(array);
      renderNewsMarkup(array, valuePage.amountCards);
    })
    .catch(error => console.error(error));

  goToTop();
}



 export function onPaginationEl(e) {
  const ele = e.target;
  // console.log(ele);

  if (ele.dataset.page) {
    const pageNumber = parseInt(e.target.dataset.page, 10);
    valuePage.curPage = pageNumber;
    // console.log(pageNumber);
  }
  // console.log(valuePage.amountCards);

  getPopularProductData()
    .then(array => {
      renderNewsMarkup(array, valuePage.amountCards);
    })
    .catch(error => console.error(error));

  goToTop();
}

async function getPopularProductData() {
    const getNews = await getPopularNewsAPI();
  // console.log('Arr objects with mostpopular News', getNews.results);
  const newsArr = await getNews.results;
  getAmountCards(newsArr);
  return newsArr;
}

function renderNewsMarkup(data, amountCards) {
  chunkArray(data, amountCards);
  // console.log('chunkArray', chunkArray(getNews.results, valuePage.amountCards));

  for (let i = 0; i <= chunkNewsArr.length; i += 1) {
    // console.log(chunkNewsArr[i]);
    if (valuePage.curPage === i + 1) {
      // console.log('page', chunkNewsArr[i]);
      createMarkupWithChunkArray(chunkNewsArr[i]);
      break;
    }
  }
  pagination(valuePage);

  handleButtonLeft();
  handleButtonRight();
}

function chunkArray(arrayData, chunkSize) {
  while (arrayData.length) {
    chunkNewsArr.push(arrayData.splice(0, chunkSize));
  }
}

function createMarkupWithChunkArray(array) {
  let markupNews = '';
  const markupWeather = getMarkupWeather({ data: weatherData });
  // console.log(markupWeather);
  // console.log({ data: weatherData });
  const itemWeather = `<li class="weather__card">${markupWeather.markup}</li>`;
  // console.log(itemWeather);

  if (window.innerWidth < 768) {
    for (let i = 0; i < array.length; i += 1) {
      if (i === 0) {
        markupNews += itemWeather;
      } else {
        markupNews += markup(array[i]);
      }
    }
  }
  if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    for (let i = 0; i < array.length; i += 1) {
      if (i === 1) {
        markupNews += itemWeather;
      } else {
        markupNews += markup(array[i]);
      }
    }
  }
  if (window.innerWidth >= 1280) {
    for (let i = 0; i < array.length; i += 1) {
      if (i === 2) {
        markupNews += itemWeather;
      } else {
        markupNews += markup(array[i]);
      }
    }
    if (array.length === 2) {
      markupNews += itemWeather;
    }
  }
  popularNewsGallery.innerHTML = markupNews;
  checkFavCards();
  // console.log(markupNews);
}

export { getPopularProduct };
