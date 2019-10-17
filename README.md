# vp-angular-test-Angularjs
vp-angular-test

#### to run

##### clone the project
* git clone

##### install necessary package use
* npm install

##### to run the project
* ng serve --o

##### Issue from API Call
* First time it will give error from leaderboard.component.ts line 58, please remove the results from response.results. it will start running. 
 for sume reason it does not read results array from api first time.  After it runs propersly
 * put back .results after response EXP: response.results

##### ERROR in src/app/components/leaderboard/leaderboard.component.ts(58,32): error TS2339: Property 'results'
does not exist on type 'Object'.

##### here is the snapped of the code remove .results and run . once run put back .results to get results data from backend.
```
 getData() {

    return this.service.sendGetRequest().subscribe(response => {

      console.log("users", response);
      this.testData = response.results;
      this.users = this.testData;
      console.log(this.users)
    })
  }

```
##### Above Issue has been fixed - below is the fixed code

```


  getDatatest() {
    this.service.sendGetRequest().toPromise().then(promise => {
      let data: any[] = [];
      data.push(promise);
      data.forEach(element => {

        for (var i = 0; i < element.results.length; i++) {
          this.testData.push(element.results)
          console.log(element.results[i])
        }
      });
    })
  }

<!-- show api call data -->
<li *ngFor="let user of this.testData; let i = index">
      <span> {{ user[i].name.first }} {{ user[i].name.last }}</span>
</li>


```
