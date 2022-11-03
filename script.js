let arr = [
  { Name: "CrawligWeb", Time: 5, Divisions: 5 },
  // { Name: "Scraping Content", Time: 10, Divisions: 5 },
  // { Name: "Semantic Modeling", Time: 5, Divisions: 4 },
  // { Name: "NLP", Time: 8, Divisions: 5 },
  // { Name: "Competitive Analysis", Time: 5, Divisions: 4 },
];
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 50;

  

function run() {
  console.log(arr);
  let obj = arr[0]
  let speed = (obj.Time/obj.Divisions)
  progressEndValue = 100 / obj.Divisions;
    console.log(progressValue);
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
            #4d5bf9 ${progressValue * 3.6}deg,
            #cadcff ${progressValue * 3.6}deg
        )`;
    // if (progressValue == progressEndValue) {
    //   progressEndValue = 100 / obj.Divisions + progressEndValue;
    // }
    if(progressValue < 100){
      setTimeout(()=>{
        progressValue = progressValue + 20;
      
            run(arr[0]);
          },2000)
    }

}
