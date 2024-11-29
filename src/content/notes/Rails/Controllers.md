---
status: draft
modified: 2024-11-29T16:57:48+01:00
created: 2024-10-09
---

The controller is smart enough to know who to ask for [[information]] (to the [[Model|models]]) and who to pass it to display it correctly (to the [[Views|views]]), without doing the heavy lifting in any case.

After an HTTP request is received, it goes through the [[02 - Areas/Rails/Routing|router]], who sends it to the appropriate controller and action. Then, all the variables created in that instance are passed to the view and sent back to the browser.

A simple example of an `index` action of a controller:

```ruby
class PostsController < ApplicationController
  def index
    @posts = Post.all
  end
end
```

This will get the `@posts` instance variable and pass it to the view `app/views/posts/index.html.erb`.


## Naming matters

The instance variables from the controller action are passed to a view with the same name as the action, in a folder with the same name as the controller, in the `app/views` folder.


## Rendering other pages

For example, when you create a new post, the form is displayed in the controller action `posts#new`. When submitted, it goes to `posts#create`, where it's validated and saved. Then it redirects you to the newly created post.

But if it fails, you want to go back to the `posts#new` with the temporary information so you can fix it and not start from scratch.

This is how you do both cases:

```ruby
class PostController < ApplicationController
  def new
    # We create (even tho we don't save it) a @post instance variable because
    # we want the view to know which fields needs to display
    @post = Post.new
  end

  def create
    if @post.save
      # It worked, so we show the new post
      redirect_to post_path(@post.id)
      
      # A shorter way to achieve the same
      redirect_to @post
    else
      # Something went wrong, so we go back to new with the error message
      render :new, status: :unprocessable_entity
  end
end
```


## Multiple render and redirects

Keep in mind that neither `render` nor `redirect_to` stops the controller action like a `return` would do. Be careful with that.