function show(ele) {
  ele.classList.remove('hide');
}

function hide(ele) {
  ele.classList.add('hide');
}

function hideAll() {
  const hiddenMenus = document.querySelectorAll('.hidden-menu');
  hiddenMenus.forEach((menu) => hide(menu));
}

function bindHoverEvent(option, hiddenNav) {
  let hoverMenu = false;
  let timeout;

  const showMenu = () => {
    hideAll();
    show(hiddenNav);
  };

  const hideMenu = () => {
    if (hoverMenu) {
      return;
    }
    hide(hiddenNav);
  };

  // debounce action added to allow hovering over hidden menu without it hiding prematurely
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, 50);
  };

  option.addEventListener('mouseover', () => showMenu());
  option.addEventListener('mouseleave', () => debounce(hideMenu));

  hiddenNav.addEventListener('mouseover', () => {
    hoverMenu = true;
  });

  hiddenNav.addEventListener('mouseleave', () => {
    hoverMenu = false;
    hide(hiddenNav);
  });
}

function retrieveProductsOptionMenu() {
  const productsOption = document.querySelector('#products-option');
  const productsNav = document.querySelector('#products-nav');
  return { productsOption, productsNav };
}

function retrieveServicesOptionMenu() {
  const servicesOption = document.querySelector('#services-option');
  const servicesNav = document.querySelector('#services-nav');
  return { servicesOption, servicesNav };
}

function dropdown() {
  const { productsOption, productsNav } = retrieveProductsOptionMenu();
  const { servicesOption, servicesNav } = retrieveServicesOptionMenu();

  bindHoverEvent(productsOption, productsNav);
  bindHoverEvent(servicesOption, servicesNav);
}

export default dropdown;
