---
status: draft
modified: 2024-11-29T16:58:02+01:00
created: 2024-10-09
---

When an HTTP request arrives from the browser it needs to be matched to a [[02 - Areas/Rails/Controllers|controller]] action, depending on the HTTP verb (GET, POST, PUT, DELETE). If there's no match it will throw an error.

It grabs the parameters and makes them available as `params`.

The routes are defined in `config/routes.rb`, and you can list them in the command line running `rails routes`.


## Root

The most important, defined as:

```ruby
root to: "kittens#index" # kittens controller, index action
```


## RESTful routes

There are seven types of action that you can use with a "resource", like a blog post or user. Something with a model.

1. GET all the posts (`index`).
2. GET a specific post (`show`).
3. GET the page that lets you create a new post (`new`).
4. POST the data from the `new` page so the server can create the new post (`create`).
5. GET the page to edit a post (`edit`).
6. POST the data from `edit` to update the post info (`update`).
7. DELETE a post using a delete request (`destroy`).

The long way to define these routes:

```ruby
get "/posts", to: "posts#index"
get "/posts/new", to: "posts#new"
get "/posts/:id", to: "posts#show"
post "/posts", to: "posts#create"  # usually a submitted form
get "/posts/:id/edit", to: "posts#edit"
put "/posts/:id", to: "posts#update" # usually a submitted form
delete "/posts/:id", to: "posts#destroy"
```

The show way to define all seven routes:

```ruby
resources :posts

# Or, if you don't want all routes
resources :posts, only: [:index, :show]
resources :users, except: [:index]
```

You can define non-RESTful urls as well:

```ruby
get '/somepath', to: 'some_controller#some_action'
```

Again, running `rails routes` you will see all the routes available. For example:

```
edit_post  GET  /posts/:id/edit(.:format)  posts#edit
```

The `(.:format)` part means that it's optional to include the format (which later would be included in the `params`).

The `edit_post` part is the route name. Rails provide helpers to generate the partial url appending `_path` (as in `edit_post_path`) or to generate the full url with `_url`.
