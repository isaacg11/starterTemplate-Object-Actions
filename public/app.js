Stamplay.init('sdkobjectactions');

//RATING
function rateFive(){
	var objectInstance = new Stamplay.Cobject('store').Model;
	objectInstance.fetch('5654b73ab3039e5f75c0d0eb').then(function(){
    	return objectInstance.rate(5).then(function(){
    		alert('rated 5!');
    	});
    });
}

function rateFour(){
	var objectInstance = new Stamplay.Cobject('store').Model;
	objectInstance.fetch('5654b73ab3039e5f75c0d0eb').then(function(){
    	return objectInstance.rate(4).then(function(){
    		alert('rated 4!');
    	});
    });
}

function rateThree(){
	var objectInstance = new Stamplay.Cobject('store').Model;
	objectInstance.fetch('5654b73ab3039e5f75c0d0eb').then(function(){
    	return objectInstance.rate(3).then(function(){
    		alert('rated 3!');
    	});
    });
}

function rateTwo(){
	var objectInstance = new Stamplay.Cobject('store').Model;
	objectInstance.fetch('5654b73ab3039e5f75c0d0eb').then(function(){
    	return objectInstance.rate(2).then(function(){
    		alert('rated 2!');
    	});
    });
}

function rateOne(){
	var objectInstance = new Stamplay.Cobject('store').Model;
	objectInstance.fetch('5654b73ab3039e5f75c0d0eb').then(function(){
    	return objectInstance.rate(1).then(function(){
    		alert('rated 1!');
    	});
    });
}

//VOTING
function upvote(){
    var objectInstance = new Stamplay.Cobject('store').Model;
    objectInstance.fetch('5654b73ab3039e5f75c0d0eb').then(function(){
        return objectInstance.upVote(1).then(function(){
            alert('Upvoted by 1!');
        });
    });
}

function downvote(){
    var objectInstance = new Stamplay.Cobject('store').Model;
    objectInstance.fetch('5654b73ab3039e5f75c0d0eb').then(function(){
        return objectInstance.downVote(1).then(function(){
            alert('Downvoted by 1!');
        });
    });
}

//COMMENTS
function createObjectComment(){
    var newComment = document.getElementById('commentInput').value;
    var objectInstance = new Stamplay.Cobject('store').Model;
    objectInstance.fetch('5654b73ab3039e5f75c0d0eb').then(function(){
        return objectInstance.comment(newComment).then(function(){
            alert('Comment created!');
        });
    });
}
