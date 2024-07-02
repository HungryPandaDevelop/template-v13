const ajaxSearch = (searchVal) => {

  $.ajax({
    type: "GET",
    url: "https://base.panda-dev.ru/wp-json/search/all",
    data: { 'search': searchVal },
    success: generateContent,
    error: handleError
  });
}



const handleError = (error) => {
  console.error('Error occurred during AJAX request:', error);
  // Add error handling logic here, such as displaying an error message to the user
};


const generateContent = (result) => {
  mainBox.empty();
  const { news, blog, product, services } = result;
  appendContent(news, 'news', 'Новости');
  appendContent(blog, 'blog', 'Блог');
  appendContent(product, 'product', 'Продукты');
  appendContent(services, 'services', 'Услуги');
  mainBox.addClass('active');
  if (isEmptyRes(result)) {
    mainBox.append('<div class="empty-list">Список пуст</div>');
  }
}

const appendContent = (items, link, title) => {
  if (items.length > 0) {
    const html = `
      <div class="search-list-line">
        <h3><a href="${link}">${title}</a></h3>
        <ul class="ln">
          ${items.map(item => `<li><a href="${item.link}">${item.title}</a></li>`).join('')}
        </ul>
      </div>`;
    mainBox.append(html);
  }
}

const isEmptyRes = (result) => {
  return Object.values(result).every(items => items.length === 0);
}



let mainBox = $('.search-list');

const spinner = $('.preloader-container');

let mainSearch = $('.search');


let searchTimeId;
let inputAjax = $('.search-input-ajax');

inputAjax.on('keyup', function () {

  let searchVal = $(this).val();

  if (searchVal.length > 0) {

    spinner.addClass('active');

    clearTimeout(searchTimeId);
    searchTimeId = setTimeout(() => {

      ajaxSearch(searchVal);

      spinner.removeClass('active');
    }, 2000);
  } else {
    console.log("in empty")

    mainBox.removeClass('active');
    mainBox.empty();
  }
});

// Додавить крестик в каждой поиске
$('.search-input').on('keyup', function () {
  let $search = $(this).closest('.search');
  let searchVal = $(this).val();

  if (searchVal.length > 0) {
    $search.addClass('search-on');

  } else {
    // mainBox.empty();
    $search.removeClass('search-on');

  };
});


$('.search-input').on('blur', function () {

  let $search = $(this).closest('.search');
  $search.removeClass('search-on');
  mainBox.removeClass('active');
})

// Додавить крестик в каждой поиске

mainSearch.on('click', '.close-btn', function () {
  let $search = $(this).closest('.search');
  $search.removeClass('search-on');
  mainBox.removeClass('active');
  inputAjax.val('123');
  setTimeout(function () {
    mainBox.empty();
  }, 1000);
});