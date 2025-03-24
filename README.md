# how do i get it working locally?

commands prefaced with `#` are comments

commands prefaced with `$` are commands to run in your terminal

## needed installs

**system wide requirements**

- first [clone this repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
- [download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [download python3](https://www.python.org/downloads/)

### frontend

to serve the front end:
```
# make sure you are in the 'client' directory
$ cd client

# start a http server, no installs needed!
$ python3 -m http.server
```

### backend 

follow this short set of instructions to set up your development environment:
```
# make sure you are in the 'server' directory
$ cd server

# create a 'virtual environment' for python packages
# why?
# its really useful to use existing libraries / frameworks from the web
# however, we want to isolate them per project,
# this makes it easy to see what dependencies we are using

# NOTE only need to make this virtual environment ONCE!
$ python3 -m venv venv

# then we have to 'activate' the environment or just tell our interpreter to use it
# NOTE: you have to do this everytime in your terminal before you start developing
# otherwise, your interpreter will say the packages are missing etc
$ source venv/bin/activate

# install the packages, specified in the 'requirements.txt' file
$ pip3 install -r requirements.txt
```
to then start the server run the following:

```$ python3 main.py```

# how does the frontend 'talk' to the backend?

they can communicate via "http requests", over the internet.
[there is a well defined standard](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages) for these messages.

in short, on the backend we set up urls that correspond to certain functions.
from the frontend, we send a request to that url, and provide any information (parameters) that we need.
then the backend returns the response.

its similar to function calling, except it takes a whole lot longer, and can fail if you arent connected to wifi.

## what is the 'await' and 'async' keyword i keep seeing in the frontend?

within javascript we have ['asynchronous'](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS) code. basically any code that relies on system IO (reading a file, sending internet messages, etc) will take some time.
what `await` means is that this function will take some time to complete, and our browser (which is running the javascript code) should check in periodically to see if its done.
the `async` keyword is needed in a function declaration to use the `await` keyword within the body.

# how do i contribute code? what is the process?

it is important to try and contribute via the process of submitting a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

why?

when we commit code, git manages these commits and can help us track versions, and merge changes. however, when we have conflicting changes and github doesnt know what we intended to do, we have to manually resolve it, which can be complicated.
also, by having a pull request, and subsequently a code review, we make sure our team is on the same page about what changes we are making.

how can i make a PR (pull request)? let me show you how through the terminal. (feel free to use a GUI, or any integrations in your editor instead)
```
# start by making a new branch for your changes
$ git checkout -b MY_BRANCH_NAME_HERE

# now make all the changes you want
...

# now its time to 'commit' them
# first lets check what we have changed:
$ git status
# you should now see all the files you have changed.

# if this all looks good you can either manually add each one:
$ git add file1 file2 ...

# or all of them in your current directory via this shortcut
$ git add .

# now we need to make our commit and name it
$ git commit -m MY_COMMIT_TITLE_HERE

# almost done! now we push our commit to github
$ git push

# from here, we can go onto the github repository, and find the button to 'create new pull request'
# try and get at least 1 person to approve your changes before you commit them
# if there are any 'merge conflicts' here, ping me on discord and i can help walk you through it
# im hoping we dont run into that...
```

## further reading

- [fastapi tutorial](https://fastapi.tiangolo.com/tutorial/#run-the-code)
- [intro to html](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
- [intro to css](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
- [game to learn git](https://learngitbranching.js.org)
- [how to use the terminal](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)
