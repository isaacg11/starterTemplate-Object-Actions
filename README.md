# starterTemplate-Object-Actions
a Javascript starter template for creating object actions using the Stamplay SDK

**NOTE: Users must be logged in to use the rate/vote/comment function!**

**CLONING: When cloning this repo, you must initialize your app first to make it work.**

 1) **Initialize the front-end of your app with Stamplay**
 <br>
- Go to your command line and enter **stamplay init**
- When prompted, enter your **appID** & **API Key**

2) **Initialize the SDK library in your app**
<br>
- In your index.html file, enter the SDK cdn script (or install with bower if you prefer)
```
<script src="//drrjhlchpvi7e.cloudfront.net/libs/stamplay-js-sdk/1.3.1/stamplay.min.js"></script>

```
```
$ bower install stamplay-js-sdk
```
- In your Javascript file, enter the initialization script at the top of the file
```
Stamplay.init('yourAppId');
```
3) **Establish object to be commented on**
- Go to your Stamplay editor and go to the **Data** section. Then go to **Objects**
- Establish which object in the collection your going to comment on by getting it's object **Id**.

4) **comment( )**
```
function createObjectComment(){
	var newComment = document.getElementById('comment').value;
	var objectInstance = new Stamplay.Cobject('store').Model;
	objectInstance.fetch('5654afc6b3039e5f75c0d0e9').then(function(){
    	return objectInstance.comment(newComment).then(function(){
    		alert('Comment created!');
    	});
    });
}
```
5) **Establish object to be rated**
- Go to your Stamplay editor and go to the **Data** section. Then go to **Objects**
- Establish which object in the collection your going to rate by getting it's object **Id**.

6) **rate( )**
```
function rateFive(){
	var objectInstance = new Stamplay.Cobject('store').Model;
	objectInstance.fetch('56549d53b3039e5f75c0d0dd').then(function(){
    	return objectInstance.rate(5).then(function(){
    		alert('rated 5!');
    	});
    });
}
```
7) **Establish object to be voted on**
- Go to your Stamplay editor and go to the **Data** section. Then go to **Objects**
- Establish which object in the collection your going to upvote/downvote by getting it's object **Id**.

8) **upvote( )**
```
function upvote(){
	var objectInstance = new Stamplay.Cobject('store').Model;
	objectInstance.fetch('5654a452b3039e5f75c0d0e4').then(function(){
    	return objectInstance.upVote(1).then(function(){
    		alert('Upvoted by 1!');
    	});
    });
}
```
9) **downvote( )**
```
function downvote(){
	var objectInstance = new Stamplay.Cobject('store').Model;
	objectInstance.fetch('5654a452b3039e5f75c0d0e4').then(function(){
    	return objectInstance.downVote(1).then(function(){
    		alert('Downvoted by 1!');
    	});
    });
}
```

6) **Run app**
- To run your app, you'll need to install the Stamplay Command Line Tool. If you have already installed it, ignore this step. Otherwise, enter this command in your command line:
```
$ npm install -g stamplay-cli
```
- If your app is in development, you can run it on your local server by entering **stamplay start** in your command line.
- If your app is in production, you can deploy it live by entering **stamplay deploy** in your command line.
![alt tag](public/images/object-actions-micro-repo.png)
