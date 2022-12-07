const main = async () => {
    try {
      /**
       * We need to fetch all the inputs that were provided to our action
       * and store them in variables for us to use.
       **/
          const owner = tl.getInput('OrganizationName', true);
          const repositoryname = tl.getInput('RepositoryName', true);
          
          const urlpath = 'http://configscannerapi.dwpractice.com/api/RepositoryScanner/RepoScan';
                  //console.log(urlpath);
                  const repositoryScanner = {
                      clientName: owner,//'bgak1810',
                      projectPath:repositoryname,//'MyFirstAzureProject',
                      technology: 'test',
                      uname: 'test',
                      pwd_personaltoken: 'test'
                  };
                  console.log(repositoryScanner);
                  const data=JSON.stringify(repositoryScanner);
                  console.log(data);
                  
                  
                  try{
                      const Axios = require('axios');
                      let axiosConfig = {
                          headers: {
                              'Content-Type': 'application/json;charset=UTF-8',
                              "Access-Control-Allow-Origin": "*",
                          }
                        };
  
                      Axios.post(urlpath,data,axiosConfig).then(res=>{
                          console.log(JSON.stringify(res.data))
                          }).catch(err=>{
                              console.log(err)
                      });
                  }
                  catch(err){
                          console.log('error here',err.message);
                  }
                  
        } catch (error) {
      core.setFailed(error.message);
    }
  }
  
  // Call the main function to run the action
  main();