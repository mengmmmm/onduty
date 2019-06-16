

exports.users = function (ctx, next){
  ctx.body = 'users';
};

exports.userDetail = function(ctx,next){
  ctx.body = ctx.params.id;
}