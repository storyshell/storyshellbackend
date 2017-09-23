function RequestData(jsonObject){
 
 	  this.postheaders = {
        'Content-Type' : 'application/json',
        'Content-Length' : Buffer.byteLength(jsonObject, 'utf8')
       }
}

RequestData.prototype.getOptions  = function(methodName,urlPath){
	return  optionspost = {
    host : 'localhost',
    port : 8080,
    path : urlPath,
    method : methodName,
    headers : this.postheaders
};

}

module.exports = RequestData;
input: urlPath ,methodName,jsonObject
ouput : object->jsonObject(specific) , optionspost(get/post) , postheaders(almost constant)
