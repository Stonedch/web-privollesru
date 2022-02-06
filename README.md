# Privolles

A simple Django Landing Page for PLKNN company.

**Link to our web-site**: http://privolles.ru

## Table of content:

* [General info](#general-info)
* [Setup](#setup)
* [Setup with Docker](#setup-with-docker)
* [Status](#status)
* [Contacts](#contacts)
* [License](#license)
* [Contributing](#contributing)

## General info

A simple Django Landing Page for PLKNN company.

**Link to company web-site**: http://privolles.ru

## Setup

To run this application, you will need to follow these 3 steps:

### 1. Install Python and Pipenv

- [Python3](https://www.python.org/downloads/)
- [Pipenv](https://pipenv-es.readthedocs.io/es/stable/)

### 2. Local Setup and Running on Windows, Linux and Mac OS

```console
# Clone this repository into the directory of your choice
$ git clone https://github.com/stonedch/web-privollesru.git

# Move into project folder
$ cd web-privollesru

# Activate the Pipenv shell
$ pipenv shell

# Install from Pipfile
$ pipenv install

# Migrate
$ python manage.py migrate

# Collect static
$ python manage.py collectstatic

# Start server
$ python manage.py runserver
```

## Setup with Docker

```console
# Clone this repository into the directory of your choice
$ git clone https://github.com/stonedch/web-privollesru.git

# Move into project folder
$ cd web-privollesru

# Setup environments
$ cp .env.sample .env

# Start docker
$ docker-compose up -d --build
```

## Status

Project is: _in progress_

## Contacts

Created by [@stonedch](https://github.com/stonedch)

## License

This project is licensed under the terms of the **MIT** license.

> You can check out the full license [here](https://github.com/stonedch/web-privolles/blob/main/LICENSE)

## Contributing

1. Fork it ([https://github.com/stonedch/web-privolles.git](https://github.com/stonedch/web-privolles.git))
2. Create your feature branch (`git checkout -b feature/foo_bar`)
3. Commit your changes (`git commit -am 'add some foo_bar'`)
4. Push to the branch (`git push origin feature/foo_bar`)
5. Create a new Pull Request
