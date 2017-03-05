/*  
 *  Author: Colum Bennett <colum.bennett@feedhenry.com>
 *  Re-useable Angular service module using FeedHenry Hybrid API "$fh.cloud" call.
 *  See developers docs, http://docs.feedhenry.com/
 */
angular.module('fhcloud', ['ngResource']).service("fhcloud", function($q) {

  return function(cloudEndpoint, data) {
    
    var defer = $q.defer();

 
   /* var url='http://fuseservice-forum.cloudapps.forum.rhtechofficelatam.com/rest/book';
    request.post({
        url:url,
        json:data
      },function(error, response, body){
        if(error) {
            console.log("FIS ERROR: " + error);
        } else {
            console.log(response.statusCode, body);
            res.json(body);
    }
    });*/
    $fh.cloud({path:cloudEndpoint,data:data}, defer.resolve, defer.reject);

    return defer.promise;
  };
});