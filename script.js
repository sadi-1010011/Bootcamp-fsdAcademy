// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// content
var dynamicRecipyDetails = document.getElementById("dynamicRecipyDetails");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
  dynamicRecipyDetails.innerHTML = ''; // empty div after close
}

// outfocus of modal is hoverd -> close modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  dynamicRecipyDetails.innerHTML = ''; // empty items on close

  }
}



// ----------------------

// FETCH API DYNAMIC PRODUCTS

// Fetching data from a dummy JSON 
fetch('https://dummyjson.com/products') // Example dummy API
  .then(response =>  response.json())
  .then(products => {
    console.log('---------- dynamic products ----------')

    const productList = document.getElementById('productslist');
    productList.classList.add('row')

    // loop dynamically through each product
    products.products.forEach(product => {
        // if (product >= 14 ) return
        
      // console.log(product)
      // Create a container div for each product
      const productDiv = document.createElement('div');
      productDiv.classList.add('product-card');

      // Add image element
      const img = document.createElement('img');
      img.classList.add('product-image')
      img.src = product.thumbnail;
      img.alt = product.title;

      // Add product title
      const title = document.createElement('h5');
      title.textContent = product.title;

      // Add product description
      const description = document.createElement('p');
      description.classList.add('product-description')
      description.textContent = product.description;

      // Add product price
      const price = document.createElement('p');
      price.classList.add('product-price')
      price.textContent = `Price: $${product.price}`;

      // Append the elements to the productDiv
      productDiv.appendChild(img);
      productDiv.appendChild(title);
      productDiv.appendChild(description);
      productDiv.appendChild(price);

      // Append the productDiv to the productList in the HTML
      const productcontainer = document.createElement('div')
      productcontainer.classList.add('col-lg-3');
      productcontainer.classList.add('col-md-6');
      productcontainer.classList.add('col-sm-12');

      productcontainer.appendChild(productDiv);
      productList.appendChild(productcontainer)
    });
  })
  .catch(error => console.error('Error fetching products:', error));




// -----------------------

// FETCH API DYNAMIC RECIPES

// Step 1: Fetching data from a dummy JSON API (you can replace this with your own API URL)
fetch('https://dummyjson.com/recipes') // Example dummy API
  .then(response =>  response.json())
  .then(products => {
    console.log('----------dynamic fetch recipes----------')

    const productList = document.getElementById('recipieslist');
    productList.classList.add('row')

    products.recipes.forEach(product => {
        // if (product >= 14 ) return
        
      // Create a container div for each product
      const productDiv = document.createElement('div');
      productDiv.classList.add('product-card');

      // Add image element
      const img = document.createElement('img');
      img.classList.add('product-image')
      img.src = product.image;
      img.alt = product.title;

      // Add product title
      const title = document.createElement('h5');
      title.classList.add('product-title')
      title.textContent = product.name;

      // Add rating
      const rating = document.createElement('span');
      rating.classList.add('product-rating')
      rating.textContent = `${product.rating}`;

      // Add difficulty
      const difficulty = document.createElement('span');
      difficulty.classList.add('product-difficulty')
      difficulty.textContent = `${product.difficulty}`;

      // Add cooktime
      const cooktime = document.createElement('span');
      cooktime.classList.add('product-cooktime')
      cooktime.textContent = `${product.cookTimeMinutes}`;

      // mode info button
      const morebtn = document.createElement('button');
      morebtn.classList.add('buy-btn')
      morebtn.textContent = `more`;

      // ONCLICK FUNCTION TO HANDLE POPUP MODALL
      morebtn.addEventListener('click', function(){ handleMoreInfo(product.id)});

      // Append the elements to the productDiv
      productDiv.appendChild(img);
      productDiv.appendChild(title);
      productDiv.appendChild(rating);
      productDiv.appendChild(difficulty);
      productDiv.appendChild(cooktime);
      productDiv.appendChild(morebtn);

      // Append the productDiv to the productList in the HTML
      const productcontainer = document.createElement('div')
      productcontainer.classList.add('col-lg-3');
      productcontainer.classList.add('col-md-6');
      productcontainer.classList.add('col-sm-12');

      productcontainer.appendChild(productDiv);
      productList.appendChild(productcontainer)
    });
  })
  .catch(error => console.error('Error fetching products:', error));

