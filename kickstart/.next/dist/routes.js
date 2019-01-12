'use strict';

//L179
var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index') //L194
.add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxJQUFJQSxTQUFTQyx3QkFBYjs7QUFFQUQsT0FBT0UsR0FBUCxDQUFXLGdCQUFYLEVBQTZCLGdCQUE3QixFQUErQ0EsR0FBL0MsQ0FBbUQscUJBQW5ELEVBQTBFLGlCQUExRSxFQUE2RkEsR0FBN0YsQ0FBaUcsOEJBQWpHLEVBQWlJLDJCQUFqSSxFQUE4SjtBQUE5SixDQUNDQSxHQURELENBQ0ssa0NBREwsRUFDeUMseUJBRHpDOztBQUdBQyxPQUFPQyxPQUFQLEdBQWlCSixNQUFqQiIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiLy9MMTc5XG52YXIgcm91dGVzID0gcmVxdWlyZSgnbmV4dC1yb3V0ZXMnKSgpO1xuXG5yb3V0ZXMuYWRkKCcvY2FtcGFpZ25zL25ldycsICcvY2FtcGFpZ25zL25ldycpLmFkZCgnL2NhbXBhaWducy86YWRkcmVzcycsICcvY2FtcGFpZ25zL3Nob3cnKS5hZGQoJy9jYW1wYWlnbnMvOmFkZHJlc3MvcmVxdWVzdHMnLCAnL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleCcpIC8vTDE5NFxuLmFkZCgnL2NhbXBhaWducy86YWRkcmVzcy9yZXF1ZXN0cy9uZXcnLCAnL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxJQUFJQSxTQUFTQyx3QkFBYjs7QUFFQUQsT0FBT0UsR0FBUCxDQUFXLGdCQUFYLEVBQTZCLGdCQUE3QixFQUErQ0EsR0FBL0MsQ0FBbUQscUJBQW5ELEVBQTBFLGlCQUExRSxFQUE2RkEsR0FBN0YsQ0FBaUcsOEJBQWpHLEVBQWlJLDJCQUFqSSxFQUE4SjtBQUE5SixDQUNDQSxHQURELENBQ0ssa0NBREwsRUFDeUMseUJBRHpDOztBQUdBQyxPQUFPQyxPQUFQLEdBQWlCSixNQUFqQiIsImZpbGUiOiJ1bmtub3duIn0=