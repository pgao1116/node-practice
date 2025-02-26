BUG #1: '/auth/register' and 'User.register()' was not storing 'admin' value

BUG #2: Added await to 'let user = User.authenticate(username, password)' => 'let user = await User.authenticate(username, password)'

BUG #3: User.getAll() should only return '{username, first_name, last_name}'

BUG #4: Added await to 'users/delete' route

BUG #$: Deleted Second module.exports = app;