---
title: 'Setting up SSL without a load balancer on Amazon ECS'
date: '2020-07-18'
draft: false
path: '/articles/ecs-ssl-nginx'
---

I was using ECS Fargate to serve a NodeJS API for a project, but Fargate essentially requires the use of a load balancer which costs $16 a month. I switched to using the EC2 version of ECS but was left with a problem of how to get SSL working to allow HTTPS traffic.

## Overview

This process uses nginx to receive incoming traffic on the EC2 server and then forwards it to the Docker container. To utilize SSL, we use [certbot](https://certbot.eff.org/about/), a free tool which generates SSL certificates and conveniently self-configures the nginx config.

This guide assumes you have a Docker container deployed to ECS EC2 with SSH access.

## Install nginx

Before working on SSL, let's get a basic nginx server working on our EC2 instance. This will allow us to receive the incoming traffic and forward it to our Docker container (without HTTPS at this point).

To install nginx on EC2, which uses Amazon Linux 2, follow these commands:

```shell
sudo amazon-linux-extras enable nginx1

yum clean metadata
yum install nginx

sudo yum -y install nginx
```

## Basic nginx config

Now that we have nginx installed, let's create a configuration file by first opening the default nginx config file:

```shell
sudo nano /etc/nginx/nginx.conf
```

Then paste the contents below, replacing `server_name` with your domain and port `5000` with the port your Docker container is listening on.

```conf
events { }

http {
  server {
    listen 80;
    listen [::]:80;

    server_name example.com;

    location / {
      proxy_pass http://localhost:5000/;
    }
  }
}
```

Next, check the syntax and reload nginx:

```shell
sudo nginx -t
sudo nginx -s reload
```

At this point you should be able to visit your domain in a web browser and be redirected to your Docker website/API using HTTP.

## Install Certbot

To install certbot on Amazon Linux 2, follow these steps:

```shell
yum install python27-devel git

git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt

/opt/letsencrypt/letsencrypt-auto --debug
```

We actually expect to get an error at this point because we are using Amazon's version of Linux. To fix this, follow these steps:

- `sudo nano /opt/letsencrypt/certbot-auto`
- Find this line in the file (likely around line 780): `elif [ -f /etc/redhat-release ]; then`
- Replace the whole line with this:

```shell
elif [ -f /etc/redhat-release ] || grep 'cpe:.*:amazon_linux:2' /etc/os-release > /dev/null 2>&1; then
```

## Run Certbot

Next, run the certbot command, which will configure things for you, replacing the domain with your own:

```shell
sudo /opt/letsencrypt/certbot-auto --nginx -d example.com --agree-tos
```

After prompting for your email address, certbot will send an automated challenge to your server and verify that you own it. When it passes, certbot will update your nginx config to include listening on port 443, referencing the SSL certificates, and redirecting HTTP requests to HTTPS.

For reference, cerbot saves three certificate files to `/etc/letsencrypt/live/example.com/`.

## Validate certificates

To double-check our certificates are good-to-go, we can run these commands below. If valid, you should see an expire date three months from now returned.

```shell
# local option
sudo openssl x509 -noout -dates -in /etc/letsencrypt/live/example/cert.pem

# remote option
curl -sIv https://example.com |& grep expire
```

## Setup auto renewal

Let's create a cronjob to automate renewal by opening your crontab with `sudo nano /etc/crontab` and pasting the code below. This will check daily at 3 am and will take care of the renewal process.

```shell
# Renew SSL Certs
0  3  *  *  *  ec2-user  /opt/letsencrypt/letsencrypt-auto --no-bootstrap renew --post-hook "systemctl reload nginx"
```

## Further Reading

- [Deploying Let’s Encrypt on an Amazon Linux AMI EC2 Instance](https://medium.com/@gnowland/deploying-lets-encrypt-on-an-amazon-linux-ami-ec2-instance-f8e2e8f4fc1f)
- [Use NGINX as a Reverse Proxy](https://www.linode.com/docs/web-servers/nginx/use-nginx-reverse-proxy/)
- [Certbot Instructions](https://certbot.eff.org/lets-encrypt/pip-nginx)
