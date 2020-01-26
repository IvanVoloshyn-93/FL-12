const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

(function displayTree(data, node) {
  const newElement = document.createElement('ul');

  for (let item of data) {
      const newChild = document.createElement('li');

      const text = document.createElement('div');
      const image = document.createElement('i');
      image.classList.add('material-icons');
      const span = document.createElement('span');
      text.appendChild(image);
      text.appendChild(span);
      span.innerHTML = item.title;

      newChild.appendChild(text);
      newElement.appendChild(newChild);
      if (item.folder) {
          text.classList.toggle('folder');
          image.innerText = 'folder';
          text.addEventListener('click', function() {
              image.innerText === 'folder' ? image.innerText = 'folder_open' : image.innerText = 'folder';
              newChild.querySelector('.closed').classList.toggle('open');
          });
          if (item.children) {
            displayTree(item.children, newChild);
          } else {
              let empty = document.createElement('div');
              empty.classList.add('empty', 'closed');
              empty.innerText = 'Folder is empty';
              newChild.appendChild(empty);
          }
      } else {
          text.classList.toggle('file');
          image.innerText = 'insert_drive_file';
          image.classList.add('file_image');
      }
  }
  node.appendChild(newElement);
  if (newElement.parentNode !== rootNode) {
      newElement.classList.toggle('closed');
  }
})(structure, rootNode)