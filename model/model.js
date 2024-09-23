const homePage = `      <div class="home">
    <div class="under-nav"><p>Simple Recipes for Everyday Life</p></div>
        <div class="boxes">
          <div class="box1">
            <div class="dinner"><p>DINNER</p></div>
          </div>
          <div class="box2">
            <div class="bowls"><p>BOWLS</p></div>
          </div>
          <div class="box3">
            <div class="fall"><p>FALL</p></div>
          </div>
           <div class="box4">
            <div class="sos"><p>SOS SERIES</p></div>
          </div>
      </div>
    </div>`;
const aboutPage = `       <div class="about">
        <h1>About Me</h1>
        <div class="profile">
            <div class="chefPhoto"></div>
            <div class="profile-text">
                <h2>Welcome to My Kitchen!</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis facere eveniet a ipsum ratione nesciunt optio, cupiditate sequi, accusantium quasi reprehenderit? Tempore modi vero maiores quos ad officia non voluptate magni voluptas placeat quia voluptatibus dicta laboriosam molestiae ipsum, alias totam, vel similique nulla. Magni, sunt. Consequatur esse vero nobis, nisi velit repellat voluptatum ea, accusantium repudiandae porro ex. Praesentium, labore? Vitae illo corrupti perferendis sunt, maxime tempora ea architecto earum repellat ipsa, optio dolorem quaerat distinctio repudiandae veritatis expedita eos fugit animi. Rerum, a quo! Id, perspiciatis voluptate! Distinctio nemo magni beatae doloribus veniam veritatis. Veritatis quia fuga possimus enim officia cumque atque eligendi neque consequuntur dicta tenetur magni autem consectetur vel aperiam sit omnis, numquam qui minus. Exercitationem rerum cumque inventore porro, ipsum autem illo soluta! Facere, ut. Suscipit, ullam! Harum ipsum optio labore animi asperiores ratione ut, ducimus quod nisi reprehenderit commodi tempore culpa sed beatae fugit cum enim aperiam facere dicta cupiditate natus iste quaerat.</p>
            </div>
          </div>
        <div class="mission">
            <h2>My Mission</h2>
            <p>To inspire home cooks to create delicious meals with fresh ingredients.</p>
        </div>
        <div class="values">
            <h2>My Values</h2>
            <ul>
                <li>Quality Ingredients</li>
                <li>Community Engagement</li>
                <li>Sustainability</li>
            </ul>
        </div>
      </div>`;

const recipesPage = `       <div class="recipes">
        <h1>Recipe Collection</h1>
         <div class="grid-container"></div>
            <div class="recipe-card">
                <img src="images/recipe1.jpg" alt="Recipe 1">
                <h2>Chicken Tinga Tacos</h2>
                <p>Short description of the recipe.</p>
            </div>
            <div class="recipe-card">
                <img src="images/recipe2.jpg" alt="Recipe 2">
                <h2>Detox Crockpot Lentil Soup</h2>
                <p>Short description of the recipe.</p>
            </div>
            <div class="recipe-card">
                <img src="images/recipe3.jpg" alt="Recipe 3">
                <h2>Sunday Chili</h2>
                <p>Short description of the recipe.</p>
            </div>
            <div class="recipe-card">
                <img src="images/recipe4.jpg" alt="Recipe 4">
                <h2>Baked Chicken Meatballs</h2>
                <p>Short description of the recipe.</p>
            </div>
        </div>`;

export function changePage(pageName) {
  let pageVarName = pageName + "Page";
  console.log(pageVarName);
  $("#app").html(eval(pageVarName));
}
