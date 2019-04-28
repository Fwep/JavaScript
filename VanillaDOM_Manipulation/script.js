document.addEventListener('DOMContentLoaded', () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === 'visited') {
      li.className = '';
    } else {
      li.className = 'visited';
    }
  };

  document.querySelectorAll('#restaurants li').forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items
  let placeForm = document.querySelectorAll('.list-container form')[0];

  const addPlace = (e) => {
    e.preventDefault();
    let value = document.querySelectorAll('.list-container form')[0][0].value;
    let ul = document.getElementById('sf-places');
    let li = document.createElement('li');
    li.innerHTML = value;
    ul.appendChild(li);
    placeForm.reset();
  }

  placeForm.addEventListener('submit', addPlace);


  // adding new photos
  var toggleButton = document.getElementsByClassName('photo-show-button')[0];
  var photoForm = document.querySelector('div.photo-form-container');

  const togglePhotoForm = (e) => {
    let photoForm = document.querySelector('div.photo-form-container');
    photoForm.classList.contains('hidden') ? photoForm.classList.remove('hidden') : photoForm.classList.add('hidden');
  }

  const addPhoto = (e) => {
    e.preventDefault();
    let form = e.target;
    
    let url = document.querySelector('.photo-url-input').value;
    // let img = document.createElement('img');
    // img.setAttribute('src', url);

    let ul = document.querySelector('ul.dog-photos');
    let li = document.createElement('li');
    li.innerHTML = `<img src=${url}>`
    ul.appendChild(li);

    form.reset();
  } 

  toggleButton.addEventListener('click', togglePhotoForm);
  photoForm.addEventListener('submit', addPhoto);
});
