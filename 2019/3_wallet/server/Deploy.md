Django:


git pull project
install python3 and virtualenv
install dependencies in the virtualenv
install gunicorn (global)

#### test project by runing (from the folder with manage.py):

```
$ gunicorn --bind 0.0.0.0:PORT project.wsgy
```

deactivate

#### Setup gunicorn socket folder with the following:
<PATH: /etc/systemd/system/gunicorn.socket>
```

[Unit]
Description=gunicorn socket

[Socket]
ListenStream=/run/gunicorn.sock

[Install]
WantedBy=sockets.target

```


#### Setup gunicorn service folder with the folloing:
<PATH: /etc/systemd/system/gunicorn.service>
```
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=root
Group=www-data
WorkingDirectory=/root/project/projectdir
ExecStart=/root/project/projectdir/env/bin/gunicorn \
          --access-logfile - \
          --workers 3 \
          --bind unix:/run/gunicorn.sock \
          project.wsgi:application

[Install]
WantedBy=multi-user.target
```

#### Run
```
$ sudo systemctl start gunicorn.socket
$ sudo systemctl enable gunicorn.socket
$ sudo systemctl status gunicorn.socket
```

Next:
Configure nginx
install nginx

#### Go to /etc/nginx/sites-enabled/project
```
server {
    listen 80;
    server_name server_domain_or_IP;

    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        root /root/project/myprojectdir;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
```

```
$ sudo systemctl restart nginx
```
