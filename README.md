Partials and Views

to setup need to require the PATH library
const path = require('path')

also need to set up the views to be able to share the same path across pages

const VIEWS_PATH = path.join(__dirname, '/views') 

this sets the current working directory to the .join method to combine paths
we then include the arguement for the directory and the folder located

app.engine('mustache' , mustacheEpress(VIEWS_PATH + '/partials', 'mustache') the view parth is the argument plus the folder name and the template type

then finally we make sure the view set is using viewpath as the second argument

app.set('views', VIEW_PATH)
app.get('view engine', 'mustache')
 
call with  {{ > name of partial}}

use partials for reusable components in web browsers like menus

Static Files

any file that is not changing during the execution of the program.
media files, css, javascript etc.

register your static resources with
app.use(express.static(foldername) this means anything can be accessed from the root level
