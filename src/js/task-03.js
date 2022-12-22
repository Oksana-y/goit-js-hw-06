const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");

images.forEach((image) => {const markup = `<li><img src="${image.url}" alt="${image.alt}" width ="300px", height ="200px" ></li>`;

list.insertAdjacentHTML("afterbegin", markup);

});

const galleryList = document.querySelector(".gallery");
galleryList.style.display = "flex";
galleryList.style.justifyContent = "center";
galleryList.style.flexDirection = "row";
galleryList.style.gap = "30px";




  

  

  
