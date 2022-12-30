# FibCalc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Commands

### Github

* Login: `gh auth login --with-token < ~/.ssh/<github_token_file_name>`
* Repo init: `git init -b main`
* Commit: `git add . && git commit -m "<comment>"`
* Remote repo create: `gh repo create <repo_name> --public --source=. --remote=<repo_name> --push`

### Docker

* docker `build . -f Dockerfile -t gbielesza/pwcho_zadanie1`
* docker `run -d -it --name pwcho_zadanie1 -p 80:80 -t gbielesza/pwcho_zadanie1`