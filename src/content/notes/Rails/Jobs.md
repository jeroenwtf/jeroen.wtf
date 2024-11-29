---
status: draft
modified: 2024-11-29T16:57:36+01:00
created: 2024-10-18
---

Jobs refers to a unit of work that is executed asynchronously, typically outside the scope of the main web request-response cycle. Jobs are essential for handling tasks that are time-consuming or not critical to be performed immediately, thereby improving the responsiveness and scalability of a Rails application.

The main benefits:

- **Performance improvement**: Offloading heavy or time-consuming tasks (e.g., sending emails, processing images, generating reports) to background jobs prevents blocking the main thread, resulting in faster response times for users.
- **Scalability**: Background jobs can be distributed across multiple workers or servers, allowing your application to handle a higher volume of tasks efficiently.
- **Reliability**: Jobs can be retried in case of failures, ensuring that critical tasks are eventually completed even if temporary issues occur.


## Active Job framework

Rails provides a built-in framework called **Active Job** that serves as a layer of abstraction for declaring jobs and making them run on various queuing backends. This means you can write your job logic once and switch between different queuing systems (like Sidekiq, Resque, Delayed Job, etc.) without changing your job code.


## Creating a job

For example, to send a welcome email to the newly registered user.

```bash
rails generate job SendEmail
```

This creates the file `app/jobs/send_email_job.rb` where you can define the job logic. The main method is `perform` and will receive the params of the `perform_later` method (check below).

```ruby
class SendEmailJob < ApplicationJob
  queue_as :mailers

  def perform(user)
    UserMailer.welcome_email(user).deliver_now
  end
end
```

And finally **enqueue the job** using the `perform_later` method.

```ruby
SendEmailJob.perform_later(@user)
```

This method schedules the job to be executed asynchronously by the configured backend.


## Choosing a backend

Active Job supports several queuing backends. Some popular choices include:

- **Sidekiq**: Uses threads to handle many jobs at the same time in the same process. It's known for its performance and efficiency.
- **Resque**: Uses Redis and forks a process for each job, providing isolation between jobs.
- **Delayed Job**: Stores jobs in the database, which is simple but may not be as performant for high-volume applications.
- **Que**: A high-performance job queue that leverages PostgreSQL's advisory locks.

To configure a backend, add the corresponding gem to your `Gemfile` and set it in your `config/application.rb` or environment-specific configuration files:

```ruby
# Gemfile
gem 'sidekiq'

# config/application.rb
config.active_job.queue_adapter = :sidekiq
```


## Advanced features

- **Job prioritization**: Assign different priorities to queues to control the order in which jobs are processed.
- **Retries and error handling**: Configure the number of retry attempts and handle specific exceptions to make your jobs more resilient.
- **Scheduling**: Use gems like `sidekiq-scheduler` or `whenever` to run jobs at specific times or intervals.


## Monitoring and managing jobs

Depending on the backend you choose, there are various tools and dashboards available to monitor and manage your jobs:

- **Sidekiq Web UI**: Provides a web interface to monitor job queues, retries, and failures.
- **Resque Web**: Similar to Sidekiq's interface, tailored for Resque.
- **Delayed Job Monitoring**: You can use custom dashboards or integrate with Rails Admin.


## Best practices

1. **Idempotency**: Ensure that jobs can be safely retried without causing unintended side effects.
2. **Error handling**: Gracefully handle exceptions within jobs and implement appropriate retry logic.
3. **Performance optimization**: Keep job logic efficient to minimize resource usage and processing time.
4. **Security**: Avoid exposing sensitive information in job arguments or logs.