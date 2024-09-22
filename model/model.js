const homePage = `      <div class="home">
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
const aboutPage = ` `;

export function changePage(pageName) {
  let pageVarName = pageName + "Page";
  console.log(pageVarName);
  $("#app").html(eval(pageVarName));
}
