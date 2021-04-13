// select html input fields
let fieldRow = document.getElementById('row');
let fieldColumn = document.getElementById('column');


// generate random hex color
const generateColor = () => {
  let hexNumber = Math.floor(100000 + Math.random() * (999999 + 1 - 100000));
  return `#${hexNumber}`;
}

// validate data
const validate = (arg) => {
  if(isNaN(arg.value)) {
    alert(`The ${arg.id} field is entered incorrectly`)
    return true;
  }

  return false;
}

// get data
const getValue = (row, col) => {

  if(validate(row) || validate(col)) { 
    return [];
  }

  return new Array(+row.value, +col.value);
}

// create table
const createTable = (rows, cols) => {
  // get data
  const [rowAmount, colAmount] = getValue(rows, cols);

  // create elements with the given tag
  let table = document.createElement('table');
  let container = document.createElement('div');

  // add attribute class="container"
  container.setAttribute('class', 'container');

  container.addEventListener( "click" , (e) => setBackgroundColor(e));

  // check if a tag with the container class already exists, if yes then delete
  if(document.body.getElementsByClassName('container').length !== 0) {
    document.body.lastChild.remove();
  }

  // add container 
  document.body.append(container);
  container.appendChild(table);
  

  // fill in the table with the specified conditions
  for(let i = 0; i < rowAmount; i += 1) {
    let row = document.createElement('tr');
    for(let j = 0; j < colAmount; j += 1) {
      let col = document.createElement('td');
      row.appendChild(col);
    }
  // add to table rows, cols
    table.appendChild(row);
  } 
}

// set the background color of the clicked cell
const setBackgroundColor = (e) => {
  let color = generateColor();
  if(e.srcElement.tagName !== "TD") return; 
  e.target.style.backgroundColor ? e.target.style.backgroundColor = "" : e.target.style.backgroundColor = generateColor();
}

//numbering of each cell
const fillCells = () => {
  let container = document.body.getElementsByClassName('container');
  let table = container[0].firstChild;
  let tr = table.getElementsByTagName("tr");
  let numRow = 1;
  let numCol = 1;
  for(let i = 0; i < tr.length; i += 1) {
    let td = tr[i].getElementsByTagName("td");
    for(let j = 0; j < td.length; j += 1) {
      td[j].innerHTML = `${numRow}-${numCol}`;
      numCol += 1;
    }

    numRow += 1;
    numCol = 1;
  }
}


btn.addEventListener( "click" , () => createTable(fieldRow, fieldColumn));
btn.addEventListener( "click" , () => fillCells(fieldRow, fieldColumn));