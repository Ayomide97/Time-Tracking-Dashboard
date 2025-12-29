fetchData();

async function fetchData() {

  try
  {

    const dashboardTime = document.querySelectorAll('.time');
    const dashboardActivity = document.querySelectorAll('.activity-summary');
    const dashboardTitle = document.querySelectorAll('.activity-title');
    

    const response = await fetch('scripts/data.json');


    if(!response.ok)
    {
      console.log('could not fecth resource');
      throw new Error('Not working Broski');
    } 

    const data = await response.json();
 
    data.forEach((item, index) => {


      if(dashboardTitle[index]&& dashboardActivity[index] && dashboardTime[index])
      {
        dashboardTitle[index].innerHTML = item.title;
        dashboardTime[index].innerHTML = `${item.timeframes.weekly.current}hrs`;
        dashboardActivity[index].innerHTML = `Last Week - ${item.timeframes.weekly.previous}hrs`
       
      }   
      
    
    });

  }
  catch(error)
  {
    console.error(error);
  }

}


const dailyDashboard = document.getElementById('daily');
dailyDashboard.addEventListener("click", () => {

  
  dailyDashboard.classList.add('active');
  weeklyDashboard.classList.remove('active');
  monthlyDashboard.classList.remove('active');

  getData();

  async function getData() {


    try {

      const dashboardTime = document.querySelectorAll('.time');
      const dashboardActivity = document.querySelectorAll('.activity-summary');
      const dashboardTitle = document.querySelectorAll('.activity-title');


      const response = await fetch('scripts/data.json');
      

      if(!response.ok)
      {
        console.log('could not fecth resource');
        throw new Error('Not working Broski');
      } 

      const data = await response.json();
        
          
      data.forEach((item, index) => {

        if(dashboardTitle[index]&& dashboardActivity[index] && dashboardTime[index])
        {
          dashboardTitle[index].innerHTML = item.title;
          dashboardTime[index].innerHTML = `${item.timeframes.daily.current}hrs`;
          dashboardActivity[index].innerHTML = `Yesterday - ${item.timeframes.daily.previous}hrs`
        
        }   
           
      });


    }
    catch (error) {
      console.log(error);
    }

  }

});


const weeklyDashboard = document.getElementById('weekly');
weeklyDashboard.addEventListener("click", ()=>{
  fetchData();
  weeklyDashboard.classList.add('active');
  monthlyDashboard.classList.remove('active');
  dailyDashboard.classList.remove('active');
})


const monthlyDashboard = document.getElementById('monthly');
monthlyDashboard.addEventListener("click", ()=>{

  monthlyDashboard.classList.add('active');
  weeklyDashboard.classList.remove('active');
  dailyDashboard.classList.remove('active');

  getData();

  async function getData() {


    try {

      const dashboardTime = document.querySelectorAll('.time');
      const dashboardActivity = document.querySelectorAll('.activity-summary');
      const dashboardTitle = document.querySelectorAll('.activity-title');


      const response = await fetch('scripts/data.json');
      

      if(!response.ok)
      {
        console.log('could not fecth resource');
        throw new Error('Not working Broski');
      } 

      const data = await response.json();
        
          
      data.forEach((item, index) => {

        if(dashboardTitle[index]&& dashboardActivity[index] && dashboardTime[index])
        {
          dashboardTitle[index].innerHTML = item.title;
          dashboardTime[index].innerHTML = `${item.timeframes.monthly.current}hrs`;
          dashboardActivity[index].innerHTML = `Last Month - ${item.timeframes.monthly.previous}hrs`
        
        }   
           
      });


    }
    catch (error) {
      console.log(error);
    }

  }

})