function handleMoreInfo(id) {
  modal.style.display = "block";
  fetch(`https://dummyjson.com/recipes/${id}`) // Example dummy API
  .then(response =>  response.json())
  .then(product => {

    // DYNAMIC LINK ---->>

    console.log(product)
    const rcp = document.getElementById('dynamicRecipyDetails')


    // Add image element
    const img = document.createElement('img');
    img.classList.add('rcp-image')
    img.src = product.image;
    img.alt = product.title;

    
    // Add product title
    const title = document.createElement('h5');
    title.classList.add('rcp-title')
    title.textContent = product.name;

    // Add product cuisine
    const cuisine = document.createElement('h5');
    cuisine.classList.add('product-cuisine')
    cuisine.textContent = `Cuisine: ${product.cuisine}`;

    // Add difficulty
    const difficulty = document.createElement('span');
    difficulty.classList.add('product-difficulty')
    difficulty.textContent = `${product.difficulty}`;

    // Add cooktime
    const cooktime = document.createElement('span');
    cooktime.classList.add('product-cooktime')
    cooktime.textContent = `${product.cookTimeMinutes}`;

    // Add preptime
    const preptime = document.createElement('span');
    preptime.classList.add('product-preptime')
    preptime.textContent = `${product.prepTimeMinutes}`;

    // Add calories
    const calories = document.createElement('span');
    calories.classList.add('product-calories')
    calories.textContent = product.caloriesPerServing;

    // Add rating
    const rating = document.createElement('span');
    rating.classList.add('product-rating')
    rating.textContent = `${product.rating}`;
    
    // container FOR RECIPE INFO 
    const rcpinfo = document.createElement('div');
    rcpinfo.classList.add('rcpinfo-container')

    // RCP INSTRUCTIONS
    // container FOR RECIPE INstrunctions 
    const rcpinstructions = document.createElement('div');
    rcpinstructions.classList.add('rcpinstructions-container')

    // instructions title create an append to container
    const stepstitle = document.createElement('h4');
    stepstitle.textContent = "Instructions step by step";
    stepstitle.style.marginBottom = '1.22rem';
    stepstitle.style.fontWeight = 'bold'
    rcpinstructions.appendChild(stepstitle)

    // loopps through ech stepss
    product.instructions.forEach((step, i) => {

        var steps = document.createElement('h5');
        steps.classList.add('rcp-steps')
        steps.textContent = `step ${i+1}: ${step}`; // i+1 bcz arry indx starts frm 0

        // append to instructions container
        rcpinstructions.appendChild(steps)

    })

    
    // RCP INGREDIENTS
    // container FOR RECIPE INgredients
    const rcpingredients = document.createElement('div');
    rcpingredients.classList.add('rcpingredients-container')

    // instructions title create an append to container
    const itemstitle = document.createElement('h4');
    itemstitle.textContent = "Ingredients needed";
    itemstitle.style.margin = '1.22rem 0';
    itemstitle.style.fontWeight = 'bold'
    rcpingredients.appendChild(itemstitle)

    // loopps through ech ingredients
    product.ingredients.forEach((item, i) => {

      console.log(item)
      var items = document.createElement('h5');
      items.classList.add('rcp-steps')
      items.textContent = item; // i+1 bcz arry indx starts frm 0

      // append to instructions container
      rcpingredients.appendChild(items)

  })


    rcpinfo.append(title)
    rcpinfo.append(cuisine)
    rcpinfo.append(difficulty)
    rcpinfo.append(cooktime)
    rcpinfo.append(preptime)
    rcpinfo.append(calories)
    rcpinfo.append(rating)


    // append to dom
    rcp.append(img)
    rcp.append(rcpinfo)
    rcp.append(rcpinstructions)
    rcp.append(rcpingredients)


  })
}